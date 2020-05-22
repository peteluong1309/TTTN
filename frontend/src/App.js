import React, { useEffect } from 'react';

import './App.css';
import './Asset/SCSS/main.scss';
import './Asset/Lib/lib.css';

import rootReducer from './Reducer/rootReducer';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseDetail from './Container/CourseDetail';
import HomeLayout from './Layout/HomeLayout';
import Layout from './Layout/HomeLayout/layout';
import UsersAuth from './Auth/UsersAuth';
import UserProfile from './Container/UserProfile';
import Alert from './Container/Alert';
import SignUp from './Container/SignUp';
import LogIn from './Container/LogIn';
import { loadUser } from './Action/user';
import setAuthToken from './Helper/setAuthToken';
import CreateProfile from './Container/CreateProfile';
import EditProfile from './Container/EditProfile';
// import NotFoundPage from './Layout/NotFoundPage';
import SearchPage from './Container/SearchCourse/SearchPage';
// import LoadingPage from './Layout/LoadingPage';
// import Detail from './Container/UserProfile/detail';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);

  return (

    <Provider store={store}>
      <Router>
        <HomeLayout path="/">
          <Alert />
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/course-detail/:id" exact component={CourseDetail} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/log-in" exact component={LogIn} />
            <Route path="/search" exact component={SearchPage} />
            <UsersAuth path="/admin" exact component={LogIn} />
            <UsersAuth path="/log-in" exact component={LogIn} />
            <UsersAuth path="/create-profile" exact component={CreateProfile} />
            <UsersAuth path="/update-profile" exact component={EditProfile} />
            {/* <UsersAuth path="/home" exact component={Layout} /> */}
            <UsersAuth path="/me" exact component={UserProfile} />
            <UsersAuth path="/create-profile" exact component={CreateProfile} />
            <UsersAuth path="/update-profile" exact component={EditProfile} />
            {/* <UsersAuth path="/me/detail" exact component={Detail} /> */}
            {/* <Route path="" exact={false} component={NotFoundPage} /> */}
          </Switch>
          {/* <LoadingPage /> */}
        </HomeLayout>
      </Router>
    </Provider>
  )
};


export default App;