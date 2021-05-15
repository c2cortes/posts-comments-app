import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './thunks';
import Post from './Post';

const PostsList = ({ getPostsAction, postsList }) => {

    useEffect(() => {
        getPostsAction();
    }, [])

    return (
        <div className="container">
            <h1 className="app-title">Posts Application</h1>
            {postsList.map((item, index) => <Post item={item} key={index} />)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPostsAction: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);