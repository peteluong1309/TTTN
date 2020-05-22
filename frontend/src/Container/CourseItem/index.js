import React, { useState, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const CourseItem = ({ course, user: { isAuthenticated, user } }) => {

    const [registerState, setRegisterState] = useState('Đăng ký khóa học');


    const handleClick = () => {
        if (isAuthenticated === true) {
            return setRegisterState('Chờ xét duyệt');
        }
        else {
            return <Fragment>
                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        }
    }
    // useEffect(() => {
    // }, [loading])

    return (
        <>

            <img className="card-img-top" src={course.image} alt="Card" width="10" height="200" />
            <div className="card-body">
                <h4 className="card-title">
                    <Link to={`/course-detail/${course._id}`} className="text-with-dots">{course.courseName}</Link>
                </h4>
                <p className="card-text">{course.user.name}</p>
                <div className="button">
                    <button className="btn btn-danger mt-2" onClick={handleClick} data-toggle="modal" data-target="#exampleModalLong">{registerState}</button>
                </div>
            </div>

        </>
    )
}

CourseItem.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(CourseItem));