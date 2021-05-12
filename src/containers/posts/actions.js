export const SET_POSTS = 'SET_POSTS';

export const setPosts = (data) => {
	return {
		type: SET_POSTS,
		payload: { data }	
	}	
}