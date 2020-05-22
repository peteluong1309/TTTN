import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourses } from '../../Action/courses';

class CourseListRow extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  renderCourseItem = () => {
    return this.props.courseList
      // .filter(course => 'DiDong' === course.danhMucKhoaHoc.maDanhMucKhoaHoc)
      .map((course, index) => {
        // console.log(course.danhMucKhoaHoc.maDanhMucKhoaHoc);
        return (
          <div key={index} className="row">
            {this.props.render(course)}
          </div>
        );
      });
  };

  render() {
    return (
      <>
        {this.renderCourseItem()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    // cateList: state.categoryList
  };
};

export default connect(mapStateToProps, { getCourses })(CourseListRow);
