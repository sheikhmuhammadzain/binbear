import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { getBlogBySlug, recentArticles } from "@/data/blogData";
import Link from "next/link";
import RecentArticleItem from "@/components/blog/RecentArticleItem";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // If the page is still loading or slug not available
  if (router.isFallback || !slug) {
    return (
      <Layout>
        <div className="container">
          <div className="loading-container">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Get blog data based on slug
  const blogPost = getBlogBySlug(slug);
  
  // If blog post not found
  if (!blogPost) {
    return (
      <Layout>
        <div className="container">
          <div className="not-found-container">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="btn btn-primary">
              Back to Blogs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  const otherRecentArticles = recentArticles
    .filter(article => article.slug !== slug)
    .slice(0, 3);

  return (
    <Layout>
      <div className="blog-post-wrapper">
        {/* Hero Banner */}
        <div className="blog-post-hero">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="blog-post-hero-image"
          />
        </div>
        
        {/* Blog Content */}
        <div className="blog-post-content-area">
          <div className="container">
            <div className="row">
              {/* Main Blog Content */}
              <div className="col-lg-8">
                <div className="blog-post-content">
                  <h1 className="blog-post-title">{blogPost.title}</h1>
                  
                  <div className="blog-content" 
                    dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  
                  {/* Post Meta Information */}
                  <div className="blog-post-meta">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="post-tags">
                          <span className="tag-label">Tags:</span>
                          <Link href="#" className="tag-link">Junk Removal</Link>
                          <Link href="#" className="tag-link">Storage Units</Link>
                          <Link href="#" className="tag-link">Cleanout</Link>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="post-share">
                          <span className="share-label">Share:</span>
                          <a href="#" className="share-link" aria-label="Share on Facebook">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#" className="share-link" aria-label="Share on Twitter">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#" className="share-link" aria-label="Share on LinkedIn">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="sidebar-widget cta-widget">
                    <div className="cta-content">
                      <h4>Need Junk Removal?</h4>
                      <p>Book your appointment today and save $20 on our services.</p>
                      <Link href="/contact" className="cta-button">
                        Get Started
                      </Link>
                    </div>
                  </div>
                  
                  <div className="sidebar-widget recent-posts">
                    <h3 className="widget-title">Recent Posts</h3>
                    {otherRecentArticles.map(article => (
                      <RecentArticleItem key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="post-navigation">
              <Link href="/blog" className="back-to-blog">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Blog Post Styles */
        .blog-post-wrapper {
          margin-bottom: 60px;
        }
        
        /* Hero Banner */
        .blog-post-hero {
          width: 100%;
          overflow: hidden;
          margin-bottom: 30px;
          border-bottom: 4px solid #FF7701;
        }
        
        .blog-post-hero-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        
        /* Blog Content */
        .blog-post-content-area {
          padding: 0 0 40px;
        }
        
        .blog-post-content {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 30px;
        }
        
        .blog-post-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #FF0000;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        
        .blog-content {
          color: #333;
          line-height: 1.8;
          font-size: 16px;
        }
        
        .blog-content h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 35px 0 15px;
          color: #FF0000;
        }
        
        .blog-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 25px 0 15px;
          color: #333;
        }
        
        .blog-content p {
          margin-bottom: 20px;
        }
        
        .blog-content a {
          color: #FF7701;
          text-decoration: underline;
        }
        
        .blog-content a:hover {
          color: #e05e00;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 25px auto;
          display: block;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 20px;
          padding-left: 30px;
        }
        
        .blog-content li {
          margin-bottom: 10px;
        }
        
        /* Post Meta */
        .blog-post-meta {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .post-tags, .post-share {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .tag-label, .share-label {
          font-weight: 600;
          color: #555;
          margin-right: 10px;
        }
        
        .tag-link {
          display: inline-block;
          background-color: #f0f0f0;
          color: #666;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          margin-right: 8px;
          margin-bottom: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .tag-link:hover {
          background-color: #FF7701;
          color: white;
        }
        
        .share-link {
          font-size: 18px;
          color: #555;
          margin-right: 15px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .share-link:hover {
          color: #FF7701;
        }
        
        /* Sidebar */
        .blog-sidebar {
          padding-left: 20px;
        }
        
        .sidebar-widget {
          margin-bottom: 30px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .widget-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin: 0;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .recent-posts {
          padding-bottom: 15px;
        }
        
        .recent-posts .stacked-post-item {
          margin: 15px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        /* CTA Widget */
        .cta-widget {
          background-color: #FF7701;
          color: white;
          border-radius: 8px;
        }
        
        .cta-content {
          padding: 25px;
          text-align: center;
        }
        
        .cta-content h4 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .cta-content p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        
        .cta-button {
          display: inline-block;
          background-color: white;
          color: #FF7701;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }
        
        /* Post Navigation */
        .post-navigation {
          margin-top: 40px;
          text-align: center;
        }
        
        .back-to-blog {
          display: inline-block;
          background-color: #FF7701;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(255, 119, 1, 0.3);
        }
        
        .back-to-blog:hover {
          background-color: #e05e00;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(255, 119, 1, 0.4);
        }
        
        /* Loading */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }
        
        /* Not Found */
        .not-found-container {
          text-align: center;
          padding: 100px 0;
        }
        
        .not-found-container h1 {
          font-size: 36px;
          margin-bottom: 20px;
          color: #333;
        }
        
        .not-found-container p {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .blog-post-title {
            font-size: 28px;
          }
          
          .blog-sidebar {
            padding-left: 0;
            margin-top: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .blog-post-title {
            font-size: 24px;
          }
          
          .post-tags, .post-share {
            margin-bottom: 15px;
          }
          
          .blog-post-content {
            padding: 20px;
          }
        }
      `}</style>
    </Layout>
  );
} 