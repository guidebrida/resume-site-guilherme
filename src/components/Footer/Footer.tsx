import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Your footer styles

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a
                    href="https://github.com/guidebrida"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/guilherme-de-brida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                </a>
                <a
                    href="mailto:guilhermedbdb@gmail.com"
                    aria-label="Send an Email"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
