import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-up';

/**
 * Global Scroll Reveal Activator
 *
 * Wires up every element already carrying a `.reveal*` / `.fade-up` class
 * (see src/styles/animations.css) to a single shared IntersectionObserver,
 * without requiring each component to manage its own ref/observer.
 *
 * Cheap by design:
 *  - One IntersectionObserver instance for the whole app (not one per card).
 *  - Elements are unobserved the moment they've revealed once.
 *  - Initial scan runs on mount and on every route change.
 *  - A lightweight MutationObserver also watches for reveal elements that
 *    mount later from in-page state changes (wizard steps, tab switches,
 *    conditionally-rendered drawers, etc.) — these don't trigger a route
 *    change, so without this they'd stay stuck at opacity: 0 forever.
 *  - No-ops entirely under prefers-reduced-motion — content is shown instantly.
 */
export function useGlobalReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const observeNew = (root = document) => {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-visible') && !el.dataset.revealObserved) {
          el.dataset.revealObserved = 'true';
          io.observe(el);
        }
      });
    };

    // Initial pass for the freshly-rendered route
    observeNew();

    // Catch reveal elements added later by in-page state changes
    // (wizard steps, tabs, drawers) that don't trigger a route change.
    // Scoped to #main-content only — the header/sidebar chrome never
    // uses these classes, so there's no need to watch the whole document.
    const scopeRoot = document.getElementById('main-content') || document.body;
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches?.(REVEAL_SELECTOR)) observeNew(node.parentNode || scopeRoot);
          if (node.querySelector?.(REVEAL_SELECTOR)) observeNew(node);
        });
      }
    });
    mo.observe(scopeRoot, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}

export default useGlobalReveal;
