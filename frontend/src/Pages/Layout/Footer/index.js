import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="homepage">
      <div className="container top">
        {/* <article className="box">
          <h4>
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
            Latest Posts{' '}
          </h4>
          <ul>
            <li>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/overwatch/"
                className="category"
              >
                Overwatch{' '}
              </a>
              <Link to="http://themes.pixiesquad.com/pixiehuge/purple-haste/renegades-defeat-signature-to-minor-playoffs/">
                RENEGADES DEFEAT SIGNATURE; TO MINOR PLAYOFFS
              </Link>
              <span className="date">June 16, 2017</span>
            </li>
            <li>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/counter-strike/"
                className="category"
              >
                Counter Strike{' '}
              </a>
              <Link to="http://themes.pixiesquad.com/pixiehuge/purple-haste/scream-now-we-know-were-capable-of-winning/">
                SCREAM: “NOW WE KNOW WE’RE CAPABLE OF WINNING”
              </Link>
              <span className="date">June 16, 2017</span>
            </li>
          </ul>
        </article> */}
        {/* /BOX */}
        <article className="box">
          <h4>
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
            Our Departments{' '}
          </h4>
          <ul>
            <li>
              <Link to="http://office@pixiesquad.com">
                <span className="info">
                  <i
                    className="icon"
                    style={{
                      backgroundImage:
                        'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon1.png")',
                    }}
                  />
                  Management{' '}
                </span>
                <span className="email">office@pixiesquad.com </span>
              </Link>
            </li>
            <li>
              <Link to="http://help@pixiesquad.com">
                <span className="info">
                  <i
                    className="icon"
                    style={{
                      backgroundImage:
                        'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon2.png")',
                    }}
                  />
                  Support{' '}
                </span>
                <span className="email">help@pixiesquad.com </span>
              </Link>
            </li>
            <li>
              <Link to="http://news@pixiesquad.com">
                <span className="info">
                  <i
                    className="icon"
                    style={{
                      backgroundImage:
                        'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/icon3.png")',
                    }}
                  />
                  Press{' '}
                </span>
                <span className="email">news@pixiesquad.com </span>
              </Link>
            </li>
          </ul>
        </article>
        {/* /BOX */}
        <article className="box useful">
          <h4>
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
            Useful Links{' '}
          </h4>
          <ul id="footer_menu" className="useful-links">
            <li
              id="menu-item-196"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-196"
            >
              <span>+</span>
              <Link to="http://themes.pixiesquad.com/pixiehuge/purple-haste/news/">
                News
              </Link>
            </li>
            <li
              id="menu-item-195"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-195"
            >
              <span>+</span>
              <Link to="http://themes.pixiesquad.com/pixiehuge/purple-haste/all-teams/">
                All Teams
              </Link>
            </li>
            <li
              id="menu-item-194"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-194"
            >
              <span>+</span>
              <Link to="http://themes.pixiesquad.com/pixiehuge/purple-haste/aboutus/">
                About us
              </Link>
            </li>
            <li
              id="menu-item-197"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-197"
            >
              <span>+</span>
              <Link to="http://support.pixiesquad.com">Support</Link>
            </li>
            <li
              id="menu-item-198"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-198"
            >
              <span>+</span>
              <Link to="http://docs.pixiesquad.com">Documentation</Link>
            </li>
          </ul>
        </article>
        {/* /BOX */}
        <article className="box aboutUs">
          <h4>
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
            About Us{' '}
          </h4>
          <p>
            Now in the modern age, the gaming world is to be called ‘E-Sports’.
            Where our main focus lies. We have dedicated ourselves to develop
            our careers in this direction. As it’s where we can show our
            creativity in{' '}
          </p>
          <Link to="http://pixiesquad.com">More About Us</Link>
        </article>
        {/* /BOX */}
      </div>
      {/* /TOP-CONTAINER */}
      <div className="bottom">
        <div className="container">
          <article className="left">
            <h5 className="website">VersusOne - Your Family, your team!</h5>
            <div className="social-icons">
              <Link to="https://facebook.com/pixiesquad">
                <i className="fa fa-facebook" />
              </Link>
              <Link to="https://twitter.com/PixieSquadTheme">
                <i className="fa fa-twitter" />
              </Link>
              <Link to="https://www.instagram.com/pixiesquadstudio/">
                <i className="fa fa-instagram" />
              </Link>
              <Link to="https://www.youtube.com/channel/UCOgbPXMkH0IpL-co4X6T1Qg/featured">
                <i className="fa fa-youtube" />
              </Link>
              <Link to="https://facebook.com/pixiesquad">
                <i className="fa fa-twitch" />
              </Link>
              <Link to="https://facebook.com/pixiesquad">
                <i className="fa fa-vimeo" />
              </Link>
              <Link to="https://facebook.com/pixiesquad">
                <i className="fa fa-steam" />
              </Link>
              <Link to="https://facebook.com/pixiesquad">
                <svg
                  id="icon-discord"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                >
                  <path d="M 9.375 5.03125 L 8.75 5.09375 C 8.75 5.09375 6.008 5.39175 4 6.96875 L 3.96875 6.96875 L 3.9375 7 C 3.4875 7.406 3.31 7.897 3 8.625 C 2.69 9.353 2.3545 10.2835 2.0625 11.3125 C 1.4785 13.3705 1 15.844 1 18.125 L 1 18.34375 L 1.09375 18.53125 C 1.82075 19.77825 3.1155 20.578 4.3125 21.125 C 5.5095 21.672 6.535 21.94675 7.25 21.96875 L 7.71875 22 L 8.8125 19.65625 C 9.7225 19.85625 10.795 20 12 20 C 13.205 20 14.24625 19.85625 15.15625 19.65625 L 16.25 22 L 16.71875 21.96875 C 17.43375 21.94575 18.45925 21.672 19.65625 21.125 C 20.85325 20.578 22.149 19.77825 22.875 18.53125 L 22.96875 18.34375 L 22.96875 18.125 C 22.96975 15.844 22.5215 13.3705 21.9375 11.3125 C 21.6455 10.2835 21.309 9.352 21 8.625 C 20.691 7.898 20.48125 7.406 20.03125 7 L 20 6.96875 C 17.992 5.39175 15.21875 5.09375 15.21875 5.09375 L 14.625 5.03125 C 14.625 5.03125 14.17325 6.5485 14.03125 7.1875 C 13.14225 7.0725 12.419 7.03125 12 7.03125 C 11.581 7.03125 10.85775 7.0715 9.96875 7.1875 C 9.82675 6.5485 9.375 5.03125 9.375 5.03125 z M 8.125 7.1875 C 8.159 7.2895 8.221 7.418 8.25 7.5 C 7.235 7.73 6.27425 8.02775 5.28125 8.59375 L 6.125 10.3125 C 8.162 9.1535 11.099 9 12 9 C 12.901 9 15.838 9.1535 17.875 10.3125 L 18.6875 8.59375 C 17.6945 8.02875 16.8285 7.73 15.8125 7.5 C 15.8415 7.418 15.93475 7.2895 15.96875 7.1875 C 16.70075 7.3225 17.81175 7.62875 18.96875 8.46875 C 18.96275 8.47175 19.2935 8.87475 19.5625 9.46875 C 19.8385 10.07775 20.12925 10.8955 20.40625 11.8125 C 20.93825 13.5725 21.341 15.89425 21.375 17.78125 C 20.883 18.47525 19.97 19.11525 19 19.53125 C 18.154 19.89425 17.7105 20.02675 17.3125 20.09375 L 16.90625 19.21875 C 17.13825 19.14075 17.175 19.1435 17.375 19.0625 C 18.582 18.5755 19.21875 18.03125 19.21875 18.03125 L 18.40625 16.46875 C 18.40625 16.46875 17.9665 16.834 16.9375 17.25 C 15.9085 17.666 14.133 18.09375 12 18.09375 C 9.867 18.09375 8.4675 17.666 7.4375 17.25 C 6.4075 16.834 5.96875 16.46875 5.96875 16.46875 L 4.75 18.03125 C 4.75 18.03125 5.417 18.5755 6.625 19.0625 C 6.825 19.1435 6.892 19.14075 7.125 19.21875 L 6.6875 20.09375 C 6.2895 20.02675 5.81475 19.89425 4.96875 19.53125 C 3.99775 19.11425 3.08675 18.47525 2.59375 17.78125 C 2.62775 15.89525 3.0315 13.5725 3.5625 11.8125 C 3.8395 10.8955 4.1605 10.07775 4.4375 9.46875 C 4.7065 8.87475 5.006 8.47175 5 8.46875 C 6.157 7.62875 7.393 7.3225 8.125 7.1875 z M 9.5 12 C 8.6715729 12 8 12.895431 8 14 C 8 15.104569 8.6715729 16 9.5 16 C 10.328427 16 11 15.104569 11 14 C 11 12.895431 10.328427 12 9.5 12 z M 14.5 12 C 13.671573 12 13 12.895431 13 14 C 13 15.104569 13.671573 16 14.5 16 C 15.328427 16 16 15.104569 16 14 C 16 12.895431 15.328427 12 14.5 12 z"></path>
                </svg>
              </Link>{' '}
            </div>
          </article>
          {/* /LEFT */}
          <article className="right">
            <h5>Copyright PixieHuge, crafted with love by PixieSquad 2017</h5>
          </article>
          {/* /RIGHT */}
        </div>
      </div>
      {/* /BOTTOM-CONTAINER */}
    </footer>
  );
};

export default Footer;
