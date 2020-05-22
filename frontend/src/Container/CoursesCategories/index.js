import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCourseCategoriesList } from '../../Action/courses';
import CoursesCategoriesItem from '../CoursesCategoriesItem';
import PropTypes from 'prop-types';

const CoursesCategories = ({ categoryList }) => {
    useEffect(() => {
        console.log(1);
        getCourseCategoriesList({});
    }, []);


    return (
        <div className="dropdown-menu">
            {categoryList.map((cate, index) => {
                return (
                    <CoursesCategoriesItem cate={cate} key={index} />
                )
            })}
        </div>
    )
}

CoursesCategories.propTypes = {
    categoryList: PropTypes.array.isRequired,
    getCourseCategoriesList: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryList
    }
}
export default connect(mapStateToProps, { getCourseCategoriesList })(CoursesCategories);