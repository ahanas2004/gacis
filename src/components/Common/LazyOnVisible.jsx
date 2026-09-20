import { useEffect, useRef, useState } from 'react';

/**
 * Defers mounting (and therefore lazy chunk download) until the section
 * is near the viewport. Keeps initial home JS off the critical path.
 */
export const LazyOnVisible = ({
  children,
  rootMargin = '320px 0px',
  minHeight = 280,
  className = ''
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazyOnVisible;
