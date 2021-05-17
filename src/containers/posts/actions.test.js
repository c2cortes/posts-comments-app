import * as actions from './actions'
import { posts, comments, comment } from './postsDataMock';

describe('actions', () => {
  it('Should set posts after retrieve them from the service', () => {
    const data = posts;
    const expectedAction = {
      type: actions.SET_POSTS,
      payload: { data }	
    }
    expect(actions.setPosts(data)).toEqual(expectedAction)
  })
  
  it('Should set comments after retrieve them from the service', () => {
    const data = comments;
    const expectedAction = {
      type: actions.SET_COMMENTS,
      payload: { data }	
    }
    expect(actions.setComments(data)).toEqual(expectedAction)
  })
  
  it('Should add a comment comming from the form', () => {
    const data = comment;
    const expectedAction = {
      type: actions.ADD_POST_COMMENT,
      payload: { data }	
    }
    expect(actions.addPostComment(data)).toEqual(expectedAction)
  })
})