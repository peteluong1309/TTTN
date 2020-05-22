import React from 'react';
import { connect } from 'react-redux';
import CourseItem from '../../CourseItem';
import CourseList from '../../CourseList';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';



const TabpaneItem = ({ chosenCate, render, courseList, cateList }) => {

    return (

        <>
            <div className="tab-content mt-3">
                {cateList
                    .map((cate, index) => {
                        return (
                            <div className={chosenCate === cate.categoriesID ? "tab-pane active" : "tab-pane fade"} key={index} id={cate.categoriesID}>
                                <CourseList chosenCate={chosenCate} render={course =>
                                    <CourseItem course={course} />} />
                            </div>
                        )
                    })}
            </div>
        </>
    )

}

TabpaneItem.propType = {
    cateList: PropTypes.array.isRequired,
    courseList: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
    return {
        cateList: state.categoryList,
        courseList: state.courseList
    };
}

export default connect(mapStateToProps)(TabpaneItem);