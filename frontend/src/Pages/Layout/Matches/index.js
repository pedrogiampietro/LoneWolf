import React from 'react';

const Matches = () => {
  return (
    <section id="matches">
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
              Our Matches{' '}
            </h3>
          </article>
          {/* /TOP-BAR */}

          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#home">
                Home
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu1">
                Menu 1
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#menu2">
                Menu 2
              </a>
            </li>
          </ul>

          <article className="bottombar">
            <ul>
              <li className="active">
                <a href="#UpcomingMatches" data-toggle="tab">
                  Upcoming Matches
                </a>
              </li>
              <li>
                <a href="#LatestResults" data-toggle="tab">
                  Latest Results
                </a>
              </li>
            </ul>
          </article>
          {/* /BOTTOM-BAR */}
        </div>
        {/* /SECTION-HEADER */}
        <div className="tab-content content">
          <ul id="UpcomingMatches" className="active">
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="vs">VS</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/1-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="vs">VS</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/2-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="vs">VS</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/3-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="vs">VS</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/8-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="vs">VS</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/9-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
          </ul>
          {/* /UPCOMING-MATCHES */}
          <ul id="LatestResults">
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="score">1 - 0</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league" />
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/4-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="score">0 - 2</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/5-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="score">2 - 0</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league" />
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/6-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
            <li className="matchBox">
              <div className="teams">
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/midnight-turtles">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/logo2.png"
                    alt="Team's logo"
                  />
                  <span>Midnight Turtles</span>
                </a>
                <span className="score">0 - 3</span>
                <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/team/rhyno-domynos">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/intz.png"
                    alt="Team's logo"
                  />
                  <span>Rhyno Domynos</span>
                </a>
              </div>
              {/* /TEAMS */}
              <div className="rightBox">
                <div className="match-info">
                  <span className="league">SL i-League StarSeries S3</span>
                  <div className="status">
                    <span>Online</span> Vainglory{' '}
                  </div>
                  <span className="date">16 June at 02:05 AM</span>
                </div>
                {/* /MATCH INFO */}
              </div>
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/match/7-midnight-turtles-rhyno-domynos"
                className="cta-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9px"
                  height="8px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M4.688,0.182 C4.437,0.442 4.437,0.865 4.688,1.126 L6.805,3.326 L0.643,3.326 C0.288,3.326 -0.000,3.625 -0.000,3.993 C-0.000,4.362 0.288,4.661 0.643,4.661 L6.805,4.661 L4.688,6.861 C4.437,7.122 4.437,7.544 4.688,7.805 C4.939,8.066 5.346,8.066 5.597,7.805 L8.811,4.466 C8.928,4.345 9.000,4.178 9.000,3.993 C9.000,3.809 8.928,3.642 8.811,3.521 L5.597,0.182 C5.346,-0.079 4.939,-0.079 4.688,0.182 Z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* /MATCH-BOX */}
          </ul>
          {/* /LATEST-RESULTS */}
        </div>
        {/* /CONTENT */}
      </div>
      {/* /CONTAINER */}
    </section>
  );
};

export default Matches;
