import { useEffect } from 'react';

/**
 * Enterprise SEO & Document Title Manager
 * Dynamically updates <title>, <meta name="description">, and OpenGraph tags per route.
 */
export function useDocumentTitle(title, description, canonicalPath) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | GACIS Cargo Services — Global Freight Intelligence`
      : 'GACIS Cargo Services — Global Freight & Logistics Intelligence';
    
    document.title = fullTitle;

    const defaultDesc = 'Powering high-value supply chains across the Gulf, Central Asia (CIS), and South Asian corridors with multimodal precision and real-time intelligence.';
    const finalDesc = description || defaultDesc;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = finalDesc;

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = fullTitle;

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = finalDesc;

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + (canonicalPath || window.location.pathname);

  }, [title, description, canonicalPath]);
}

export default useDocumentTitle;
