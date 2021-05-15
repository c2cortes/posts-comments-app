export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';

export const setPosts = (data) => {
	return {
		type: SET_POSTS,
		payload: { data }	
	}	
}

export const setComments = (data) => {
	return {
		type: SET_COMMENTS,
		payload: { data }	
	}	
}