const SET_PHOTOS = "SET-PHOTOS";

let initialState = {
    photos: []
}

let mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos
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