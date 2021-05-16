export const SET_POSTS = 'SET_POSTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';

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

export const addPostComment = (data) => {
	return {
		type: ADD_POST_COMMENT,
		payload: { data }	
	}	
}