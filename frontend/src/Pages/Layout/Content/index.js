import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import CoverPlayer from '../../../assets/img/cover-player.jpg';

const Content = ({ children }) => {
  const [background, setBackground] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/test':
        setBackground(
          'http://themes.pixiesquad.com/pixiehuge/orange-elite/wp-content/uploads/2017/06/cover-team-2.jpg'
        );
        break;

      case '/profile':
        setBackground(`${CoverPlayer}`);
        break;

      case '/sign-in':
        setBackground('');
        break;

      default:
        setBackground('');
    }
  }, [location]);

  return (
    <div>
      <Header />

      <div
        className="cover-bg"
        style={{
          backgroundImage: `url("${background}")`,
        }}
      />
      {children}

      <Footer />
    </div>
  );
};

export default Content;
