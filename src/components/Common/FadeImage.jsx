import { useState, useRef, useEffect } from 'react';
import './FadeImage.css';

const FadeImage = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  webpSrc,
  loading = 'lazy',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <span className={`fade-image-wrap ${isLoaded ? 'is-loaded' : ''} ${wrapperClassName}`}>
      <picture>
        {webpSrc && <source type="image/webp" srcSet={webpSrc} />}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`fade-image ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          loading={loading}
          decoding="async"
          {...rest}
        />
      </picture>
    </span>
  );
};

export default FadeImage;
