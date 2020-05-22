// import * as Types from '../Constant/courses';

const initialState = 'BackEnd';

export const chosenCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            state = action.payload;
            return state;
        default:
            return state;
    }
}
