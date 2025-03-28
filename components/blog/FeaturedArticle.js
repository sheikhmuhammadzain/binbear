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
        <Link href={`/blog/${article.slug}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle; 