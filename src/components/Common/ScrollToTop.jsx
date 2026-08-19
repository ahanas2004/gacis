import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  // Disable automatic browser scroll restoration so SPA navigations always start at top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Instant reset before paint
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const mainViewport = document.querySelector('.main-viewport');
      if (mainViewport) mainViewport.scrollTop = 0;

      const mainContent = document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;
    }
  }, [pathname, search, hash]);

  // Secondary backup tick to handle async or dynamic component mounting
  useEffect(() => {
    if (!hash) {
      const resetScroll = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        const mainViewport = document.querySelector('.main-viewport');
        if (mainViewport) mainViewport.scrollTop = 0;
      };

      resetScroll();
      const rafId = requestAnimationFrame(resetScroll);
      const timer = setTimeout(resetScroll, 20);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timer);
      };
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;

