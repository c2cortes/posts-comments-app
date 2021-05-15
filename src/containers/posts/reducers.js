import { SET_POSTS, SET_COMMENTS } from './actions';

const initialState = {
    postsList: [],
    postsComments: []
};

export const posts = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                postsList: payload.data
            };
        case SET_COMMENTS:
            return {
                ...state,
                commentsList: payload.data
            };
        default:
            return state;
    }
}