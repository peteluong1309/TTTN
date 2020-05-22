import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class CourseRowItem extends Component {
  goToCourseDetail = () => {
    this.props.history.push(`/course-detail/${this.props.course._id}`);
  }
  render() {
    const { course } = this.props;
    return (
      <>
        <div className="row" id={course._id}>
          <div className="col-3">
            <img className="w-100" src={course.image} alt="Card" />
          </div>
          <div className="col-9">
            <h4 className="card-title">
              <Link to={`/course-detail/${course._id}`}>{course.courseName}</Link>
            </h4>
            <p className="date-edit">Ngày cập nhật: {course.dateCreated}</p>
            {/* <p className="card-text">Người tạo: {course.creator.name}</p> */}
            <div>
              <button type="button" className="btn btn-info" onClick={this.goToCourseDetail}>Bắt đầu học</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(CourseRowItem);