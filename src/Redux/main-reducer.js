import {chunk} from "lodash";

const SET_PHOTOS = "SET-PHOTOS";

let initialState = {
    photos: []
}

let mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PHOTOS:
            // let arr = [...state.photos, ...action.photos];
            // let subArr = [];
            // if (arr[0]) {
            //     subArr = chunk(arr, 3);
            //     const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
            //     let transposedMatrix = transpose(subArr);
            //     subArr = transposedMatrix.flat(Infinity);
            // }
            return {
                ...state,
                photos: [...state.photos, ...action.photos]
            }

        default:
            return state;

    }

}
export const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    photos
})

export default mainReducer;