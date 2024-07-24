import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact">
                    <p>Contact us: <a href="mailto:dhanushit419@gmail.com">dhanushit419@gmail.com</a></p>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Dhanushit419. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
