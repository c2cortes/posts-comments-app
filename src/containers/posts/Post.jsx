import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Post = ({ item, commentsList }) => {

    const [comments, setComments] = useState([]);

    const getPostComments = (id) => {
        return commentsList ? commentsList.filter(element => element.postId === id) : []
    }

    useEffect(() => {
        if(comments.length > 0){
            setComments(commentsList.filter(element => element.postId === item.id));
        }
    }, [commentsList])

    return (
        <div className="list-group">
            <a href="#" className="list-group-item" onClick={() => comments.length == 0 ? setComments(getPostComments(item.id)) : setComments([])}>
                <h4 className="list-group-item-heading">{item.title}</h4>
                <p className="list-group-item-text">{item.body}</p>
            </a>
            <div>
                {
                    comments.length > 0 ?
                        <div>
                            <hr />
                            <h4 className="list-group-item-heading comments-title">Comments:</h4>
                        </div>
                        : null
                }
                {comments.map((item, index) => <Comment item={item} key={index} />)}
                {comments.length > 0 ? <CommentForm postId={ item.id } /> : null}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const commentsTemp = state.posts.commentsList.filter(element => element.postId == 1)
    return {
        commentsList: state.posts.commentsList,
    };
};

export default connect(mapStateToProps)(Post);