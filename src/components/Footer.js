import facebookIcon from "./img/icons/facebook.svg";
import xtwitterxIcon from "./img/icons/twitterx.svg";
import instagramIcon from "./img/icons/instagram.svg";
import youtubeIcon from "./img/icons/youtube.svg";
import mailIcon from "./img/icons/mail-24.png";
import phoneIcon from "./img/icons/phone-30.png";
import locationIcon from "./img/icons/location-50.png"
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
  import logoWhiteImage from './img/logo-white.png';
  import pages from './pages';
  
  const contacts = [
    { icon: locationIcon, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: phoneIcon, info: '(112) 555-3456', },
    { icon: mailIcon, info: 'customer@littlelemon.com', },
  ];

  const socials = [
    { icon: facebookIcon, name: 'facebook', },
    { icon: xtwitterxIcon, name: 'twitter', },
    { icon: instagramIcon, name: 'instagram', },
    { icon: youtubeIcon, name: 'youtube', },
  ];

  const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

  const Footer = () => {
    return (
      <footer className="site-footer">
        <div className="container grid">
          <img
            className="site-footer-logo"
            src={logoWhiteImage}
            alt="Little Lemon"
          />
          <nav className="site-footer-nav">
            <h4>Sitemap</h4>
            <ul>
              {navLinks.map((navLink, index) =>
                <li key={index}>
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="site-footer-contact">
            <h4>Contact us</h4>
            <address>
            {contacts.map((contact, index) =>
              <p key={index}>
                <img  src={contact.icon} className="icon_size" /> {contact.info}
              </p>
            )}
            </address>
          </div>
          <div className="site-footer-social">
            <h4>Connect with us</h4>
            {socials.map((social, index) =>
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={social.icon} alt={socials.name}  className="icon_size"/>
              </a>
            )}
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;

