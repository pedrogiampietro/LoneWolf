import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../Layout/Content';
import './styles.css';

const AllTeams = () => {
  return (
    <Content>
      <section id="teams">
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
                  ></path>
                </svg>
                Times
              </h3>
            </article>
            {/* /TOP-BAR */}
          </div>
          {/* /SECTION-HEADER */}

          <div className="wrap-input100 mb-5">
            <input
              className="input100"
              type="text"
              name="search"
              placeholder="Buscar um time..."
            />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-search" aria-hidden="true" />
            </span>
          </div>

          <div class="d-flex justify-content-end mb-4">
            <Link to="/teams/create" class="mr-auto p-2">
              <button className="login-btn text-white">Criar Time</button>
            </Link>
            <div class="p-2">
              <button className="login-btn text-white">Buscar</button>
            </div>
          </div>

          <article className="boxes">
            {[1, 2, 3, 4, 5, 6, 7].map((teams) => (
              <Link
                key={teams}
                to="/test"
                className="box"
                style={{
                  backgroundImage:
                    'url("  http://via.placeholder.com/596x180/2196F3/FFFFFFF")',
                }}
              >
                <div className="overlay">
                  <h4>View team page</h4>
                  <h5>Click here to see</h5>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="14px"
                      height="12px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 255, 255)"
                        d="M7.293,0.274 C6.902,0.665 6.902,1.299 7.293,1.690 L10.586,4.989 L1.000,4.989 C0.448,4.989 -0.000,5.438 -0.000,5.991 C-0.000,6.545 0.448,6.993 1.000,6.993 L10.586,6.993 L7.293,10.292 C6.902,10.684 6.902,11.318 7.293,11.709 C7.683,12.100 8.316,12.100 8.707,11.709 L13.707,6.700 C13.888,6.519 14.000,6.268 14.000,5.991 C14.000,5.714 13.888,5.464 13.707,5.283 L8.707,0.274 C8.316,-0.118 7.683,-0.118 7.293,0.274 Z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </article>
        </div>
      </section>
    </Content>
  );
};

export default AllTeams;
