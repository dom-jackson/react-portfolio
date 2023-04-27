import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/your-github-username">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/your-linkedin-username/">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://your-third-platform-profile-link.com">
                  <i className="fab fa-stack-overflow fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
