import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, ArrowLeft, ArrowRight, ExternalLink, Share2, Copy, Check, 
  ShieldCheck, Calendar, Clock, UserCheck, Eye, Layers
} from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import { getArticleById, rareLogisticsArticles } from '../../data/articles';
import './Resources.css';

export const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = getArticleById(articleId);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="resources-page section-padding text-center">
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2>Article Not Found</h2>
          <p>The requested logistics intelligence report does not exist or has been relocated.</p>
          <Link to="/resources" className="btn btn-primary margin-top-md">
            <ArrowLeft size={16} /> Back to Knowledge Hub
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedArticles = rareLogisticsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="resources-page article-detail-page">
      <SEO 
        title={`${article.title} — GACIS Intelligence`}
        description={article.excerpt}
        canonical={`/resources/${article.slug}`}
      />

      {/* Article Page Header */}
      <PageHeader
        eyebrow={article.category}
        eyebrowIcon={BookOpen}
        title={article.title}
        description={article.excerpt}
        statusTag={article.rarityScore}
      >
        <div className="res-header-actions">
          <Link to="/resources" className="btn btn-outline-white">
            <ArrowLeft size={15} /> BACK TO KNOWLEDGE HUB
          </Link>
          <button type="button" onClick={handleCopyLink} className="btn btn-primary">
            {copied ? <><Check size={15} /> LINK COPIED!</> : <><Share2 size={15} /> SHARE ARTICLE LINK</>}
          </button>
        </div>
      </PageHeader>

      {/* Main Article Content Container */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="article-content-wrapper">
            
            {/* Meta Bar */}
            <div className="acw-meta-bar">
              <div className="amb-author-info">
                <UserCheck size={18} className="text-gold" />
                <div>
                  <strong>{article.author}</strong>
                  <span>Published {article.date} • {article.readTime}</span>
                </div>
              </div>

              {article.externalRef && (
                <a 
                  href={article.externalRef} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="amb-external-pill"
                >
                  <span>Source: {article.externalSource}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Stats Banner */}
            <div className="acw-stats-banner">
              {article.stats.map((s, idx) => (
                <div className="asb-item" key={idx}>
                  <span className="asb-val">{s.val}</span>
                  <span className="asb-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Article Body */}
            <div className="acw-body">
              {article.fullContent.split('\n\n').map((paragraph, idx) => {
                if (paragraph.trim().startsWith('###')) {
                  return <h3 key={idx}>{paragraph.replace('###', '').trim()}</h3>;
                }
                if (paragraph.trim().startsWith('####')) {
                  return <h4 key={idx}>{paragraph.replace('####', '').trim()}</h4>;
                }
                if (paragraph.trim().startsWith('* ') || paragraph.trim().startsWith('1. ')) {
                  return (
                    <div key={idx} className="acw-list-callout">
                      <p>{paragraph.trim()}</p>
                    </div>
                  );
                }
                return <p key={idx}>{paragraph.trim()}</p>;
              })}
            </div>

            {/* Verification Footer Banner */}
            <div className="acw-verification-box">
              <ShieldCheck size={26} className="text-gold flex-shrink-0" />
              <div>
                <h4>Verified Logistics Field Intelligence</h4>
                <p>Authored and reviewed by GACIS Senior Supply Chain Engineers following ISO 9001:2015 quality standards and TAPA TSR-1 security protocols.</p>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="acw-bottom-cta">
              <h3>Need Custom Route Engineering for Your Freight?</h3>
              <p>Contact our dedicated corridor engineering team for a confidential trade lane assessment.</p>
              <div className="abc-btns">
                <Link to="/quote" className="btn btn-primary">
                  REQUEST CORRIDOR QUOTE <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn btn-outline-dark">
                  TALK TO SPECIALIST DESK
                </Link>
              </div>
            </div>

          </div>

          {/* Related Articles Section */}
          <div className="related-articles-section margin-top-xl">
            <div className="section-heading text-center centered-heading">
              <span className="eyebrow text-gold">EXPLORE MORE INTELLIGENCE</span>
              <h2>Related Rare Logistics Field Reports</h2>
            </div>

            <div className="res-articles-grid">
              {relatedArticles.map((art) => (
                <div className="res-art-card" key={art.id}>
                  <div className="rac-top">
                    <span className="rac-tag">{art.categoryTag}</span>
                    <span className="rac-score">{art.rarityScore}</span>
                  </div>
                  <h3>{art.title}</h3>
                  <p className="rac-excerpt">{art.excerpt}</p>
                  <div className="rac-footer">
                    <span className="rac-author">{art.readTime}</span>
                    <Link to={`/resources/${art.slug}`} className="rac-read-btn">
                      DIRECT ARTICLE LINK <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
