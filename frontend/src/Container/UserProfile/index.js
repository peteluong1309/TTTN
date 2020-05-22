import React, { Fragment, useEffect } from 'react';
import CourseListRow from '../CourseListRow';
import CourseRowItem from '../CourseRowItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Action/profile';
import { Link } from 'react-router-dom';
import LoadingPage from '../../Layout/LoadingPage';

const UserProfile = ({ getCurrentProfile, user: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>

      {/* <div className="container my-0">
          <h1 className="large text-danger mb-0">Thông tin tài khoản</h1>
        </div> */}
      {loading === null ? <Fragment>
        <LoadingPage />
      </Fragment> : <Fragment>

          {profile !== null ? <Fragment>
            <>

              <section className="user-detail container mt-0">
                <div className="top-user">
                  {/* <img src={profile.user.avatar} alt="user-avatar" /> */}
                  <div className="user-avatar">
                    <img src={profile.avatar} alt="user-avatar" className="ava" />
                  </div>
                  <p className="user-name mb-0 text-center">{profile.name}</p>
                  <div className="social-list">
                    <ul>
                      <li className="fb">
                        <a href={profile.social.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="tw">
                        <a href={profile.social.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="lin">
                        <a href={profile.social.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="ins">
                        <a href={profile.social.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container more-info mt-3">
                  <div className="row">
                    <div className="col-3">
                      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-basic-info" role="tab" aria-controls="v-pills-basic-info" aria-selected="true">Thông tin cơ bản</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-registered-courses" role="tab" aria-controls="v-pills-registered-courses" aria-selected="false">Các khóa học đã đăng ký</a>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-basic-info" role="tabpanel" aria-labelledby="v-pills-basic-info-tab">
                          <div className="basic-info">
                            <div className="form-group">
                              <label>Tên tài khoản:</label>
                              <input type="text" name="taiKhoan" id="taiKhoan" className="form-control w-75" value={profile.user.account} disabled />
                              {/* <p>{profile.user.account}</p> */}
                            </div>
                            <div className="form-group">
                              <label>Email:</label>
                              <input type="text" name="email" id="email" className="form-control  w-75" value={profile.user.email} aria-describedby="helpId" disabled />
                              {/* <p>{profile.user.email}</p> */}
                            </div>
                            <div className="form-group">
                              <label>Số điện thoại:</label>
                              <input type="text" name="soDT" id="soDT" className="form-control  w-75" value={profile.phone} disabled />
                              {/* <p>{profile.phone}</p> */}
                            </div>
                            {/* <div className="form-group">
                    <label>Đổi mật khẩu:</label>
                    <input type="text" name="password" id="password" className="form-control  w-75" placeholder aria-describedby="helpId" />
                  </div> */}
                            <div className="text-center">
                              <Link to="/update-profile" className=" text-white">
                                <button type="submit" className="btn btn-danger text-center">
                                  Cập nhật thông tin
                              </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-registered-courses" role="tabpanel" aria-labelledby="v-pills-registered-courses-tab">
                          <div className="course-row">
                            <CourseListRow render={course =>
                              <CourseRowItem course={course} />
                            } />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </section>

            </>
          </Fragment> : <Fragment>
              <div className="container mt-0">
                <p>
                  Chào mừng <b> {user && user.account} </b>
                </p>
                <p>Đây là tài khoản mới chưa có thông tin. Bạn nên tạo thêm mới các thông tin cho tài khoản</p>
                <Link to='/create-profile' className="btn btn-danger text-white">Thêm thông tin</Link>
              </div>
            </Fragment>}
        </Fragment>
      }
      {/* </div> */}
    </>
  )
}

UserProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    user: state.user
  }
}

export default connect(mapStateToProps, { getCurrentProfile })(UserProfile);