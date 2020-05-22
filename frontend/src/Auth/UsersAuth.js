import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UsersAuth = ({ component: Component, user: { isAuthenticated, loading }, ...props }) => (

    <Route {...props} render={routeProps =>
        !isAuthenticated && !loading ? (
            <Redirect to="/log-in" />
        ) : (
                <Component {...routeProps} />
            )
    }
    />

);

UsersAuth.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UsersAuth);
