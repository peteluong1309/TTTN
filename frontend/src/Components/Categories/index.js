import React, { useEffect } from 'react';
import { getCourses } from '../../Action/courses';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import CategoriesItem from '../../Container/CategoriesItem/CategoriesItem';
import Slider from 'react-slick';
import CourseItem from '../../Container/CourseItem';

const Categories = ({ getCourses, courseList }) => {

    useEffect(() => {
        getCourses();
    }, [getCourses]);
    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
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
            <section className="myCategories mt-5">
                <div className="categories_content">
                    <h3>Khóa học nổi bật</h3>
                    <div className="categories_list">

                        <Slider {...settings}>
                            {
                                courseList.map((course, index) => {
                                    return (
                                        <div key={index} className="card">
                                            <CourseItem course={course} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    );
};

Categories.propTypes = {
    courseList: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
    return {
        courseList: state.courseList
    }
}

export default connect(mapStateToProps, { getCourses })(Categories);