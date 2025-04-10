import { useState } from 'react';
import TopicCard from './TopicCard';

const TopicsSection = ({ topics }) => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(topics.length / 9); // Assuming 9 topics per page
  const itemsPerPage = 9;
  
  // Calculate which topics to display based on current page
  const displayedTopics = topics.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );
  
  // Handle pagination click
  const handlePageClick = (page) => {
    setActivePage(page);
    // Scroll to the top of the topics section
    document.querySelector('.topics-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="topics-container">
      <div className="topics-wrapper">
        <h2 className="topics-main-title">Topics</h2>
        <div className="topics-grid-container">
          <div className="topics-grid">
            {displayedTopics.map((topic, index) => (
              <div key={topic.id} className="topics-grid-item">
                <TopicCard topic={topic} />
              </div>
            ))}
          </div>

          {/* Pagination Controls - Only show if there are multiple pages */}
          {totalPages > 1 && (
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
          )}
        </div>
      </div>

      <style jsx>{`
        .topics-container {
          margin-bottom: 50px;
          background-color: rgb(255, 81, 0);
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
        
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .topics-grid-item {
          height: 100%;
        }
        
        .topics-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
          padding: 15px 0;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          max-width: 300px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .topics-pagination-prev, .topics-pagination-next {
          background-color: rgba(0, 0, 0, 0.3);
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
        
        .topics-pagination-prev:hover, .topics-pagination-next:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .topics-pagination-prev:disabled, .topics-pagination-next:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .topics-pagination-text {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .topics-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .topics-grid {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default TopicsSection; 