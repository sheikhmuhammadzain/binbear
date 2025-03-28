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
    </div>
  );
};

export default TopicCard; 