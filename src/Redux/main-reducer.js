const SET_PHOTOS = "SET-PHOTOS";
const SET_INITIALIZE = "SET-INITIALIZE";
const SET_RECOMMENDS = "SET-RECOMMENDS";

let initialState = {
    photos: [],
    isInitialize: false,
    recommends: []
}

let mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PHOTOS:
            if (action.reset) {
                return {
                    ...state,
                    photos: []
                };
            } else {
                return {
                    ...state,
                    photos: [...state.photos, ...action.photos]
                };
            }
        case SET_INITIALIZE:
            return {
                ...state,
                isInitialize: action.initialize
            };
        case SET_RECOMMENDS:
            let a = action.el
            debugger
            return {
                ...state,
                recommends: [...state.recommends, action.el]

            }
        default:
            return state;

    }

}
export const setPhotos = (photos, reset) => ({
    type: SET_PHOTOS,
    photos, reset
})

export const setInitialize = (initialize) => ({
    type: SET_INITIALIZE,
    initialize
})

export const setRecommends = (el) => ({
    type: SET_RECOMMENDS,
    el
})

export default mainReducer;