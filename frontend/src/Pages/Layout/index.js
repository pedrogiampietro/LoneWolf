import React from 'react';

import Header from './Header';
import Sponsors from './Sponsors';
import Hero from './Hero';
// import News from './News';
import Teams from './Teams';
import Matches from './Matches';
// import Streams from './Streams';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
      {/* <News /> */}
      <Teams />
      <Matches />
      {/* <Streams /> */}
      <Footer />
    </div>
  );
};

export default Layout;
