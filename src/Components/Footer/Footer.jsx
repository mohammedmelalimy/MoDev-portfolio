    import Logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <div className='container'>
        <div className="footer">
          <div className="footer-top">
              <div className="footer-top-left">
              <img src={Logo} alt='logo' className="footer-logo" />
              <p>
                  I am a frontend developer passionate about building modern and
                  user-friendly web experiences.
              </p>
              </div>
              <div className="footer-top-right">
                  <a href="https://www.facebook.com/profile.php?id=100040613604023" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i><span>Facebook</span>
                  </a>
                  <a href="https://github.com/mohammedmelalimy" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"></i><span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-elalimy-aa2556287" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
                  </a>
                  <a href="https://wa.me/201113414805" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp"></i><span>Whatsapp</span>
                  </a>
              </div>
          </div>
          <hr />
          <div className="footer-bottom">
              <p className="footer-bottom-left">
              © {currentYear} Mohammed Elalimy. All rights reserved.
              </p>
          </div>
        </div>
      </div>
    )
    }

    export default Footer
