import React from 'react';
import Content from '../../Layout/Content';

import ProfileImgDefault from '../../../assets/img/player-profile.jpg';
import ShieldImgDefault from '../../../assets/img/no-shield-profile.png';

const Profile = () => {
  return (
    <Content>
      {/* /SECTION-HEADER */}
      <section id="player-profile">
        <div className="container">
          <article className="player-info">
            <div
              className="avatar"
              style={{
                backgroundImage: `url("${ProfileImgDefault}")`,
              }}
            />
            <div className="right-panel">
              <ul className="profile-details">
                <li>
                  <figure>
                    <img src={ShieldImgDefault} alt="Rilee" />
                  </figure>
                  <div className="name">
                    <span className="nickname">Rilee</span>
                    <h4>Ricardo Lee</h4>
                  </div>
                </li>
                <li className="social">
                  <a
                    href="https://facebook.com/pixiesquad"
                    className="stream twitch"
                  >
                    Twitch.tv
                  </a>
                  <div className="links">
                    <a href="https://facebook.com/pixiesquad" className="first">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="https://facebook.com/pixiesquad">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="https://facebook.com/pixiesquad">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="https://facebook.com/pixiesquad">
                      <i className="fa fa-steam" />
                    </a>
                  </div>
                </li>
              </ul>
              {/* /PROFILE-DETAILS */}
              <ul className="info-section">
                <li>
                  <span className="title">Currently team</span>
                  <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                    Midnight Turtles{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 255, 255)"
                        d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.325 L0.643,3.325 C0.287,3.325 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.287,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <span className="title">Player age</span>
                  <span className="desc">21</span>
                </li>
                <li>
                  <span className="title">Country</span>
                  <span className="desc">
                    <i className="flag-icon flag-icon-se" />
                    Sweden
                  </span>
                </li>
                <li>
                  <span className="title">Ingame Role</span>
                  <span className="desc">
                    <i
                      className="icon"
                      style={{
                        backgroundImage:
                          'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/role.png")',
                      }}
                    />{' '}
                    Team Lead
                  </span>
                </li>
              </ul>
              <div className="about">
                <span className="title">Player</span>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="13px"
                    height="14px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M12.071,-0.000 L0.928,-0.000 C0.415,-0.000 -0.000,0.391 -0.000,0.875 L-0.000,7.000 C-0.000,10.867 5.822,13.778 6.070,13.900 C6.205,13.966 6.352,13.999 6.500,13.999 C6.648,13.999 6.795,13.966 6.929,13.900 C7.178,13.778 13.000,10.867 13.000,7.000 L13.000,0.875 C13.000,0.391 12.584,-0.000 12.071,-0.000 ZM11.143,1.750 L11.143,3.500 L1.857,3.500 L1.857,1.750 L11.143,1.750 ZM6.499,12.124 C4.890,11.238 1.857,9.129 1.857,7.000 L1.857,5.250 L11.143,5.250 L11.143,7.000 C11.143,9.122 8.108,11.235 6.499,12.124 Z"
                    />
                  </svg>
                  Quick Bio{' '}
                </h4>
                <p>
                  <span style={{}}>
                    Now in the modern age, the gaming world is to be called
                    ‘E-Sports’. Where our main focus lies. We have dedicated
                    ourselves to develop our careers in this direction.&nbsp;
                  </span>{' '}
                </p>
              </div>
            </div>
            {/* /RIGHT-PANEL */}
          </article>
          {/* /TEAM-INFO */}
        </div>
      </section>
    </Content>
  );
};

export default Profile;
