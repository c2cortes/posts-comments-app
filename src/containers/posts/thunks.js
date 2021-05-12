import { ENV } from '../../environment';
import { request } from '../../api/HttpRequest';
import { setPosts } from './actions';

export const getPosts = () => async (dispatch, getState) => {
    const endpoint = `${ENV.API_URL}posts`;
    const response = await request(endpoint, 'GET');
    const { data } = response;
    dispatch(setPosts(data));
  };