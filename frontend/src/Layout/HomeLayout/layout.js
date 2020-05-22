import React from 'react'
import Carousel from '../../Components/Carousel';
import Categories from '../../Components/Categories';
import Course from '../../Components/Course';
import Opinion from '../../Components/Opinion';
import Intro from '../../Components/Intro';
import Footer from '../../Components/Footer';


const Layout = () => {
  return (
    <>
      <Carousel />
      <Intro />
      <Course />
      <Categories />
      <Opinion />
      <Footer />
    </>
  )
}

export default Layout;
