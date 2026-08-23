import { useState, useRef, useEffect } from 'react';
import './FadeImage.css';

const FadeImage = ({ src, alt, className = '', wrapperClassName = '', ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <span className={`fade-image-wrap ${isLoaded ? 'is-loaded' : ''} ${wrapperClassName}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`fade-image ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        loading={rest.loading || 'lazy'}
        decoding="async"
        {...rest}
      />
    </span>
  );
};

export default FadeImage;
