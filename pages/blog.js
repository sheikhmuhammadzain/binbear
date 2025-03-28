import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [activePage, setActivePage] = useState(1);
  
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
        
        {/* Main Featured Article */}
        <div className="main-article-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="featured-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="COVID-19 in Winter: Staying Safe And Sane Inside" 
                    className="img-fluid main-featured-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="main-article-content">
                  <h2 className="main-article-title">COVID-19 In Winter: Staying Safe And Sane Inside</h2>
                  <p className="main-article-desc">
                    Even if you live where stay-at-home orders have been lifted, COVID-19 is still here and so is the winter weather. So staying indoors is still warranted.
                  </p>
                  <p className="main-article-desc">
                    Unfortunately.
                  </p>
                  <div className="main-article-cta">
                    <Link href="/blog-single" className="read-more-btn">
                      Read More
                    </Link>
                  </div>
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
              <div className="col-lg-8 blog-main-column">
                {/* Most Recent Section */}
                <div className="recent-posts-section">
                  <h3 className="section-title">Most Recent</h3>
                  <div className="recent-posts-container">
                    {/* Recent Post Item 1 */}
                    <div className="recent-post-item">
                      <div className="post-image">
                        <Link href="/blog-single">
                          <img 
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                            alt="Preparing for Your Next Move" 
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link href="/blog-single">
                          <h4 className="post-title">Preparing for Your Next Move: Tips for Downsizing and Decluttering</h4>
                        </Link>
                      </div>
                    </div>

                    {/* Recent Post Item 2 */}
                    <div className="recent-post-item">
                      <div className="post-image">
                        <Link href="/blog-single">
                          <img 
                            src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                            alt="Spring Has Sprung" 
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link href="/blog-single">
                          <h4 className="post-title">Spring Has Sprung: Your Guide to Freshening Up for the Season</h4>
                        </Link>
                      </div>
                    </div>

                    {/* Recent Post Item 3 */}
                    <div className="recent-post-item">
                      <div className="post-image">
                        <Link href="/blog-single">
                          <img 
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                            alt="Decluttering Projects" 
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link href="/blog-single">
                          <h4 className="post-title">Decluttering Projects to Tackle Before Spring Arrives</h4>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="pagination-dots">
                    <span className={`dot ${activePage === 1 ? 'active' : ''}`} onClick={() => handlePageClick(1)}></span>
                    <span className={`dot ${activePage === 2 ? 'active' : ''}`} onClick={() => handlePageClick(2)}></span>
                    <span className={`dot ${activePage === 3 ? 'active' : ''}`} onClick={() => handlePageClick(3)}></span>
                  </div>
                </div>

                {/* Topics Section */}
                <div className="topics-section">
                  <h3 className="section-title">Topics</h3>
                  <div className="topics-grid">
                    <div className="row">
                      {/* Topic Card 1 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
                                alt="Preparing for Your Next Move" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                Preparing for Your Next Move: Tips for Downsizing
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Topic Card 2 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1571587289339-8656e59af306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Spring Has Sprung" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                Spring Has Sprung: Your Guide to Freshening Up
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Topic Card 3 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1613685703305-f6cd0c8ddda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Home Renovation Trends" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                2023's Biggest Home Renovation Trends
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Topic Card 4 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                                alt="Honoring Martin Luther King" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                Honoring Martin Luther King Jr. Through Community Service
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Topic Card 5 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="How to Ring in the New Year" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                How to Ring in the New Year — With and Without Waste
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Topic Card 6 */}
                      <div className="col-md-6 mb-4">
                        <div className="topic-card">
                          <div className="topic-image">
                            <Link href="/blog-single">
                              <img 
                                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Spread Holiday Cheer" 
                                className="img-fluid"
                              />
                            </Link>
                          </div>
                          <div className="topic-content">
                            <h5 className="topic-title">
                              <Link href="/blog-single">
                                Spread Holiday Cheer
                              </Link>
                            </h5>
                            <Link href="/blog-single" className="read-more-link">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pagination Controls */}
                  <div className="pagination-controls">
                    <button className="prev-btn" onClick={() => activePage > 1 && handlePageClick(activePage - 1)}>
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                      </svg>
                    </button>
                    <div className="page-indicator">
                      Page {activePage} of 4
                    </div>
                    <button className="next-btn" onClick={() => activePage < 4 && handlePageClick(activePage + 1)}>
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Call to Action Sidebar (Similar to the pricing estimator in the image) */}
              <div className="col-lg-4 blog-sidebar">
                {/* Add any other sidebar content here if needed */}
              </div>
            </div>
          </div>
        </div>
        
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
        
        /* Main Featured Article */
        .main-article-container {
          margin-bottom: 50px;
        }
        
        .main-featured-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        
        .main-article-title {
          color: #333;
          font-size: 28px;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .main-article-desc {
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
        
        /* Recent Posts Section */
        .section-title {
          color: #333;
          margin-bottom: 25px;
          font-weight: 700;
          font-size: 24px;
          position: relative;
        }
        
        .recent-posts-section {
          margin-bottom: 60px;
        }
        
        .recent-posts-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .recent-post-item {
          flex: 1;
          min-width: 250px;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .post-image img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .recent-post-item:hover .post-image img {
          transform: scale(1.05);
        }
        
        .post-content {
          padding: 15px;
        }
        
        .post-title {
          color: #333;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        
        .post-title:hover {
          color: #FF7701;
        }
        
        /* Pagination Dots */
        .pagination-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ddd;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .dot.active {
          background-color: #FF7701;
        }
        
        /* Topics Section */
        .topics-section {
          margin-bottom: 50px;
        }
        
        .topics-grid {
          margin-bottom: 30px;
        }
        
        .topic-card {
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .topic-image img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .topic-card:hover .topic-image img {
          transform: scale(1.05);
        }
        
        .topic-content {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .topic-title {
          color: #333;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 1.4;
          flex-grow: 1;
        }
        
        .topic-title:hover {
          color: #FF7701;
        }
        
        .read-more-link {
          color: #FF7701;
          font-weight: 600;
          text-decoration: none;
          align-self: flex-start;
        }
        
        .read-more-link:hover {
          text-decoration: underline;
        }
        
        /* Pagination Controls */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
        
        .prev-btn, .next-btn {
          background-color: #f0f0f0;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .prev-btn:hover, .next-btn:hover {
          background-color: #e0e0e0;
        }
        
        .page-indicator {
          font-size: 14px;
          color: #666;
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
          justify-content: center;
          height: 100%;
        }
        
        .estimator-content h4 {
          font-size: 18px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .estimator-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: 700;
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
          .main-article-container {
            margin-bottom: 30px;
          }
          
          .main-article-content {
            padding-top: 20px;
          }
          
          .recent-posts-container {
            flex-direction: column;
          }
          
          .recent-post-item {
            width: 100%;
            margin-bottom: 20px;
          }
          
          .topics-grid .col-md-6 {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </Layout>
  );
} 