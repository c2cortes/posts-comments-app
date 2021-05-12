import { SET_POSTS } from './actions';

const initialState = {
    posts: []
};

export const posts = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: payload
            };
        default:
            return state;
    }
}