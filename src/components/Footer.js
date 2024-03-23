import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <small>© Sairaj_naik development 2024. All rights reserved.</small>
            <div className='footer-links'>
            <small>
                <a href="" target="_blank"  className="footer-link">
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
                    <span>g.sairajnaik@gmail.com</span>
                </a>
             
                <a href="https://www.linkedin.com/in/sairaj-naik-08713723b/" target="_blank" className="footer-link">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                    <span>LinkedIn</span>
                </a>
                </small>
            </div>
        </footer>
    )
  }

export default Footer;