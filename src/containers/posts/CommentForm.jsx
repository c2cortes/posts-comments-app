import { React, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from './thunks';

const CommentForm = ({postId, addCommentAction, updateComments}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const validateForm = e => {
        e.preventDefault();
        const comment = { postId, name, email, body }
        addCommentAction(comment);
        setName('');
        setEmail('');
        setBody('');
    }

    return(
        <div className="comment-form-wrapper">
            <h4 className="list-group-item-heading comments-title">Leave a comment :)</h4>
            <form onSubmit={ e => validateForm(e) }>
                <div className="form-group">
                    <label htmlFor="inputName">Name:</label>
                    <input value={name} onChange={ e => setName(e.target.value) } type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address:</label>
                    <input value={email} onChange={ e => setEmail(e.target.value) } type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Comment:</label>
                    <textarea value={body} onChange={ e => setBody(e.target.value) } className="form-control" id="comment" rows="3"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addCommentAction: (comment) => dispatch(addComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);