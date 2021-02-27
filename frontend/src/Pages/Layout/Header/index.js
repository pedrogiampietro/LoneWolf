import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';

const Header = () => {
  const { account } = useSelector((state) => state.account);

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <a
            href="#searchModal"
            className="search"
            data-toggle="modal"
            data-target="#searchModal"
          >
            <i className="fa fa-search" />
          </a>
          <Link to="#">
            <i className="fa fa-facebook" />
          </Link>
          <Link to="#">
            <i className="fa fa-twitter" />
          </Link>
          <Link to="#">
            <i className="fa fa-instagram" />
          </Link>
          <Link to="#">
            <i className="fa fa-youtube" />
          </Link>
          <Link to="#">
            <i className="fa fa-twitch" />
          </Link>
          <Link to="#">
            <i className="fa fa-vimeo" />
          </Link>
          <Link to="#">
            <i className="fa fa-steam" />
          </Link>
          <Link to="#" className="last">
            <svg
              id="icon-discord"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
            >
              <path d="M 9.375 5.03125 L 8.75 5.09375 C 8.75 5.09375 6.008 5.39175 4 6.96875 L 3.96875 6.96875 L 3.9375 7 C 3.4875 7.406 3.31 7.897 3 8.625 C 2.69 9.353 2.3545 10.2835 2.0625 11.3125 C 1.4785 13.3705 1 15.844 1 18.125 L 1 18.34375 L 1.09375 18.53125 C 1.82075 19.77825 3.1155 20.578 4.3125 21.125 C 5.5095 21.672 6.535 21.94675 7.25 21.96875 L 7.71875 22 L 8.8125 19.65625 C 9.7225 19.85625 10.795 20 12 20 C 13.205 20 14.24625 19.85625 15.15625 19.65625 L 16.25 22 L 16.71875 21.96875 C 17.43375 21.94575 18.45925 21.672 19.65625 21.125 C 20.85325 20.578 22.149 19.77825 22.875 18.53125 L 22.96875 18.34375 L 22.96875 18.125 C 22.96975 15.844 22.5215 13.3705 21.9375 11.3125 C 21.6455 10.2835 21.309 9.352 21 8.625 C 20.691 7.898 20.48125 7.406 20.03125 7 L 20 6.96875 C 17.992 5.39175 15.21875 5.09375 15.21875 5.09375 L 14.625 5.03125 C 14.625 5.03125 14.17325 6.5485 14.03125 7.1875 C 13.14225 7.0725 12.419 7.03125 12 7.03125 C 11.581 7.03125 10.85775 7.0715 9.96875 7.1875 C 9.82675 6.5485 9.375 5.03125 9.375 5.03125 z M 8.125 7.1875 C 8.159 7.2895 8.221 7.418 8.25 7.5 C 7.235 7.73 6.27425 8.02775 5.28125 8.59375 L 6.125 10.3125 C 8.162 9.1535 11.099 9 12 9 C 12.901 9 15.838 9.1535 17.875 10.3125 L 18.6875 8.59375 C 17.6945 8.02875 16.8285 7.73 15.8125 7.5 C 15.8415 7.418 15.93475 7.2895 15.96875 7.1875 C 16.70075 7.3225 17.81175 7.62875 18.96875 8.46875 C 18.96275 8.47175 19.2935 8.87475 19.5625 9.46875 C 19.8385 10.07775 20.12925 10.8955 20.40625 11.8125 C 20.93825 13.5725 21.341 15.89425 21.375 17.78125 C 20.883 18.47525 19.97 19.11525 19 19.53125 C 18.154 19.89425 17.7105 20.02675 17.3125 20.09375 L 16.90625 19.21875 C 17.13825 19.14075 17.175 19.1435 17.375 19.0625 C 18.582 18.5755 19.21875 18.03125 19.21875 18.03125 L 18.40625 16.46875 C 18.40625 16.46875 17.9665 16.834 16.9375 17.25 C 15.9085 17.666 14.133 18.09375 12 18.09375 C 9.867 18.09375 8.4675 17.666 7.4375 17.25 C 6.4075 16.834 5.96875 16.46875 5.96875 16.46875 L 4.75 18.03125 C 4.75 18.03125 5.417 18.5755 6.625 19.0625 C 6.825 19.1435 6.892 19.14075 7.125 19.21875 L 6.6875 20.09375 C 6.2895 20.02675 5.81475 19.89425 4.96875 19.53125 C 3.99775 19.11425 3.08675 18.47525 2.59375 17.78125 C 2.62775 15.89525 3.0315 13.5725 3.5625 11.8125 C 3.8395 10.8955 4.1605 10.07775 4.4375 9.46875 C 4.7065 8.87475 5.006 8.47175 5 8.46875 C 6.157 7.62875 7.393 7.3225 8.125 7.1875 z M 9.5 12 C 8.6715729 12 8 12.895431 8 14 C 8 15.104569 8.6715729 16 9.5 16 C 10.328427 16 11 15.104569 11 14 C 11 12.895431 10.328427 12 9.5 12 z M 14.5 12 C 13.671573 12 13 12.895431 13 14 C 13 15.104569 13.671573 16 14.5 16 C 15.328427 16 16 15.104569 16 14 C 16 12.895431 15.328427 12 14.5 12 z"></path>
            </svg>
          </Link>
          <a
            href="#menuModal"
            data-toggle="modal"
            className="mobile-nav topbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14px"
              height="12px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(255, 255, 255)"
                d="M13.125,6.857 L0.875,6.857 C0.392,6.857 -0.000,6.473 -0.000,5.999 C-0.000,5.526 0.392,5.143 0.875,5.143 L13.125,5.143 C13.608,5.143 14.000,5.526 14.000,5.999 C14.000,6.473 13.608,6.857 13.125,6.857 ZM13.125,1.714 L0.875,1.714 C0.392,1.714 -0.000,1.330 -0.000,0.857 C-0.000,0.383 0.392,-0.001 0.875,-0.001 L13.125,-0.001 C13.608,-0.001 14.000,0.383 14.000,0.857 C14.000,1.330 13.608,1.714 13.125,1.714 ZM0.875,10.285 L13.125,10.285 C13.608,10.285 14.000,10.669 14.000,11.142 C14.000,11.616 13.608,12.000 13.125,12.000 L0.875,12.000 C0.392,12.000 -0.000,11.616 -0.000,11.142 C-0.000,10.669 0.392,10.285 0.875,10.285 Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {/* /TOPBAR */}
      <nav>
        <div className="container">
          <div className="logo bg">
            <Link
              className="logo-image"
              style={{
                backgroundImage: `url(${Logo})`,
              }}
              to="/"
            ></Link>
          </div>
          {/* /LOGO-BG */}
          <Link to="#menuModal" data-toggle="modal" className="mobile-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14px"
              height="12px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(255, 255, 255)"
                d="M13.125,6.857 L0.875,6.857 C0.392,6.857 -0.000,6.473 -0.000,5.999 C-0.000,5.526 0.392,5.143 0.875,5.143 L13.125,5.143 C13.608,5.143 14.000,5.526 14.000,5.999 C14.000,6.473 13.608,6.857 13.125,6.857 ZM13.125,1.714 L0.875,1.714 C0.392,1.714 -0.000,1.330 -0.000,0.857 C-0.000,0.383 0.392,-0.001 0.875,-0.001 L13.125,-0.001 C13.608,-0.001 14.000,0.383 14.000,0.857 C14.000,1.330 13.608,1.714 13.125,1.714 ZM0.875,10.285 L13.125,10.285 C13.608,10.285 14.000,10.669 14.000,11.142 C14.000,11.616 13.608,12.000 13.125,12.000 L0.875,12.000 C0.392,12.000 -0.000,11.616 -0.000,11.142 C-0.000,10.669 0.392,10.285 0.875,10.285 Z"
              ></path>
            </svg>{' '}
            Menu
          </Link>
          <ul id="header_menu" className="menu">
            <li
              id="menu-item-188"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home"
            >
              <Link to="/">
                <span className="title">Inicio</span>
              </Link>
            </li>

            <li
              id="menu-item-188"
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home"
            >
              <Link to="/">
                <span className="title">Feed</span>
              </Link>
            </li>
            <li
              id="menu-item-191"
              className="menu-item menu-item-type-post_type menu-item-object-page"
            >
              <Link to="#">
                <span className="title">Atualizações rápidas</span>
              </Link>
            </li>
            <li
              id="menu-item-189"
              className="menu-item menu-item-type-post_type menu-item-object-page"
            >
              <Link to="#">
                <span className="title">Campeonatos</span>
              </Link>
            </li>
            <li
              id="menu-item-190"
              className="menu-item menu-item-type-post_type menu-item-object-page"
            >
              <Link to="/teams">
                <span className="title">Seu Time</span>
              </Link>
            </li>
            <li
              id="menu-item-192"
              className="menu-item menu-item-type-post_type menu-item-object-page"
            >
              <Link to="#">
                <span className="title">Sobre nós</span>
              </Link>
            </li>
            {account ? (
              <Link to="/profile" className="login-btn">
                Profile
              </Link>
            ) : (
              <Link to="/sign-in" className="login-btn">
                Login
              </Link>
            )}
          </ul>
        </div>
      </nav>
      {/* /MAINMENU */}
    </header>
  );
};

export default Header;
