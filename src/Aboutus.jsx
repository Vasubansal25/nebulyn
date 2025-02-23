import "./Aboutus.css";
import Herosec from "./Herosec";
import { FaLinkedin, FaGithub,FaTwitter } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "15+ years of technology leadership experience",
    image: "/images/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "Expert in cloud architecture and AI solutions",
    image: "/images/michael.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    description: "Passionate about creating beautiful user experiences",
    image: "/images/emily.jpg",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    description: "Full-stack expert with 10+ years experience",
    image: "/images/david.jpg",
  },
];

const testimonials = [
  {
    name: "Jhony D",
    username: "@jhony_D",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    image: "https://randomuser.me/api/portraits/men/10.jpg", // Replace with actual image
  },
  {
    name: "Jhony D",
    username: "@jhony_D",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    image: "https://randomuser.me/api/portraits/men/10.jpg", // Replace with actual image
  },
];

function Aboutus() {
  return (
    <div className="app-container">
      <div><Nav/></div>
      <br></br>
      <Herosec />
      <br />
      <br />
      <br />

      <section className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be the global leader in innovative technology solutions, empowering
            businesses and individuals to achieve their full potential in the digital age.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional technology solutions through innovation, expertise, and
            dedication, while maintaining the highest standards of quality and customer
            satisfaction.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <br />
        <h2>Why Choose Us</h2>
        <br />
        <div className="features">
          <div className="feature-card">
            <h4>Expert Team</h4>
            <p>Highly skilled professionals with diverse expertise.</p>
          </div>
          <div className="feature-card">
            <h4>Quality First</h4>
            <p>Committed to delivering excellence in every project.</p>
          </div>
          <div className="feature-card">
            <h4>Innovation</h4>
            <p>Cutting-edge solutions for modern challenges.</p>
          </div>
          <div className="feature-card">
            <h4>Partnership</h4>
            <p>Building long-term relationships with clients.</p>
          </div>
        </div>
      </section>

    
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Meet Our Team
      </h2>
      <br></br>
      <br></br>
      <section className="py-12 bg-white flex flex-col items-center">
      {/* Title */}
      

      {/* Team Members Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center w-56"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            
            {/* Name & Role */}
            <h3 className="text-md font-semibold text-gray-800">{member.name}</h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>
            <p className="text-gray-600 text-xs mt-1">{member.description}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-3 text-gray-600">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} className="hover:text-blue-500" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={18} className="hover:text-blue-400" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} className="hover:text-gray-800" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <br>
    </br>
    <br></br>
    <br></br>

      <div className="stats">
        <div>
          <span className="icon">🌍</span>
          <p>50+ Countries</p>
        </div>
        <div>
          <span className="icon">👥</span>
          <p>1000+ Clients</p>
        </div>
        <div>
          <span className="icon">🚀</span>
          <p>200+ Projects</p>
        </div>
        <div>
          <span className="icon">⏳</span>
          <p>10+ Years</p>
        </div>
      </div>
      <br></br>
      <br></br>

      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Feedback from our clients
          <br></br>
        </h2>
        <br></br>
        <div className="flex items-center justify-center space-x-6">
          <div className="w-1/9 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-1 bg-blue-600 h-16 mb-2"></div>
            <div className="w-1 bg-blue-600 h-6 mb-2"></div>
            <div className="w-1 bg-blue-600 h-6"></div>
          </div>
          <div className="w-5/6 flex space-x-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.username}</p>
                  </div>
                </div>
                <p className="italic text-gray-600 text-sm">❝ {testimonial.text} ❞</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default Aboutus;
