import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCourses } from '../../Action/courses';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const CourseList = ({ getCourses, courseList, render, chosenCate }) => {

  useEffect(() => {
    getCourses();
  }, []);

  const renderCourseItem = () => {
    return (
      courseList
        .filter(course => chosenCate === course.courseCategories.categoriesID)
        .map((course, index) => {
          return (
            <div key={index} className="card">
              {render(course)}
            </div>
          );
        }));
  };


  const settings = {

    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {renderCourseItem()}
      </Slider>
    </>
  )
}

CourseList.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courseList: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    // cateList: state.categoryList
  };
};

export default connect(mapStateToProps, { getCourses })(CourseList);
