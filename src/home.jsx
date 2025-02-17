import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./home.css";
import { ChevronRight } from "lucide-react"; 
import Contact from "./Contact"; // Ensure this component is imported
import Insights from "./Insights";
import Portfolio from "./Portfolio";
import Services from "./Services";

// Define the router outside of App to avoid re-creation
const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"insight",
    element:<Insights/>
  },
  {
    path:"portfolio",
    element:<Portfolio/>
  },
  {
    path:"services",
    element:<Services/>
  }
  
]);

const App = () => {
  return (
    <>
      
      <RouterProvider router={router} />

      <div className="hero-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">LOGO</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#about">About Us</a>
          </nav>
          <button className="contact-btn">Contact Us →</button>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h4 className="trusted-text">A TRUSTED COMPANY</h4>
            <h1>
              Next-Gen <span className="highlight">Software</span> <br /> Services to Businesses.
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
              Velit officia consequat duis enim velit mollit.
            </p>
            <button className="get-started">Get Started</button>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero.png" alt="Hero Illustration" />
          </div>
        </section>
      </div>

      <>
        <h2>Who We Are</h2>
        <p>
          A team of passionate experts dedicated to delivering exceptional
          digital solutions.
        </p>
      </>

      <div>
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
        <section className="about-us">
          <div className="about-container">
            {/* Left Image */}
            <div className="about-image">
              <img src="/images/home.jpeg" alt="Team Discussion" />
            </div>

            {/* Right Content */}
            <div className="about-content">
              <h2>About Us</h2>
              <p>
                We're a team of passionate developers, designers, and digital strategists committed to
                delivering exceptional digital solutions that drive business growth.
              </p>

              <div className="about-stats">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Team Members</p>
                </div>
              </div>

              <button className="read-more">Read More</button>
            </div>
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
            <img src="/images/homelast.png" alt="Projects Completed" />
            <h3>Future of AI</h3>
            <p>AI is the need of the hour.</p>
          </div>
          <div className="ltinsight">
            <img src="/images/homelast.png" alt="Client Satisfaction" />
            <h3>Digital Transformation</h3>
            <p>New need is here.</p>
          </div>
          <div className="ltinsight">
            <img src="/images/homelast.png" alt="Years Experience" />
            <h3>Cyber Security</h3>
            <p>Cybersecurity is the new need.</p>
          </div>
        </section>
      </div>

      <section className="testimonial">
        <h2 className="testimonial-title">Happy Clients About Us</h2>
        <p className="testimonial-subtitle">We are happy to hear from you</p>

        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa vitae sapien, nunc quisque. Id.
            </p>
            <div className="testimonial-rating">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <p className="testimonial-author">
              <strong>Fasion Invogue</strong> <br />
              <span className="author-role">Director</span>
            </p>
          </div>
        </div>

        <div className="testimonial-navigation">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </section>
    </>
  );
};

export default App;
