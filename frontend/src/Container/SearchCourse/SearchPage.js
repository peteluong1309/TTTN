import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseItem from '../CourseItem';

const SearchPage = ({ courseList }) => {
  return (
    <div className="container">
      <h1 className="mb-3">Tất cả các khóa học</h1>
      <div className="row">
        {
          courseList.map((course, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3">
                <CourseItem course={course} key={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
SearchPage.propTypes = {
  courseList: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    courseList: state.courseList
  }
}

export default connect(mapStateToProps)(SearchPage);