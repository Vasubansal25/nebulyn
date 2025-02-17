
import "./Sidebar.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* Categories Section */}
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {[
            "Technology (45)",
            "Development (38)",
            "Design (32)",
            "Business (28)",
            "Cloud Computing (25)",
            "Security (22)",
            "Mobile (20)",
            "DevOps (18)",
          ].map((category, index) => (
            <li key={index}>
              {category} <span>➜</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="popular-tags">
        <h3>Popular Tags</h3>
        <div className="tags">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "UI/UX",
            "API",
            "Cloud",
            "DevOps",
            "Security",
            "Mobile",
            "Web Development",
            "Database",
            "Architecture",
            "Testing",
            "Performance",
          ].map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest articles and insights straight to your inbox.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe Now</button>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="social-buttons">
          <button className="twitter"><FaTwitter /> Twitter</button>
          <button className="linkedin"><FaLinkedin /> LinkedIn</button>
          <button className="facebook"><FaFacebook /> Facebook</button>
          <button className="instagram"><FaInstagram /> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
