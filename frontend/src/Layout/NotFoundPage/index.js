import React from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <p>Không tìm thấy trang</p>
      {/* <Redirect to='/' /> */}
      <button className="btn btn-danger" >
        <Link to="/">
          Quay về Trang chủ
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;