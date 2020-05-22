import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCourseDetail } from '../../Action/courses';
import PropTypes from 'prop-types';
import Teacher from './teacher';
import LoadingPage from '../../Layout/LoadingPage';

const CourseDetail = ({
    getCourseDetail,
    match,
    courseDetail: {
        loading,
        course: {
            _id,
            user,
            dateCreated,
            image,
            courseDes,
            courseName,
            courseCategories
        } } }) => {


    useEffect(() => {

        getCourseDetail(match.params.id);
        window.scrollTo(0, 0);
    }, []);



    return (
        <>

            {loading === null ? <Fragment>
                <LoadingPage />
            </Fragment> : <Fragment>
                    {/* <LoadingPage /> */}
                    <div className="container mt-0">

                        <div className="bg-dark course_detail_header" style={{ height: '23rem' }} >
                            <div className="container mt-0" style={{ paddingTop: 65, color: 'white' }}>
                                <div className="row header_course">
                                    <div className="col-9">
                                        <div className="about-title" style={{ width: '35rem', height: '7rem' }} id={_id}>
                                            <h2>{courseName}</h2>
                                        </div>
                                        <div className="about-des">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Teacher user={user} />
                                                </div>
                                                <div className="col-4">
                                                    Cập nhật ngày: {dateCreated}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-rate">
                                            <p>Đánh giá:</p>
                                        </div>
                                        <button className="btn start-btn">Đăng ký khóa học</button>
                                    </div>
                                    <div className="col-3 course_img">
                                        <img src={image} alt="fullstack" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course_detail_body mt-2">
                            <div className="container mt-1 mx-0">

                                <div className="row">
                                    <div className="col-12 col-md-9 col-lg-9 pl-0">
                                        <ul className="nav nav-tabs pl-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#about">Giới thiệu</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#content">Nội dung khóa học</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#exercise">Bài tập</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#qanda">Hỏi đáp</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#rate">Đánh giá</a>
                                            </li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content pl-0">
                                            <div className="tab-pane active" id="about">
                                                <div className="about-title">
                                                    <p className="w-100">TỔNG QUAN KHÓA HỌC</p>
                                                </div>
                                                <div className="line" />
                                                <div id="accordion" className="accordition-style">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                                                <div className="row">
                                                                    <div className="col-2 card_logo">
                                                                        <i className="fa fa-university" />
                                                                    </div>
                                                                    <div className="col-8 header_title">
                                                                        <p className="sub-title">Giới thiệu</p>
                                                                        <p className="main-title">Mô tả về khóa học</p>
                                                                    </div>
                                                                    <div className="col-2 header_plus">
                                                                        <i className="fa fa-plus" />
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="collapseOne" className="collapse" data-parent="#accordion">
                                                            <div className="card-body">
                                                                <p> {courseDes}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                                                <div className="row">
                                                                    <div className="col-2 card_logo">
                                                                        <i className="fa fa-tags" />
                                                                    </div>
                                                                    <div className="col-8 header_title">
                                                                        <p className="sub-title">Giới thiệu</p>
                                                                        <p className="main-title">Mục tiêu khóa học</p>
                                                                    </div>
                                                                    <div className="col-2 header_plus">
                                                                        <i className="fa fa-plus" />
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                            <div className="card-body">
                                                                Lorem ipsum..
                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                                                <div className="row">
                                                                    <div className="col-2 card_logo">
                                                                        <i className="fa fa-user" />
                                                                    </div>
                                                                    <div className="col-8 header_title">
                                                                        <p className="sub-title">Giới thiệu</p>
                                                                        <p className="main-title">Đối tượng</p>
                                                                    </div>
                                                                    <div className="col-2 header_plus">
                                                                        <i className="fa fa-plus" />
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                            <div className="card-body">
                                                                Lorem ipsum..
                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                                                <div className="row">
                                                                    <div className="col-2 card_logo">
                                                                        <i className="fa fa-sticky-note" />
                                                                    </div>
                                                                    <div className="col-8 header_title">
                                                                        <p className="sub-title">Giới thiệu</p>
                                                                        <p className="main-title">Những yêu cầu khi học khóa học này</p>
                                                                    </div>
                                                                    <div className="col-2 header_plus">
                                                                        <i className="fa fa-plus" />
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                                                            <div className="card-body">
                                                                Lorem ipsum..
                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane  fade" id="content">
                                                <p className="mt-3">Hiện tại chưa có nội dung</p>
                                            </div>
                                            <div className="tab-pane  fade" id="exercise">
                                                <p className="mt-3">Hiện tại chưa có bài tập</p>
                                            </div>
                                            <div className="tab-pane  fade" id="qanda">
                                                <p className="mt-3">Hiện tại chưa có câu hỏi mới</p>
                                            </div>
                                            <div className="tab-pane  fade rate" id="rate">
                                                <div className="quest">
                                                    <p>Bạn đánh giá như thế nào về khóa học này?</p>
                                                    <button className="btn btn-danger">Đánh giá ngay</button>
                                                </div>
                                                <div className="line" />
                                                <div className="rate-summary">
                                                    <div className="row">
                                                        <div className="col-xl-4 col-lg-4 col-md-12">
                                                            <p className="text">Điểm đánh giá trung bình</p>
                                                            <p className="mark">4.0</p>
                                                            <p className="rate-star">
                                                                <i className="fa fa-star" aria-hidden="true" />
                                                                <i className="fa fa-star" aria-hidden="true" />
                                                                <i className="fa fa-star" aria-hidden="true" />
                                                                <i className="fa fa-star" aria-hidden="true" />
                                                                <i className="fa fa-star-o" aria-hidden="true" />
                                                            </p>
                                                        </div>
                                                        <div className="col-xl-8 col-lg-8 col-md-12">
                                                            <div className="row">
                                                                <div className="col-xl-8 col-lg-8 col-md-8 col-8">
                                                                    <div className="five-star" />
                                                                </div>
                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                                                                    <div>
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-8 col-lg-8 col-md-8 col-8">
                                                                    <div className="four-star" />
                                                                </div>
                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                                                                    <div>
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-8 col-lg-8 col-md-8 col-8">
                                                                    <div className="three-star" />
                                                                </div>
                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                                                                    <div>
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-8 col-lg-8 col-md-8 col-8">
                                                                    <div className="two-star" />
                                                                </div>
                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                                                                    <div>
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-8 col-lg-8 col-md-8 col-8">
                                                                    <div className="one-star" />
                                                                </div>
                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-4">
                                                                    <div>
                                                                        <i className="fa fa-star" aria-hidden="true" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line mt-3" />
                                                <div className="leave-cmt">
                                                    <p className="my-0">Bình luận</p>
                                                    <form>
                                                        <input type="text" name="comment" id="inp-cmt" className="inp-cmt w-100" placeholder="Nhập bình luận của bạn" />
                                                        <button className="btn btn-danger d-block">Gửi</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="complete_course">
                                            <div className="card">
                                                {/* <img class="card-img-top" src="holder.js/100x180/" alt="" /> */}
                                                <div className="card-body">
                                                    <i className="fa fa-trophy" />
                                                    <p className="card-text mb-0">Hoàn thành khóa học</p>
                                                    <h4 className="card-title">0/15 (0%)</h4>
                                                </div>
                                                {/* <div className="my-0 teacher">
                                                    <p>Giảng viên hướng dẫn</p>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="your-cmt mt-5">
                                            <div className="card">
                                                {/* <img class="card-img-top" src="holder.js/100x180/" alt="" /> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">Bình luận của bạn về khóa học này</h5>
                                                    <button className="btn btn-danger">Bình luận</button>
                                                </div>
                                                <div className="my-0 last-cmt">
                                                    <p>Bình luận của bạn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>}
        </>
    )
}

CourseDetail.propType = {
    courseDetail: PropTypes.object.isRequired,
    getCourseDetail: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    courseDetail: state.courseDetail,
});
export default connect(mapStateToProps, { getCourseDetail })(CourseDetail);