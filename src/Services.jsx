import React from "react";
import  styles from "./service.module.css";
import { ChevronRight } from "lucide-react";

const App = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="services.jsx">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <button className={styles.contactButton}>Contact Us</button>
      </header>

      {/* Services Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>OUR SERVICES</h2>
          <p>We deliver innovative solutions to help businesses thrive in the digital age.</p>
          <button className={styles.exploreButton}>Explore Services</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/service-hero.png" alt="Services" />
        </div>
      </section>

      {/* Development Services Section */}
      <section className={styles.devServicesSection}>
        <h2>End-To-End Development Services</h2>
        <p>
          Sometimes, we need to check the time, wondering when our work or meeting will finish,
          without getting caught by others.
        </p>
        <img src="/images/team-dev.png" alt="Development Services" />
      </section>

      {/* What We Offer Section */}
      <section className={styles.whatWeOfferSection}>
        <h2>What We Offer</h2>
        <p>Comprehensive digital solutions tailored to your business needs.</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Web Development</h3>
            <p>Create cutting-edge, scalable web applications.</p>
            <ChevronRight className={styles.arrowIcon} />
          </div>
          <div className={styles.card}>
            <h3>App Development</h3>
            <p>High-performing mobile applications for seamless user experiences.</p>
            <ChevronRight className={styles.arrowIcon} />
          </div>
          <div className={styles.card}>
            <h3>Software Development</h3>
            <p>Tailored software solutions for efficiency.</p>
            <ChevronRight className={styles.arrowIcon} />
          </div>
          <div className={styles.card}>
            <h3>CRM Solutions</h3>
            <p>Enhance customer relationships.</p>
            <ChevronRight className={styles.arrowIcon} />
          </div>
          <div className={styles.card}>
            <h3>ERP Systems</h3>
            <p>Streamline business operations.</p>
            <ChevronRight className={styles.arrowIcon} />
          </div>
        </div>
      </section>

      {/* Designer Section */}
      <section className={styles.designerSection}>
        <h2>DESIGNER</h2>
        <p>
          The Designer is the translator of aesthetics and functional needs of a
          specific sector such as road systems, IT or management. They provide
          intuitive and user-friendly designs.
        </p>
      </section>
    </div>
  );
};

export default App;
