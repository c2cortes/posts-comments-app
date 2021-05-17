import { SET_POSTS, SET_COMMENTS, ADD_POST_COMMENT } from './actions';

const initialState = {
    postsList: [],
    commentsList: []
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
        case ADD_POST_COMMENT:
            return {
                ...state,
                commentsList: [...state.commentsList, payload.data]
            };
        default:
            return state;
    }
}