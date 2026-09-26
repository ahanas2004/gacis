import { useEffect, useRef, useState } from 'react';

export const LazyVideo = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onLoad,
  immediate = false,
  ...rest
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(immediate);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (immediate) {
      setIsVisible(true);
      setShouldLoad(true);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, [immediate]);

  useEffect(() => {
    if (shouldLoad && !hasLoaded) {
      setHasLoaded(true);
      onLoad?.();
    }
  }, [shouldLoad, hasLoaded, onLoad]);

  if (!shouldLoad) {
    return (
      <div ref={videoRef} className={`lazy-video-placeholder ${className}`} aria-hidden="true">
        {poster && <img src={poster} alt="" className="lazy-video-poster" loading="eager" fetchPriority="low" />}
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`lazy-video ${hasLoaded ? 'is-loaded' : ''} ${className}`}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata"
      {...rest}
    />
  );
};

export default LazyVideo;