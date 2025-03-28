import { useState } from 'react';
import TopicCard from './TopicCard';
import { getAllTopicsPages } from '@/data/blogData';

const TopicsSection = ({ topics }) => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = getAllTopicsPages();
  
  // Handle pagination click
  const handlePageClick = (page) => {
    setActivePage(page);
    // In a real implementation, this would fetch different blog posts
  };

  return (
    <div className="topics-container">
      <div className="topics-wrapper">
        <h2 className="topics-main-title">Topics</h2>
        <div className="topics-grid-container">
          <div className="row">
            {topics.map((topic, index) => (
              <div key={topic.id} className="col-lg-4 col-md-6 mb-4">
                <TopicCard topic={topic} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="topics-pagination">
            <button 
              className="topics-pagination-prev" 
              onClick={() => activePage > 1 && handlePageClick(activePage - 1)}
              disabled={activePage === 1}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#fff" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              </svg>
            </button>
            <div className="topics-pagination-text">
              Page {activePage} of {totalPages}
            </div>
            <button 
              className="topics-pagination-next" 
              onClick={() => activePage < totalPages && handlePageClick(activePage + 1)}
              disabled={activePage === totalPages}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#fff" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsSection; 