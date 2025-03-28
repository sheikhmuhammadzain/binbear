import Link from 'next/link';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="main-featured-article">
      <div className="featured-image">
        <Link href={`/blog/${article.slug}`}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="featured-content">
        <h2 className="featured-title">{article.title}</h2>
        <p className="featured-desc">
          {article.description}
        </p>
        <div className="button-container">
          <Link href={`/blog/${article.slug}`} className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .main-featured-article {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .featured-image {
          height: 350px;
          overflow: hidden;
        }
        
        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .featured-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 25px;
        }
        
        .featured-title {
          color: #333;
          font-size: 26px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .featured-desc {
          color: #666;
          margin-bottom: 15px;
          line-height: 1.6;
          flex-grow: 1;
        }
        
        .button-container {
          margin-top: auto;
        }
        
        .read-more-btn {
          display: inline-block;
          background-color: #26A566;
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        
        .read-more-btn:hover {
          background-color: #FF7701;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default FeaturedArticle; 