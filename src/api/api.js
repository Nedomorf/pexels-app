const config = {
    headers: {
        "Authorization": "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf", // наш
        // "Authorization": "563492ad6f91700001000001a170c8b82295491f89605ae0c312c2c0", // левый
    },
    withCredentials: true
}


export const setPhotosAPI = (page, isSearch, query) => {
    let url = '';
    isSearch
        ? url = `https://api.pexels.com/v1/search?page=${page}&query=${query}&per_page=24`
        : url = `https://api.pexels.com/v1/curated?page=${page}&per_page=24`
    return fetch(url, config)
        .then(res => res.json())
        .then(result => result)
}

export const getPhotoAPI = (photoId, isBanner) => {
    return isBanner
        ? fetch(`https://api.pexels.com/v1/photos/${photoId}`, config)
            .then(res => res.json())
            .then(result => result)
        : null
}