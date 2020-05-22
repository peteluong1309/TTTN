import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class SearchCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <>
        <form className="input-search">
          <div className="input-group">
            <input type="text" className="form-control" name="search" placeholder="Tìm khóa học" onChange={this.onChange} />
            <div className="input-group-prepend">

              <span className="input-group-text">
                <Link to='/search' >
                  <i className="fa fa-search" />
                </Link>
              </span>
            </div>
          </div>
        </form>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.SearchReducer,
    courseList: state.courseList
  }
}

export default connect(mapStateToProps)(SearchCourse);
