import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from './../../Action/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    name: '',
    phone: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: ''
  });

  const {
    avatar,
    name,
    phone,
    facebook,
    twitter,
    linkedin,
    instagram
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);

  }
  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-danger">Thêm thông tin tài khoản</h1>
        <p><i className="fa fa-user" /> Hãy giúp chúng tôi biết rõ hơn về bạn!</p>
        <small>Tất cả đều bắt buộc phải thêm! Xin cảm ơn</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label /> Họ tên:
          <input type="text" name="name" value={name} className="form-control" placeholder="Họ tên" aria-describedby="helpId" onChange={e => onChange(e)} />
            <small id="helpId" className="text-muted"></small>
          </div>
          <div className="form-group">
            <label /> Avatar:
          <input type="text" name="avatar" value={avatar} className="form-control" placeholder="Avatar" aria-describedby="helpId" onChange={e => onChange(e)} />
            <small id="helpId" className="text-muted">Đường dẫn tới hình ảnh mà bạn cho là đẹp! Chúng tôi không thích bạn tải ảnh từ máy tính lên!</small>
          </div>
          <div className="form-group">
            <label /> Số điện thoại:
          <input type="text" name="phone" value={phone} className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" onChange={e => onChange(e)} />
          </div>
          <p>Tài khoản mạng xã hội</p>
          <div className="form-group">
            <label /> Facebook:
          <input type="text" name="facebook" value={facebook} className="form-control" placeholder="Facebook URL" aria-describedby="helpId" onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label /> Twitter:
          <input type="text" name="twitter" value={twitter} className="form-control" placeholder="Twitter URL" aria-describedby="helpId" onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label /> Linkedin:
          <input type="text" name="linkedin" value={linkedin} className="form-control" placeholder="Linkedin URL" aria-describedby="helpId" onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label /> Instagram:
          <input type="text" name="instagram" value={instagram} className="form-control" placeholder="Instagram URL" aria-describedby="helpId" onChange={e => onChange(e)} />
          </div>
          <div>
            <input type="submit" className="btn btn-danger my-1" value="Thêm thông tin" />
            <Link className="btn btn-light my-1" to="/me">Quay lại</Link>
          </div>

        </form>

      </div>
    </Fragment>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}



export default connect(null, { createProfile })(withRouter(CreateProfile))
