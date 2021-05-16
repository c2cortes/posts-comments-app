import { React } from 'react';

const Comment = ({ item }) => {
    return (
        <div className="media">
            <div className="media-left media-middle">
            </div>
            <div className="media-body">
                <h4 className="media-heading comment-text">{item.name}</h4>
                <h4 className="media-heading comment-text">{item.email}</h4>
                {item.body}
            </div>
            <hr/> 
        </div>
    )
}

export default Comment;