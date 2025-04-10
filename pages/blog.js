import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import RecentArticleItem from "@/components/blog/RecentArticleItem";
import TopicsSection from "@/components/blog/TopicsSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { fetchAllBlogs, fetchFeaturedBlogs, fetchPopularBlogs, transformBlogData } from "@/util/blogApi";
// Keeping the static data as fallback
import { featuredArticle as fallbackFeaturedArticle, recentArticles as fallbackRecentArticles, topicsData as fallbackTopicsData } from "@/data/blogData";

export default function Blog() {
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [featuredArticle, setFeaturedArticle] = useState(fallbackFeaturedArticle);
  const [recentArticles, setRecentArticles] = useState(fallbackRecentArticles);
  const [topicsData, setTopicsData] = useState(fallbackTopicsData);
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // Fetch all blogs
        const blogs = await fetchAllBlogs();
        
        if (blogs && blogs.length > 0) {
          // Transform the API data to match our application format
          const transformedBlogs = blogs.map(blog => transformBlogData(blog));
          
          // Get featured blogs for the main featured article
          const featuredBlogs = transformedBlogs.filter(blog => blog.is_featured === "Yes");
          
          // Set the featured article (first featured blog or first blog if no featured)
          setFeaturedArticle(featuredBlogs.length > 0 ? featuredBlogs[0] : transformedBlogs[0]);
          
          // Try to get popular blogs for the recent articles section
          try {
            const popularBlogsData = await fetchPopularBlogs();
            if (popularBlogsData && popularBlogsData.length > 0) {
              // Get featured article ID for filtering
              const featuredId = featuredBlogs.length > 0 ? featuredBlogs[0].id : (transformedBlogs.length > 0 ? transformedBlogs[0].id : null);
              
              // Transform and exclude the featured article if it's in the popular blogs
              const popularTransformed = popularBlogsData
                .map(blog => transformBlogData(blog))
                .filter(blog => featuredId === null || blog.id !== featuredId)
                .slice(0, 3); // Limit to 3 popular articles
              
              setRecentArticles(popularTransformed);
            } else {
              // Fallback to filtering from all blogs if popular endpoint returns empty
              const recentBlogsData = transformedBlogs
                .filter(blog => blog.id !== (featuredBlogs.length > 0 ? featuredBlogs[0].id : transformedBlogs[0].id))
                .slice(0, 3); // Limit to 3 recent articles
              setRecentArticles(recentBlogsData);
            }
          } catch (error) {
            console.error("Error fetching popular blogs:", error);
            // Fallback to recent from all blogs
            const recentBlogsData = transformedBlogs
              .filter(blog => blog.id !== (featuredBlogs.length > 0 ? featuredBlogs[0].id : transformedBlogs[0].id))
              .slice(0, 3); // Limit to 3 recent articles
            setRecentArticles(recentBlogsData);
          }
          
          // Set topics data (all blogs for now)
          setTopicsData(transformedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Fallback to static data is already set as initial state
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogData();
  }, []);
  
  // Handle pagination click
  const handlePageClick = (page) => {
    setActivePage(page);
    // In a real implementation, this would fetch different blog posts
  };

  return (
    <Layout>
      <div className="blog-page-wrapper">
        {/* Call-to-Action Banner */}
        <div className="cta-banner">
          <div className="container">
            <p>Why Wait? What is your time worth? Book Now & Save $20!</p>
          </div>
        </div>
        
        {loading ? (
          <LoadingSpinner message="Loading blog content..." />
        ) : (
          <>
            {/* Featured Content Grid Section */}
            <div className="featured-grid-section">
              <div className="container">
                <div className="row">
                  {/* Left Side - Main Featured Article */}
                  <div className="col-lg-8">
                    <div className="featured-article-wrapper">
                      <FeaturedArticle article={featuredArticle} />
                    </div>
                  </div>
                  
                  {/* Right Side - Stacked Recent Posts */}
                  <div className="col-lg-4">
                    <div className="stacked-posts">
                      <h3 className="section-title">Most Recent</h3>
                      
                      {recentArticles.map(article => (
                        <RecentArticleItem key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content Area */}
            <div className="blog-content-area">
              <div className="container">
                <div className="row">
                  {/* Main Blog Posts */}
                  <div className="col-lg-12 blog-main-column">
                    {/* Topics Section */}
                    <TopicsSection topics={topicsData} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* Pricing Estimator Section (Full Width) */}
        <div className="pricing-estimator-container">
          <div className="container">
            <div className="pricing-estimator-section">
              <div className="row">
                <div className="col-lg-6">
                  <div className="estimator-app-mockup">
                    <div className="mockup-browser">
                      <div className="browser-header">
                        <div className="browser-controls">
                          <span className="lock-icon">🔒</span>
                          <div className="address-bar"></div>
                          <span className="menu-icon">⋮</span>
                        </div>
                      </div>
                      <div className="browser-content">
                        <div className="app-interface">
                          <div className="app-header">
                            <button className="back-button">←</button>
                            <button className="close-button">×</button>
                          </div>
                          <div className="app-body">
                            <h3 className="app-title">Add Your Items</h3>
                            <div className="location-text">JK North San Diego (92069)</div>
                            <div className="my-items-section">
                              <span>My Items</span>
                              <span className="items-count">3</span>
                            </div>
                            <div className="item-categories">
                              <div className="category">
                                <div className="category-icons">
                                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF7701">
                                    <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6V20c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h8v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-5c0-1.1-.9-2-2-2zm-14 .5V6h12v2.5H6zm10 8V14H8v2.5H6V14H4v-3h16v3h-2v2.5h-2z"/>
                                  </svg>
                                </div>
                                <span>Couches & Chairs</span>
                              </div>
                              <div className="category">
                                <div className="category-icons">
                                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF7701">
                                    <path d="M4 8h16v2h-4v3h2v1H6v-1h2v-3H4V8zm1-5h14c.55 0 1 .45 1 1v2H4V4c0-.55.45-1 1-1zm0 18h14c.55 0 1-.45 1-1v-2H4v2c0 .55.45 1 1 1z"/>
                                  </svg>
                                </div>
                                <span>Tables & Dressers</span>
                              </div>
                              <div className="category">
                                <div className="category-icons">
                                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF7701">
                                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                                  </svg>
                                </div>
                                <span>Electronics</span>
                              </div>
                            </div>
                            <div className="price-estimate">
                              <div className="estimate-label">Estimate:</div>
                              <div className="price-range">$99-$178</div>
                              <button className="clear-items">Clear Items 3</button>
                            </div>
                            <div className="item-list">
                              <div className="item">
                                <span className="item-count">2</span>
                                <span className="item-name">Chair</span>
                                <div className="item-controls">
                                  <button>−</button>
                                  <button>+</button>
                                </div>
                              </div>
                              <div className="item">
                                <span className="item-count">1</span>
                                <span className="item-name">Couch/Sofa</span>
                                <div className="item-controls">
                                  <button>−</button>
                                  <button>+</button>
                                </div>
                              </div>
                              <div className="item">
                                <span className="item-count">0</span>
                                <span className="item-name">Sectional (2 piece)</span>
                                <div className="item-controls">
                                  <button>−</button>
                                  <button>+</button>
                                </div>
                              </div>
                              <div className="item">
                                <span className="item-count">0</span>
                                <span className="item-name">Loveseat</span>
                                <div className="item-controls">
                                  <button>−</button>
                                  <button>+</button>
                                </div>
                              </div>
                            </div>
                            <button className="book-now-btn">Book Now & Save $20!</button>
                            <button className="pick-up-btn">Pick These Up</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="estimator-content">
                    <h4>HOW MUCH WILL IT COST?</h4>
                    <h2>Try Our Pricing Estimator</h2>
                    <p>Our convenient and easy-to-use online pricing estimator makes getting an estimate* for your junk removal job fast and simple.</p>
                    <Link href="/truck-load-estimate" className="btn-get-estimate" >
                      <button>
                      Get Free Estimate
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Attribution */}
        <div className="container">
          <div className="image-attribution">
            {/* <p>All images courtesy of <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></p> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-page-wrapper {
          padding: 40px 0;
        }
        
        /* Loading Styles */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }
        
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #FF7701;
          animation: spin 1s ease infinite;
          margin-bottom: 15px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* CTA Banner */
        .cta-banner {
          background-color:rgb(255, 106, 0);
          background-image: linear-gradient(to right,rgb(255, 115, 8),rgb(255, 140, 0),rgb(255, 123, 0));
          color: white;
          text-align: center;
          padding: 12px 0;
          margin-bottom: 40px;
          margin-top: -40px;
          width: 100%;
        }
        
        .cta-banner p {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }
        
        /* Featured Content Grid Section */
        .featured-grid-section {
          margin-bottom: 50px;
        }
        
        .featured-article-wrapper {
          height: 100%;
        }
        
        .row {
          display: flex;
          flex-wrap: wrap;
        }
        
        .row > [class*="col-"] {
          display: flex;
          flex-direction: column;
        }
        
        .main-featured-article {
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .featured-image img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .main-featured-article:hover .featured-image img {
          transform: scale(1.03);
        }
        
        .featured-content {
        }
        
        .featured-title {
          color: #333;
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .featured-desc {
          color: #666;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .read-more-btn {
          display: inline-block;
          background-color: #26A566;
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 10px;
          transition: background-color 0.3s ease;
        }
        
        .read-more-btn:hover {
          background-color: #FF7701;
          color: white;
        }
        
        /* Section Titles */
        .section-title {
          color: #333;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 24px;
          position: relative;
        }
        
        /* Stacked Posts */
        .stacked-posts {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-bottom: 5px;
        }
        
        .stacked-post-item {
          flex: 1;
          margin-bottom: 15px;
          min-height: 110px;
        }
        
        .stacked-post-item:last-child {
          margin-bottom: 0;
        }
        
        .stacked-image-container {
          height: 100%;
        }
        
        .stacked-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .stacked-post-item:hover .stacked-image-container img {
          transform: scale(1.05);
        }
        
        .stacked-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 15px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .stacked-overlay h4 {
          color: white;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .stacked-post-item:hover .stacked-overlay {
          background-image: linear-gradient(to top, rgba(255, 119, 1, 0.8), rgba(255, 119, 1, 0.4), transparent);
        }
        
        /* Topics Section */
        .topics-container {
          margin-bottom: 50px;
          background-color:rgb(255, 81, 0);
          padding: 40px 0;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
        }
        
        .topics-wrapper {
          margin-bottom: 0;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 30px;
        }
        
        .topics-main-title {
          color: white;
          margin-bottom: 30px;
          font-weight: 700;
          font-size: 32px;
          position: relative;
          text-align: center;
        }
        
        .topics-grid-container {
          margin-bottom: 30px;
        }
        
        .topics-grid-container .row {
          margin-right: -10px;
          margin-left: -10px;
        }
        
        .topics-grid-container .col-lg-4 {
          padding-right: 10px;
          padding-left: 10px;
          margin-bottom: 20px;
        }
        
        /* Remove conflicting card styles from blog.js since they're now defined in the component */
        .topics-card {
          /* Styles moved to TopicCard.js component */
        }
        
        .topics-card-image {
          /* Styles moved to TopicCard.js component */
        }
        
        .topics-card-image img {
          /* Styles moved to TopicCard.js component */
        }
        
        .topics-card-content {
          /* Styles moved to TopicCard.js component */
        }
        
        .topics-card-title {
          /* Styles moved to TopicCard.js component */
        }
        
        .topics-read-more-btn {
          /* Styles moved to TopicCard.js component */
        }
        
        /* Pagination Controls */
        .topics-pagination {
          display: none;
        }
        
        .topics-pagination-prev, .topics-pagination-next {
          display: none;
        }
        
        .topics-pagination-prev:hover, .topics-pagination-next:hover {
          display: none;
        }
        
        .topics-pagination-text {
          display: none;
        }
        
        /* Sidebar */
        .blog-sidebar {
          padding-left: 30px;
        }
        
        /* Pricing Estimator (Full Width) */
        .pricing-estimator-container {
          margin: 60px 0;
          padding: 0;
        }
        
        .pricing-estimator-section {
          background-color:rgb(255, 98, 0);
          border-radius: 8px;
          padding: 50px;
          position: relative;
          overflow: hidden;
          color: white;
        }
        
        .estimator-app-mockup {
          max-width: 350px;
          height: auto;
          margin: 0 auto;
        }
        
        .mockup-browser {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .browser-header {
          background-color: #f0f0f0;
          padding: 8px;
          display: flex;
          align-items: center;
        }
        
        .browser-controls {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 12px;
        }
        
        .lock-icon {
          margin-right: 5px;
          opacity: 0.7;
        }
        
        .address-bar {
          flex-grow: 1;
          height: 20px;
          background-color: #e0e0e0;
          border-radius: 10px;
          margin: 0 5px;
        }
        
        .menu-icon {
          opacity: 0.7;
        }
        
        .browser-content {
          padding: 0;
        }
        
        .app-interface {
          background-color: #FF7701;
          color: white;
        }
        
        .app-header {
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }
        
        .back-button, .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }
        
        .app-body {
          padding: 10px 15px 20px;
        }
        
        .app-title {
          text-align: center;
          margin-bottom: 5px;
          font-size: 20px;
          font-weight: bold;
        }
        
        .location-text {
          font-size: 12px;
          text-align: center;
          margin-bottom: 15px;
        }
        
        .my-items-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
        }
        
        .items-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          color: #FF7701;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }
        
        .item-categories {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        
        .category {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          text-align: center;
        }
        
        .category-icons {
          background-color: white;
          border-radius: 5px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 5px;
        }
        
        .category span {
          font-size: 10px;
          max-width: 70px;
        }
        
        .price-estimate {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 10px;
        }
        
        .estimate-label {
          font-weight: bold;
          font-size: 14px;
        }
        
        .price-range {
          font-weight: bold;
          font-size: 14px;
        }
        
        .clear-items {
          background: none;
          border: 1px solid white;
          color: white;
          border-radius: 50px;
          padding: 2px 8px;
          font-size: 10px;
          cursor: pointer;
        }
        
        .item-list {
          margin-bottom: 15px;
        }
        
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 14px;
        }
        
        .item-count {
          width: 20px;
        }
        
        .item-name {
          flex-grow: 1;
        }
        
        .item-controls {
          display: flex;
          gap: 5px;
        }
        
        .item-controls button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          background-color: white;
          color: #FF7701;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
        }
        
        .book-now-btn {
          background-color: #FF7701;
          color: white;
          border: 1px solid white;
          border-radius: 4px;
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .pick-up-btn {
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          width: 100%;
          padding: 8px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .estimator-content {
          text-align: left;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          color: white;
          justify-content: center;
          height: 100%;
          h4{
            color: white;
          }
        }
        
        .estimator-content h4 {
          font-size: 18px;
          margin-bottom: 15px;
          font-weight: 600;
          color: white;
        }
        
        .estimator-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: 700;
          color: white;
        }
        
        .estimator-content p {
          color: white;
          margin-bottom: 25px;
          line-height: 1.6;
          
          font-size: 18px;
          max-width: 500px;
        }
        
        .btn-get-estimate {
          display: inline-block;
          background-color: #FF7701;
          color: white;
          padding: 15px 30px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
          font-size: 18px;
          align-self: flex-start;
        }
        
        .btn-get-estimate:hover {
          background-color: #E66900;
          color: white;
        }
        
        @media (max-width: 992px) {
          .estimator-content {
            text-align: center;
            padding-top: 40px;
          }
          
          .estimator-content p {
            margin-left: auto;
            margin-right: auto;
          }
          
          .btn-get-estimate {
            align-self: center;
          }
        }
        
        /* Image Attribution */
        .image-attribution {
          text-align: center;
          padding: 20px 0;
          margin-top: 30px;
          border-top: 1px solid #eee;
          font-size: 12px;
          color: #999;
        }
        
        .image-attribution a {
          color: #FF7701;
          text-decoration: none;
        }
        
        .image-attribution a:hover {
          text-decoration: underline;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .blog-sidebar {
            padding-left: 15px;
            margin-top: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .main-featured-article {
            margin-bottom: 30px;
          }
          
          .featured-content {
          }
          
          .stacked-post-item {
            width: 100%;
            margin-bottom: 20px;
          }
          
          .topics-grid-container .col-lg-4 {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </Layout>
  );
} 