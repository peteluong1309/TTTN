import React from 'react';

import Navbar from '../../Components/Navbar';
import { useEffect } from 'react';

const HomeLayout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default HomeLayout;
