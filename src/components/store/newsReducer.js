import { newsAPI } from "../api/newsAPI"

const GET_NEWS = "GET-NEWS";
const SET_LIKE = "SET-LIKE";

const newsReducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case GET_NEWS:
            newState.news = action.news;
            newState.isLoaded = true;
            return newState;
        case SET_LIKE:
            newState.news = { ...state.news };
            break;
        default:
            return newState;
    }
}

let initialState = {
    news: [],
    isLoaded: false
};

export function getNews(news) {
    return { type: GET_NEWS, news: news };
}

export function requestNewsThunk() {
    return (dispatch) => {
        newsAPI.requestNews().then(data => {
            dispatch(getNews(data));
        })
    }
}

export function setLike(id) {
    return { type: SET_LIKE, id: id };
}

export default newsReducer;