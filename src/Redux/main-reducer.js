const SET_PHOTOS = "SET-PHOTOS";
const SET_INITIALIZE = "SET-INITIALIZE";

let initialState = {
    photos: [],
    isInitialize: false
}

let mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PHOTOS:
            return {
                ...state,
                photos: [...state.photos, ...action.photos]
            };
        case SET_INITIALIZE:
            return {
                ...state,
                isInitialize: action.initialize
            };
        default:
            return state;

    }

}
export const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    photos
})

export const setInitialize = (initialize) => ({
    type: SET_INITIALIZE,
    initialize
})

export default mainReducer;