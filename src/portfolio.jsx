import "./App.css";
import "./portfolio.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from "react";

const projects = [
  {
    category: "Web Development",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with advanced search and payment options.",
    image: "/images/img.png",
  },
  {
    category: "Mobile Development",
    title: "Healthcare Mobile App",
    description: "An innovative healthcare platform with telemedicine features.",
    image: "/images/CRM.png",
  },
  {
    category: "Software Solution",
    title: "CRM System",
    description: "Comprehensive CRM solution with enhanced customer engagement features.",
    image: "/images/CRM.png",
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
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Filter logic
  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolioContainer">
      <Nav />
      <br></br>

      <section className="section">
        <div className="contentWrapper">
          <div className="textContent">
            <h2>Portfolio</h2>
            <p>Check out my latest projects and creative work.</p>
          </div>
          <div className="imageContainer">
            <img src="/images/PORT.png" alt="Portfolio Preview" className="image" />
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="filterButtons">
        {["All Projects", "Web Development", "Mobile Development", "Software Solution"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projectGrid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.image} alt={project.title} />
            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <section className="contactForm">
        <div className="container">
          <div className="form-wrapper">
            <h2 className="title">Lets start a project together</h2>
            <form className="form-grid">
              <input type="text" placeholder="First name" className="input-field" />
              <input type="text" placeholder="Last name" className="input-field" />
              <input type="email" placeholder="E-mail" className="input-field" />
              <input type="text" placeholder="Phone" className="input-field" />
              <input type="text" placeholder="Company" className="input-field" />
              <input type="text" placeholder="City" className="input-field" />
              <input type="text" placeholder="Zip/Postal Code" className="input-field" />
              <input type="text" placeholder="Subject" className="input-field full-width" />
              <textarea placeholder="Message" className="input-field full-width textarea"></textarea>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
