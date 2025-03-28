import Link from 'next/link';

const RecentArticleItem = ({ article }) => {
  return (
    <div className="stacked-post-item">
      <Link href={`/blog/${article.slug}`}>
        <div className="stacked-image-container">
          <img 
            src={article.image} 
            alt={article.title} 
            className="img-fluid"
          />
          <div className="stacked-overlay">
            <h4>{article.title}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentArticleItem; 