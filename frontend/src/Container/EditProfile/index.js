import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from './../../Action/profile';
import LoadingPage from '../../Layout/LoadingPage';

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    name: '',
    phone: '',
    account: '',
    email: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: ''
  });

  const {
    avatar,
    name,
    phone,
    account,
    email,
    facebook,
    twitter,
    linkedin,
    instagram
  } = formData;

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      avatar: loading || !profile.avatar ? '' : profile.avatar,
      name: loading || !profile.name ? '' : profile.name,
      phone: loading || !profile.phone ? '' : profile.phone,
      email: loading || !profile.user.email ? '' : profile.user.email,
      account: loading || !profile.user.account ? '' : profile.user.account,
      facebook: loading || !profile.social.facebook ? '' : profile.social.facebook,
      twitter: loading || !profile.social.twitter ? '' : profile.social.twitter,
      linkedin: loading || !profile.social.linkedin ? '' : profile.social.linkedin,
      instagram: loading || !profile.social.instagram ? '' : profile.social.instagram
    });
    console.log(profile.user.name);
    // console.log(name);

  }, [loading]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);

  }
  return (
    <>
      {loading === null ? <Fragment>
        <LoadingPage />
      </Fragment> : <Fragment>
          <div className="container">
            <h1 className="large text-danger">Cập nhật thông tin tài khoản</h1>
            <p><i className="fa fa-user" /> Hãy giúp chúng tôi biết rõ hơn về bạn!</p>
            <small>Tất cả đều bắt buộc phải thêm! Xin cảm ơn</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label /> Email:
          <input type="email" name="email" value={email} className="form-control" placeholder="Email" aria-describedby="helpId" onChange={e => onChange(e)} />
                <small id="helpId" className="text-muted"></small>
              </div>
              <div className="form-group">
                <label /> Tên tài khoản:
          <input type="text" name="account" value={account} className="form-control" placeholder="Tên tài khoản" aria-describedby="helpId" onChange={e => onChange(e)} />
                <small id="helpId" className="text-muted"></small>
              </div>
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
                <small id="helpId" className="text-muted">Hãy sử dụng số điện thoại cố định của bạn để chúng tôi có thể liên lạc với bạn</small>
              </div>
              <p>Tài khoản mạng xã hội</p>
              <div className="form-group">
                <label /> Facebook:
          <input type="text" name="phone" value={facebook} className="form-control" placeholder="Facebook URL" aria-describedby="helpId" onChange={e => onChange(e)} />
              </div>
              <div className="form-group">
                <label /> Twitter:
          <input type="text" name="phone" value={twitter} className="form-control" placeholder="Twitter URL" aria-describedby="helpId" onChange={e => onChange(e)} />
              </div>
              <div className="form-group">
                <label /> Linkedin:
          <input type="text" name="phone" value={linkedin} className="form-control" placeholder="Linkedin URL" aria-describedby="helpId" onChange={e => onChange(e)} />
              </div>
              <div className="form-group">
                <label /> Instagram:
          <input type="text" name="phone" value={instagram} className="form-control" placeholder="Instagram URL" aria-describedby="helpId" onChange={e => onChange(e)} />
              </div>
              <div>
                <input type="submit" className="btn btn-danger my-1" value="Cập nhật" />
                <Link className="btn btn-light my-1" to="/me">Quay lại</Link>
              </div>

            </form>

          </div>
        </Fragment>
      }
    </>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile))
