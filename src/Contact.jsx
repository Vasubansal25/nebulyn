
import "./contact.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className="contact-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Get in Touch</h1>
          <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
        </section>

        {/* Contact Content Wrapper */}
        <div className="contact-content">
          {/* Left: Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-details">
              <p className="info-heading">Our Office</p>
              <p>123 Business Avenue</p>
              <p>Tech District, TC 12345</p>
            </div>
            <div className="info-details">
              <p className="info-heading">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-details">
              <p className="info-heading">Email</p>
              <p>contact@techcorp.com</p>
            </div>
            <div className="info-details">
              <p className="info-heading">Business Hours</p>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>

            {/* Social Icons */}
            <div className="social-section">
              <p className="info-heading">Connect With Us</p>
              <div className="social-icons">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedin className="icon" />
                <FaGithub className="icon" />
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help you?" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>What are your business hours?</h4>
            <p>We are open Monday through Friday, from 9:00 AM to 6:00 PM Eastern Time.</p>
          </div>
          <div className="faq-item">
            <h4>How quickly can I expect a response?</h4>
            <p>We typically respond to all inquiries within 24 business hours.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer emergency support?</h4>
            <p>Yes, we provide 24/7 emergency support for our enterprise clients.</p>
          </div>
        </section>

        {/* Footer Section */}
        <div>
        <Footer/>
        
        
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
