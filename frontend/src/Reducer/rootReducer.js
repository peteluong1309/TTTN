import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { courseDetailReducer } from "./courseDetailReducer";
import { categoryList } from './categoryList';
import { chosenCategoryReducer } from './chosenCategoryReducer';
import { searchReducer } from "./searchReducer";
import { alert } from './alertReducer';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  courseList: courseReducer,
  courseDetail: courseDetailReducer,
  categoryList: categoryList,
  chosenCategory: chosenCategoryReducer,
  searchReducer: searchReducer,
  user: userReducer,
  alert,
  profile: profileReducer
});

export default rootReducer;