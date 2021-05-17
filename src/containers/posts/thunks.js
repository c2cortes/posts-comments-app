import { ENV } from '../../environment';
import { request } from '../../api/HttpRequest';
import { setPosts, setComments, addPostComment } from './actions';

export const getPosts = () => async (dispatch, getState) => {
    const endpoint = `${ENV.API_URL}posts`;
    const response = await request(endpoint, 'GET');
    dispatch(setPosts(response));

    const commentsEndpoint = `${ENV.API_URL}comments`;
    const commentsResponse = await request(commentsEndpoint, 'GET');
    dispatch(setComments(commentsResponse));
};

export const addComment = (comment) => async (dispatch, getState) => {
    dispatch(addPostComment(comment));
};