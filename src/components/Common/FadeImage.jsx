import { useState } from 'react';
import './FadeImage.css';

/**
 * Drop-in replacement for <img> that fades in once decoded instead of
 * popping in abruptly. Shows a subtle skeleton shimmer while loading.
 * No new dependencies — plain onLoad handler + CSS transition.
 *
 * Usage: <FadeImage src="..." alt="..." className="diff-img" />
 * Any className passed through is applied to the underlying <img>,
 * so existing component CSS (hover zoom etc.) keeps working unchanged.
 */
const FadeImage = ({ src, alt, className = '', wrapperClassName = '', ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span className={`fade-image-wrap ${isLoaded ? 'is-loaded' : ''} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`fade-image ${className}`}
        onLoad={() => setIsLoaded(true)}
        loading={rest.loading || 'lazy'}
        decoding="async"
        {...rest}
      />
    </span>
  );
};

export default FadeImage;
