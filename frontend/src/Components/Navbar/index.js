import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CoursesCategories from '../../Container/CoursesCategories';
import SearchCourse from '../../Container/SearchCourse';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Action/user';
import logo from '../../Asset/img/logo.jpg';

const Navbar = ({ user: { isAuthenticated, loading }, logout }) => {

    const user = (
        <li className="nav-item">
            <i className="fa fa-user-circle dropdown-toggle" aria-hidden="true" data-toggle="dropdown">
                <span>Xin chào</span>
            </i>

            <div className="dropdown-menu user-login">
                <Link className="dropdown-item" to="/me">Thông tin tài khoản</Link>
                <button className="dropdown-item" href="abc">Khóa học đang chờ xét duyệt</button>
                <button className="dropdown-item" onClick={logout}>Log out</button>
            </div>

        </li>
    );
    const guest = (
        <Fragment>
            <li className="nav-item button">
                <button className="btn login mr-0">
                    <Link to="/log-in" className=" nav-link">
                        Đăng nhập
                    </Link>
                </button>
            </li>
            <li className="nav-item button">
                <button className="btn signup mr-0">
                    <Link to="/sign-up" className=" nav-link">Đăng ký</Link>
                </button>
            </li>
        </Fragment>
    );
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-light ">
                    <NavLink exact activeClassName="active" className="navbar-brand" to="/">
                        <img src={logo} className="img-fluid mr-0" alt="elearning" width="100px" height="90px" />
                    </NavLink>

                    <button className="navbar-toggler d-lg-none col-sm-2" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <ul className="navbar-nav collapse navbar-collapse" id="collapsibleNavId">
                        <li className="nav-item dropdown ">
                            <div className="categories">
                                <a className="dropdown-toggle" href="hnkn" id="navbardrop" data-toggle="dropdown"> <i className="fa fa-th mr-1" />Danh mục khóa học</a>
                                <CoursesCategories />
                            </div>
                        </li>
                        <li className="nav-item search">
                            <SearchCourse />
                        </li>

                        {/* <div className="collapse navbar-collapse" id="collapsibleNavId"> */}

                        {
                            !loading && (isAuthenticated ? user : guest)
                        }
                        {/* </div> */}
                    </ul>

                </nav>
            </header>

        </>
    );
};

Navbar.propType = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(Navbar);