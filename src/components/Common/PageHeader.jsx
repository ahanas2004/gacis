import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PageHeader.css';

/**
 * Enterprise Command Center PageHeader Component
 * Unified, bulletproof header banner used across all GACIS subpages.
 */
export const PageHeader = ({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  badge,
  title,
  description,
  backLink,
  breadcrumbs,
  statusTag,
  children,
  className = '',
}) => {
  return (
    <header className={`page-header bg-maroon ${className}`}>
      {/* Ambient background decoration */}
      <div className="page-header-ambient-glow" aria-hidden="true" />
      <div className="page-header-grid-overlay" aria-hidden="true" />

      <div className="container page-header-inner">
        {/* Optional Back Link or Breadcrumbs */}
        {backLink && (
          <div className="page-header-nav-back">
            <Link to={backLink.to} className="page-header-back-link">
              <ArrowLeft size={16} />
              <span>{backLink.label || 'Back'}</span>
            </Link>
          </div>
        )}

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="page-header-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx}>
                  {crumb.to ? (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && <span className="breadcrumb-separator">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow / Badges Row */}
        {(eyebrow || badge || statusTag) && (
          <div className="page-header-eyebrow-row">
            {badge ? (
              badge
            ) : eyebrow ? (
              <span className="page-header-eyebrow">
                {EyebrowIcon && <EyebrowIcon size={14} className="eyebrow-icon-svg" />}
                <span>{eyebrow}</span>
              </span>
            ) : null}

            {statusTag && (
              <span className="page-header-status-tag">
                <span className="ph-status-dot" />
                <span>{statusTag}</span>
              </span>
            )}
          </div>
        )}

        {/* Main H1 Title */}
        {title && <h1 className="page-header-title">{title}</h1>}

        {/* Subtitle / Overview */}
        {description && <p className="page-header-desc">{description}</p>}

        {/* Custom Actions, Search Bars, or Telemetry Slots */}
        {children && <div className="page-header-addon-slot">{children}</div>}
      </div>
    </header>
  );
};

export default PageHeader;
