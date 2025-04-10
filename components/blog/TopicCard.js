import Link from 'next/link';

const TopicCard = ({ topic }) => {
  return (
    <div className="topics-card">
      <div className="topics-card-image">
        <img 
          src={topic.image} 
          alt={topic.title} 
          className="img-fluid"
        />
      </div>
      <div className="topics-card-content">
        <h4 className="topics-card-title">{topic.title}</h4>
        <Link href={`/blog/${topic.slug}`} className="topics-read-more-btn">
          Read More
      </Link>
      </div>
      
      <style jsx>{`
        .topics-card {
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        
        .topics-card-image {
          position: relative;
          overflow: hidden;
          height: 110px;
          width: 110px;
          min-width: 110px; /* Fixed minimum width */
          flex-shrink: 0;
        }
        
        .topics-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .topics-card-content {
          padding: 15px 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .topics-card-title {
          color: #333;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.3;
          /* Ensure text doesn't overflow and is consistently displayed */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 36px; /* Approximate height for 2 lines */
        }
        
        .topics-read-more-btn {
          display: inline-block;
          background-color: #26A566;
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          transition: background-color 0.3s ease;
          text-align: center;
          align-self: flex-start;
        }
        
        .topics-read-more-btn:hover {
          background-color: #FF7701;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default TopicCard; 