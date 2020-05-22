import * as Types from '../Constant/courses';
import api from "../Api";

//CRUD : Create, Read, Update, Delete
// Get list
export const getCourses = () => {
  return async (dispatch) => {
    try {
      const res = await api.get("courses");

      dispatch({
        type: Types.GET_COURSES,
        payload: res.data,
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

//Get course detail by id
export const getCourseDetail = (courseID) => async dispatch => {
  try {
    const res = await api.get(`courses/course-detail/${courseID}`);

    dispatch({
      type: Types.GET_COURSE_DETAIL,
      payload: res.data,
    })
  } catch (err) {
    console.log(err.message);
  }
}


export const getCourseCategoriesList = () =>
  async dispatch => {
    try {
      const res = await api.get('/categories');

      dispatch({
        type: Types.GET_CATEGORY_LIST,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }




// Register to course
// Cancel registering to course
