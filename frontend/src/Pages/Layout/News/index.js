import React from 'react';

const News = () => {
  return (
    <section id="news" className="home firstWithBg">
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
              Latest news{' '}
            </h3>
          </article>
          {/* /TOP-BAR */}
        </div>
        {/* /SECTION-HEADER */}
        <div className="content">
          <article
            className="news-box large post-143 post type-post status-publish format-standard has-post-thumbnail hentry category-overwatch"
            style={{
              backgroundImage:
                'url("http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-content/uploads/2017/06/post10.jpg")',
            }}
          >
            <a
              href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/overwatch/"
              className="category"
            >
              Overwatch{' '}
            </a>
            <div className="details">
              <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/renegades-defeat-signature-to-minor-playoffs/">
                RENEGADES DEFEAT SIGNATURE; TO MINOR PLAYOFFS{' '}
              </a>
              <span className="date">June 16, 2017 </span>
            </div>
            {/* /DETAILS */}
          </article>
          <article
            className="news-box large post-140 post type-post status-publish format-standard has-post-thumbnail hentry category-counter-strike"
            style={{
              backgroundImage:
                'url("http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-content/uploads/2017/06/post11.jpg")',
            }}
          >
            <a
              href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/counter-strike/"
              className="category"
            >
              Counter Strike{' '}
            </a>
            <div className="details">
              <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/scream-now-we-know-were-capable-of-winning/">
                SCREAM: “NOW WE KNOW WE’RE CAPABLE OF{' '}
              </a>
              <span className="date">June 16, 2017 </span>
            </div>
            {/* /DETAILS */}
          </article>
          <article
            className="news-box post-137 post type-post status-publish format-standard has-post-thumbnail hentry category-dota2"
            style={{
              backgroundImage:
                'url("http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-content/uploads/2017/06/post12.jpg")',
            }}
          >
            <div className="details">
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/dota2/"
                className="category"
              >
                Dota2{' '}
              </a>
              <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/dh-valencia-and-atlanta-qualifiers-announced/">
                DH VALENCIA AND ATLANTA QUALIFIERS ANNOUNCED{' '}
              </a>
              <span className="date">June 16, 2017 </span>
            </div>
            {/* /DETAILS */}
          </article>
          <article
            className="news-box post-134 post type-post status-publish format-standard has-post-thumbnail hentry category-dota2"
            style={{
              backgroundImage:
                'url("http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-content/uploads/2017/06/post13.jpg")',
            }}
          >
            <div className="details">
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/dota2/"
                className="category"
              >
                Dota2{' '}
              </a>
              <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/winners-and-losers-of-esl-pro-league-s5-finals/">
                WINNERS AND LOSERS OF ESL PRO LEAGUE S5 FINALS{' '}
              </a>
              <span className="date">June 16, 2017 </span>
            </div>
            {/* /DETAILS */}
          </article>
          <article
            className="news-box post-122 post type-post status-publish format-standard has-post-thumbnail hentry category-counter-strike category-overwatch tag-black-panthers tag-rhyno-domynos tag-rilee"
            style={{
              backgroundImage:
                'url("http://themes.pixiesquad.com/pixiehuge/purple-haste/wp-content/uploads/2017/06/post14.jpg")',
            }}
          >
            <div className="details">
              <a
                href="http://themes.pixiesquad.com/pixiehuge/purple-haste/category/counter-strike/"
                className="category"
              >
                Counter Strike{' '}
              </a>
              <a href="http://themes.pixiesquad.com/pixiehuge/purple-haste/shahzam-returns-to-misfits-active-lineup/">
                SHAHZAM RETURNS TO MISFITS’ ACTIVE LINEUP{' '}
              </a>
              <span className="date">June 16, 2017 </span>
            </div>
            {/* /DETAILS */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
