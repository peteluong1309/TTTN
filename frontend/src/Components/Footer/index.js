import React, { Fragment } from 'react';
import logo from '../../Asset/img/logo.jpg';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="row mx-0">
                    <div className="col-12 col-md-6 col-lg-6 footer-copyright">
                        <Link to="/">
                            <img src={logo} alt="logo" height="90" />
                        </Link>
                        <span> Copyright © 2020 Elearning, Inc.</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 footer_term">
                        <ul>
                            <li>
                                <Link to='/'>Term</Link>
                            </li>
                            <li>
                                <Link to='/'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='/'>Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment >
    );
};

export default Footer;