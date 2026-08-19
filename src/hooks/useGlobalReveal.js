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
 *  - One observer instance for the whole app (not one per card).
 *  - Elements are unobserved the moment they've revealed once.
 *  - Re-scans only on route change (new page content), via a microtask
 *    delay so it runs after React has painted the new DOM.
 *  - No-ops entirely under prefers-reduced-motion — content is shown instantly.
 */
export function useGlobalReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodes = document.querySelectorAll(REVEAL_SELECTOR);

    if (prefersReduced) {
      nodes.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    nodes.forEach((el) => {
      // Skip anything already revealed (e.g. re-scan after in-page nav)
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);
}

export default useGlobalReveal;
