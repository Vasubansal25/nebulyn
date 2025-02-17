

import "./Insights.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Sidebar from "./Sidebar";
import ArticleCard from "./Articlecard"; 
import Nav from "./Nav";
import Footer from "./Footer";

const Insights = () => {
  return (
    <div className="blog-container">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <section className="search-section">
        <h2>Our Latest Insights & News</h2>
        <p>Discover the latest trends, insights, and updates from our team</p>
        <div className="search-box">
          <input type="text" placeholder="Search articles..." />
          <button type="submit">🔍</button>
        </div>
      </section>

      {/* Featured Article (You may add content here later) */}
      <div className="featured-article"></div>

      {/* Main Content Area */}
      <div className="content-layout">
        {/* Blog List */}
        <div className="articles-container">
          <ArticleCard
            image="https://source.unsplash.com/400x300/?technology"
            category="Backend"
            date="Feb 12, 2024"
            title="The Complete Guide to Modern API Design"
            description="Explore best practices for designing robust and scalable APIs that meet the demands of modern applications..."
            readTime="12"
            link="#"
          />

          <ArticleCard
            image="https://source.unsplash.com/400x300/?programming"
            category="Frontend"
            date="Jan 28, 2024"
            title="Mastering React Components"
            description="Understand how to create reusable components in React to build scalable applications..."
            readTime="10"
            link="#"
          />

          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
          <ArticleCard
            image="https://source.unsplash.com/400x300/?cloud"
            category="DevOps"
            date="Mar 5, 2024"
            title="Cloud Deployment Strategies"
            description="Explore different cloud deployment strategies for high availability and scalability..."
            readTime="15"
            link="#"
          />
         
        </div>

        {/* Sidebar */}
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Insights;
