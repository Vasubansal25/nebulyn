
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About us</a></li>
      </ul>
      <a href="/contact" className="contact-btn">
        Contact Us <span>→</span>
      </a>
    </nav>
  );
};

export default Nav;
