import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Content = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="section-header">
          <article className="topbar">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="7px"
                height="8px"
              >
                <path
                  fillRule="evenodd"
                  fill="rgb(57, 191, 253)"
                  d="M-0.000,0.435 C-0.000,0.805 -0.000,7.292 -0.000,7.546 C-0.000,7.877 0.338,8.123 0.672,7.930 C0.940,7.775 6.293,4.649 6.750,4.381 C7.050,4.205 7.045,3.786 6.750,3.611 C6.421,3.415 1.048,0.272 0.658,0.054 C0.373,-0.106 -0.000,0.071 -0.000,0.435 Z"
                />
              </svg>
              Criar Nome da paginação depois!
            </h3>
          </article>
          {/* /TOP-BAR */}
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Content;
