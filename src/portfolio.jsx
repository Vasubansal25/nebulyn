import React from "react";
import "./App.css";
import "./Portfolio.css";

const projects = [
  {
    category: "Web Development",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with advanced search and payment options.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Mobile Development",
    title: "Healthcare Mobile App",
    description: "An innovative healthcare platform with telemedicine features.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Software Solution",
    title: "CRM System",
    description: "Comprehensive CRM solution with enhanced customer engagement features.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Web Development",
    title: "Financial Dashboard",
    description: "Real-time financial visualizations and analytics platform.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Mobile Development",
    title: "Food Delivery App",
    description: "Feature-rich food delivery application with real-time tracking.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Software Solution",
    title: "Inventory Management",
    description: "Enterprise inventory management system with barcode tracking.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Web Development",
    title: "Social Media Platform",
    description: "Secure, robust social networking platform with AI-based content filtering.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Mobile Development",
    title: "Fitness Tracking App",
    description: "Intelligent fitness tracking with personalized recommendations.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    category: "Web Development",
    title: "Real Estate Portal",
    description: "Dynamic real estate management platform with virtual tours.",
    image: "https://via.placeholder.com/300x200",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Explore our successful projects and creative solutions</p>
      </header>

      <div className="filter-buttons">
        <button>All Projects</button>
        <button>Web Development</button>
        <button>Mobile Apps</button>
        <button>Software Solutions</button>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>

      <section className="contact-form">
        <h2>Lets start a project together</h2>
        <form>
          <div className="form-grid">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Phone" required />
            <input type="text" placeholder="Company" />
            <select>
              <option>Category</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>Software Solutions</option>
            </select>
            <select>
              <option>Country</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
            <select>
              <option>State</option>
              <option>California</option>
              <option>New York</option>
            </select>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip/Postal Code" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="portfolio-footer">
        <div className="footer-content">
          <div>LOGO</div>
          <div className="footer-links">
            <div>Quick Links
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>Services
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Solutions</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>Newsletter
              <form>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div>© 2024 TechCorp. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
export default Portfolio;
