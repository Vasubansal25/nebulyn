import { ChevronRight } from "lucide-react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div>
        <header className="header">
          <div className="logo">LOGO</div>
          <nav className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </nav>
          <button className="contactButton">Contact Us</button>
        </header>
      </div>
      
      {/* Hero Section */}
      <div>
        <section className="heroSection">
          <div className="heroText">
            <h2>OUR SERVICES</h2>
            <p>We deliver innovative solutions to help businesses thrive in the digital age.</p>
            <button className="exploreButton">Explore Services</button>
          </div>
          <div className="heroImage">
            <img src="/images/top.png" alt="illus" />
          </div>
        </section>
      </div>
      
      {/* Development Services Section */}
      <div>
        <section className="devServicesSection">
          <h2>End-To-End Development Services</h2>
          <p>We provide innovative solutions for modern businesses.</p>
          <img src="/images/service.png" alt="Development Services" />
        </section>
      </div>
      
      {/* What We Offer Section */}
      <div>
        <section className="whatWeOfferSection">
          <h2>What We Offer</h2>
          <p>Comprehensive digital solutions tailored to your business needs.</p>
          <div className="cardsContainer">
            {[ 
              { img: "/images/SVG.png", title: "Web Development", desc: "Create cutting-edge, scalable web applications." },
              { img: "/images/Vector.png", title: "App Development", desc: "High-performing mobile applications for seamless user experiences." },
              { img: "/images/SD.png", title: "Software Development", desc: "Tailored software solutions for efficiency." },
              { img: "/images/SRM.png", title: "CRM Solutions", desc: "Enhance customer relationships." },
              { img: "/images/LAST.png", title: "ERP Systems", desc: "Streamline business operations." }
            ].map((service, index) => (
              <div className="card" key={index}>
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ChevronRight className="arrowIcon" />
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Team Section */}
      <div>
        <section className="team-section">
          {[ 
            { img: "/images/webde.png", title: "DESIGNER", desc: "The Designer is the translator of aesthetics and functional needs..." },
            { img: "/images/dev.png", title: "DEVELOPER", desc: "The Developer often faces problems or projects that require specific solutions..." },
            { img: "/images/analyst.png", title: "ANALYST", desc: "The Functional Analyst is responsible for success, opportunity, development, and collaboration..." }
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.img} alt={member.title} />
              <div>
                <h2>{member.title}</h2>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      
      {/* Our Process Section */}
      <div>
        <section className="process">
          <h2>Our Process</h2>
          <p>A streamlined approach to deliver exceptional results</p>
          <div className="process-container">
            {[ 
              { step: "01", title: "Discovery", desc: "We analyze your requirements and plan the perfect solution." },
              { step: "02", title: "Design", desc: "Creating the blueprint and visual aspects of your solution." },
              { step: "03", title: "Development", desc: "Building your solution with quality code and best practices." },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support for your project." }
            ].map((process, index) => (
              <div className="process-box" key={index}>
                <h3>{process.step}</h3>
                <h4>{process.title}</h4>
                <p>{process.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Contact Section */}
      <div>
        <section className="contact-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our services can help you achieve your business goals.</p>
          <button className="contactButton">Contact Us Today</button>
        </section>
      </div>
    </div>
  );
};

export default Services;
