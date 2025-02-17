import "./Articlecard.css";
import { FaClock } from "react-icons/fa";

const Articlecard = ({ image, category, date, title, description, readTime, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <div className="article-meta">
          <span className="category">{category}</span> • <span>{date}</span>
        </div>
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <div className="article-footer">
          <span className="read-time">
            <FaClock /> {readTime} min read
          </span>
          <a href={link} className="read-more">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articlecard;
