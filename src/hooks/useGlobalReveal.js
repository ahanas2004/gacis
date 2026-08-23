import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-up';

/**
 * Global Scroll Reveal Activator
 * Wires up all elements carrying `.reveal*` / `.fade-up` classes to a shared
 * IntersectionObserver for smooth viewport-triggered scroll entrance animations across all pages.
 */
export function useGlobalReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reset dataset markers on route change so freshly rendered route components re-evaluate
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      delete el.dataset.revealObserved;
    });

    if (prefersReduced) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '150px 0px 150px 0px' }
    );

    const observeElement = (el) => {
      if (!el || el.classList.contains('is-visible')) return;
      if (!el.dataset.revealObserved) {
        el.dataset.revealObserved = 'true';
        io.observe(el);
      }
    };

    const scanContainer = (root = document) => {
      if (!root) return;
      if (root.matches?.(REVEAL_SELECTOR)) observeElement(root);
      const elements = root.querySelectorAll ? root.querySelectorAll(REVEAL_SELECTOR) : [];
      elements.forEach(observeElement);
    };

    // Initial pass for freshly rendered page
    scanContainer();

    // Secondary pass after layout render frame to catch image-loaded / async items
    const timerId = setTimeout(() => {
      scanContainer();
    }, 200);

    // Watch for dynamically added DOM elements (wizard steps, tab switching, lazy cards)
    const scopeRoot = document.getElementById('main-content') || document.body;
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          scanContainer(node);
        });
      }
    });
    mo.observe(scopeRoot, { childList: true, subtree: true });

    return () => {
      clearTimeout(timerId);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}

export default useGlobalReveal;

