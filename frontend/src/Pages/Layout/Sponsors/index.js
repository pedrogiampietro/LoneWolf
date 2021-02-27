import React from 'react';
import { Link } from 'react-router-dom';

const Sponsors = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < 2) setActive(active + 1);
  }

  return (
    <section id="sponsors">
      <div className="container">
        <span
          className="leftArrow"
          onClick={slidePrev}
          style={{ display: active >= 1 ? 'block' : 'none' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="8px"
            height="12px"
          >
            <path
              fillRule="evenodd"
              opacity="0.2"
              fill="rgb(256, 256, 256)"
              d="M0.006,5.995 C0.006,6.252 0.103,6.508 0.299,6.704 L5.313,11.713 C5.704,12.104 6.339,12.104 6.731,11.713 C7.122,11.322 7.122,10.687 6.731,10.296 L2.426,5.995 L6.731,1.694 C7.122,1.303 7.122,0.669 6.731,0.277 C6.339,-0.114 5.704,-0.114 5.313,0.277 L0.299,5.287 C0.103,5.483 0.006,5.739 0.006,5.995 Z"
            ></path>
          </svg>
        </span>
        <div className="owl-carousel owl-loaded owl-drag" ref={contentRef}>
          <div className="owl-stage-outer">
            <div
              style={{
                transform: `translateX(${position}px)`,
                display: 'flex',
                flex: '1',
                transition: 'all .3s ease',
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/4.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/5.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/6.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/7.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/1.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item active"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/8.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item active"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/4.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item active"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/5.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item active"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/6.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item active"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/7.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/1.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/1.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/8.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/4.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/5.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/6.png"
                    alt="Upload"
                  />
                </Link>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: 154, marginRight: 100 }}
              >
                <Link to="/">
                  <img
                    src="http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/7.png"
                    alt="Upload"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span
          className="rightArrow"
          onClick={slideNext}
          style={{ display: active === 2 ? 'none' : 'block' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="8px"
            height="12px"
          >
            <path
              fillRule="evenodd"
              opacity="0.2"
              fill="rgb(256, 256, 256)"
              d="M0.006,5.995 C0.006,6.252 0.103,6.508 0.299,6.704 L5.313,11.713 C5.704,12.104 6.339,12.104 6.731,11.713 C7.122,11.322 7.122,10.687 6.731,10.296 L2.426,5.995 L6.731,1.694 C7.122,1.303 7.122,0.669 6.731,0.277 C6.339,-0.114 5.704,-0.114 5.313,0.277 L0.299,5.287 C0.103,5.483 0.006,5.739 0.006,5.995 Z"
            ></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Sponsors;
