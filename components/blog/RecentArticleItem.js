import Link from 'next/link';
import { useState } from 'react';

const RecentArticleItem = ({ article }) => {
  const [imageSrc, setImageSrc] = useState(article.image);
  const fallbackImage = article.fallbackImage || 'https://via.placeholder.com/600x400/FF7701/ffffff?text=BinBear+Blog';

  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  return (
    <div className="stacked-post-item">
      <Link href={`/blog/${article.slug}`}>
        <div className="stacked-image-container">
          <img 
            src={imageSrc} 
            alt={article.title} 
            className="img-fluid"
            onError={handleImageError}
          />
          <div className="stacked-overlay">
            <h4>{article.title}</h4>
          </div>
        </div>
      </Link>
      
      <style jsx>{`
        .stacked-post-item {
          height: calc(33.33% - 10px);
          margin-bottom: 15px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        .stacked-image-container {
          position: relative;
          height: 100%;
          overflow: hidden;
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
      `}</style>
    </div>
  );
};

export default RecentArticleItem; 