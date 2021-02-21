import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../../Layout/Content';

const Team = () => {
  return (
    <Content>
      <section id="team-profile">
        <div className="container">
          <article className="team-info">
            <div
              className="game"
              style={{
                backgroundImage:
                  'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/gamelogo.png")',
              }}
            />
            <div className="profile-details">
              <figure>
                <img
                  src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                  alt="Logo"
                />
              </figure>
              <div className="name">
                <h4>Midnight Turtles</h4>
                <span className="subtitle">Triple European Winners</span>
              </div>
            </div>
            {/* /PROFILE-DETAILS */}
          </article>
          {/* /TEAM-INFO */}
          <article className="stats">
            <ul className="left">
              <li className="first">
                <span className="title">Our team's</span>
                <h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.014,10.937 L18.021,10.937 C17.592,14.674 14.636,17.635 10.910,18.065 L10.910,19.062 C10.910,19.580 10.491,20.000 9.974,20.000 C9.458,20.000 9.039,19.580 9.039,19.062 L9.039,18.065 C5.313,17.635 2.357,14.674 1.928,10.937 L0.935,10.937 C0.419,10.937 -0.000,10.518 -0.000,10.000 C-0.000,9.482 0.419,9.062 0.935,9.062 L1.930,9.062 C2.359,5.326 5.312,2.363 9.039,1.933 L9.039,0.937 C9.039,0.420 9.458,-0.000 9.974,-0.000 C10.491,-0.000 10.910,0.420 10.910,0.937 L10.910,1.935 C14.636,2.365 17.592,5.326 18.021,9.062 L19.014,9.062 C19.531,9.062 19.949,9.482 19.949,10.000 C19.949,10.518 19.531,10.937 19.014,10.937 ZM14.338,9.062 L16.131,9.062 C15.725,6.363 13.601,4.233 10.910,3.826 L10.910,5.625 C10.910,6.142 10.491,6.562 9.974,6.562 C9.458,6.562 9.039,6.142 9.039,5.625 L9.039,3.828 C6.347,4.235 4.223,6.364 3.816,9.062 L5.611,9.062 C6.127,9.062 6.546,9.482 6.546,10.000 C6.546,10.518 6.127,10.937 5.611,10.937 L3.818,10.937 C4.224,13.637 6.348,15.766 9.039,16.174 L9.039,14.375 C9.039,13.857 9.458,13.437 9.974,13.437 C10.491,13.437 10.910,13.857 10.910,14.375 L10.910,16.174 C13.601,15.766 15.725,13.637 16.131,10.937 L14.338,10.937 C13.822,10.937 13.403,10.518 13.403,10.000 C13.403,9.482 13.822,9.062 14.338,9.062 ZM9.974,10.937 C9.458,10.937 9.039,10.518 9.039,10.000 C9.039,9.482 9.458,9.062 9.974,9.062 C10.491,9.062 10.910,9.482 10.910,10.000 C10.910,10.518 10.491,10.937 9.974,10.937 Z"
                    />
                  </svg>
                  Stats{' '}
                </h5>
              </li>
              <li className="numeric">
                <span className="mTitle">Wins</span>
                <span className="number">125</span>
              </li>
              <li className="numeric">
                <span className="mTitle">Losses</span>
                <span className="number">42</span>
              </li>
              <li className="numeric">
                <span className="mTitle">Ties</span>
                <span className="number">91</span>
              </li>
            </ul>
            {/* /LEFT */}
            <ul className="right">
              <li>
                <span className="title">Country</span>
                <span className="subtitle">
                  <i className="flag-icon flag-icon-se" />
                  Sweden
                </span>
              </li>
              <li>
                <span className="title">Year founded</span>
                <span className="subtitle">
                  <i className="fa fa-clock-o" /> 2016
                </span>
              </li>
            </ul>
            {/* /RIGHT */}
          </article>
          {/* /STATS */}
          <article className="about">
            SMALL TEAM HUGE PASSION, We are PixieSquad, and we create unique and
            super awesome themes for gamers. An unlimited passion for design and
            giant love for a gaming, doing wonders beyond our capabilities.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            From playing Nintendo, action and shooter games we have always
            wanted to achieve something in the big wild gaming world.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            Now in the modern age, the gaming world is to be called ‘E-Sports’.
            Where our main focus lies. We have dedicated ourselves to develop
            our careers in this direction. As it’s where we can show our
            creativity in the fullest, where passion and crazy effects aren’t a
            problem, where rules are at the minimum.{' '}
          </article>
          <ul className="achievements">
            <li>
              <span className="title">ESL Tournament 2017</span>
              <p>
                <span className="place first">1st place</span>
                <span className="date">25th July</span>
              </p>
            </li>
            {/* /ACHIEVEMENT */}
            <li>
              <span className="title">ESL GAMING NEW YORK</span>
              <p>
                <span className="place second">2nd place</span>
                <span className="date">13 August</span>
              </p>
            </li>
            {/* /ACHIEVEMENT */}
            <li>
              <span className="title">MLG Columbus 2016</span>
              <p>
                <span className="place third">3rd place</span>
                <span className="date">30 October</span>
              </p>
            </li>
            {/* /ACHIEVEMENT */}
            <li>
              <span className="title">TWC CS:GO 2017</span>
              <p>
                <span className="place first">1st place</span>
                <span className="date">25th July</span>
              </p>
            </li>
            {/* /ACHIEVEMENT */}
            <li>
              <span className="title">SR. STARS LEAGUE SERIES</span>
              <p>
                <span className="place third">3rd place</span>
                <span className="date">01 December</span>
              </p>
            </li>
            {/* /ACHIEVEMENT */}
          </ul>
        </div>
      </section>
      <section id="matchRoster" className="noNav">
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
                </svg>{' '}
                Our Players{' '}
              </h3>
            </article>
            {/* /TOP-BAR */}
          </div>
          {/* /SECTION-HEADER */}
          <div className="tab-content content">
            <ul className="roster active">
              <li
                style={{
                  backgroundImage:
                    'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Player-Profile.jpg")',
                }}
              >
                <div className="details">
                  <h4>Rilee </h4>
                  <span className="role">Team Lead </span>
                </div>
                <div className="overlay">
                  <ul>
                    <li className="firstname">Ricardo </li>
                    <li className="lastname">Lee </li>
                    <li className="nickname">Rilee </li>
                    <li className="role">Team Lead </li>
                  </ul>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitch" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-steam" />
                  </Link>
                  <Link
                    to="http://themes.pixiesquad.com/pixiehuge/purple-haste/player/rilee"
                    className="player-cta"
                  >
                    SEE PROFILE{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              {/* /PLAYER */}
              <li
                style={{
                  backgroundImage:
                    'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/player-profile.jpg")',
                }}
              >
                <div className="details">
                  <h4>Hubo99 </h4>
                  <span className="role">Strategier </span>
                </div>
                <div className="overlay">
                  <ul>
                    <li className="firstname">Gabrie </li>
                    <li className="lastname">Higgins </li>
                    <li className="nickname">Hubo99 </li>
                    <li className="role">Strategier </li>
                  </ul>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitch" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-steam" />
                  </Link>
                  <Link
                    to="http://themes.pixiesquad.com/pixiehuge/purple-haste/player/hubo99"
                    className="player-cta"
                  >
                    SEE PROFILE{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              {/* /PLAYER */}
              <li
                style={{
                  backgroundImage:
                    'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Player-Profile-1.jpg")',
                }}
              >
                <div className="details">
                  <h4>Milex </h4>
                  <span className="role">Jumper </span>
                </div>
                <div className="overlay">
                  <ul>
                    <li className="firstname">Andres </li>
                    <li className="lastname">Miles </li>
                    <li className="nickname">Milex </li>
                    <li className="role">Jumper </li>
                  </ul>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitch" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-steam" />
                  </Link>
                  <Link
                    to="http://themes.pixiesquad.com/pixiehuge/purple-haste/player/milex"
                    className="player-cta"
                  >
                    SEE PROFILE{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              {/* /PLAYER */}
              <li
                style={{
                  backgroundImage:
                    'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/player-profile-1.jpg")',
                }}
              >
                <div className="details">
                  <h4>Pitbull </h4>
                  <span className="role">Shooter </span>
                </div>
                <div className="overlay">
                  <ul>
                    <li className="firstname">Johnnie </li>
                    <li className="lastname">Pittman </li>
                    <li className="nickname">Pitbull </li>
                    <li className="role">Shooter </li>
                  </ul>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitch" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-steam" />
                  </Link>
                  <Link
                    to="http://themes.pixiesquad.com/pixiehuge/purple-haste/player/pitbull"
                    className="player-cta"
                  >
                    SEE PROFILE{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              {/* /PLAYER */}
              <li
                style={{
                  backgroundImage:
                    'url("http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/Player-Profile.jpg")',
                }}
              >
                <div className="details">
                  <h4>Rilee </h4>
                  <span className="role">Ingame Rifler </span>
                </div>
                <div className="overlay">
                  <ul>
                    <li className="firstname">Ricardo </li>
                    <li className="lastname">Lee </li>
                    <li className="nickname">Rilee </li>
                    <li className="role">Ingame Rifler </li>
                  </ul>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-twitch" />
                  </Link>
                  <Link to="https://facebook.com/pixiesquad">
                    <i className="fa fa-steam" />
                  </Link>
                  <Link
                    to="http://themes.pixiesquad.com/pixiehuge/purple-haste/player/rilee2"
                    className="player-cta"
                  >
                    SEE PROFILE{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="9px"
                      height="8px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M4.700,0.183 C4.449,0.444 4.449,0.867 4.700,1.128 L6.817,3.327 L0.654,3.327 C0.298,3.327 0.011,3.626 0.011,3.995 C0.011,4.363 0.298,4.662 0.654,4.662 L6.817,4.662 L4.700,6.862 C4.449,7.123 4.449,7.545 4.700,7.806 C4.951,8.067 5.358,8.067 5.609,7.806 L8.824,4.467 C8.940,4.346 9.013,4.179 9.013,3.995 C9.013,3.810 8.940,3.643 8.824,3.522 L5.609,0.183 C5.358,-0.077 4.951,-0.077 4.700,0.183 Z"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              {/* /PLAYER */}
            </ul>
            {/* /TEAM */}
          </div>
          {/* /CONTENT */}
        </div>
        {/* /CONTAINER */}
      </section>
    </Content>
  );
};

export default Team;
