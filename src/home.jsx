import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import { ChevronRight} from "lucide-react"; 




const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">LOGO</div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </nav>
          <button className="contactButton">Contact Us</button>
        </header>

        {/* Route Definitions */}
      
        {/* Hero Section */}
        <section className="hero">
          <div className="heroText">
            <h3>A Trusted Company</h3>
            <h1>Next-Gen Software Services to Businesses.</h1>
            <p>
              Asset nobis moti ex domos oblivisci ore et aliqua defero et mea
            </p>
            <p> amet. Vitae officia tempor eaque dicta est iusto.
            </p>
            <button className="getStarted">Get Started</button>
          </div>
          <div className="heroImage">
            <img src="/images/hero.png" alt="Hero" />
          </div>
        </section>

        <>
        <h2>Who We Are</h2>
          <p>
            A team of passionate experts dedicated to delivering exceptional
            digital solutions.
          </p>
        </>

        {/* Stats Section */}
        <section className="stats">
          <div className="statCard">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="statCard">
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="statCard">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
        </section>

        <section>
          <div className="serviceCards">
            <div className="serviceCard">
              <h3>Web Development</h3>
              <p>Build modern and responsive web applications.</p>
              <ChevronRight className="arrowIcon" />
            </div>
            <div className="serviceCard">
              <h3>App Development</h3>
              <p>Develop high-performing mobile applications.</p>
              <ChevronRight className="arrowIcon" />
            </div>
            <div className="serviceCard">
              <h3>CRM Solutions</h3>
              <p>Optimize customer relationships with custom CRM solutions.</p>
              <ChevronRight className="arrowIcon" />
            </div>
            <div className="serviceCard">
              <h3>Software Development</h3>
              <p>Delivering scalable software for businesses.</p>
              <ChevronRight className="arrowIcon" />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="about">
          <div className="aboutImage">
            <img src="/images/home.jpeg" alt="About Us" />
          </div>
          <div className="aboutText">
            <h2>About Us</h2>
            <p>
              We are a passionate team of software developers, designers, and
              digital strategists committed to delivering innovative solutions.
            </p>
            <button className="readMore">Read More</button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="whyChooseUs">
          <h2>Why Choose Us</h2>
          <p>
            Sometimes, we need to check the time, wondering when our work or
            meeting will finish, without getting caught by others.
          </p>
          <ul>
            <li>✔ Attention to Detail</li>
            <li>✔ Full-Scale Success</li>
            <li>✔ Experts Only</li>
            <li>✔ Meeting Deadlines</li>
            <li>✔ Award-Winning</li>
          </ul>
        </section>

        <section className="insight">
          <div className="ltinsight">
            <img src="/images/insight1.png" alt="Projects Completed" />
            <h3>future of AI</h3>
            <p> ai is the need of the hur</p>
          </div>
          <div className="ltinsight">
            <img src="/images/insight2.png" alt="Client Satisfaction" />
            <h3>digital transform</h3>
            <p> ew need is then q</p>
          </div>
          <div className="ltinsight">
            <img src="/images/insight3.png" alt="Years Experience" />
            <h3>cyber security</h3>
            <p>cyber scrity is the new need</p>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;