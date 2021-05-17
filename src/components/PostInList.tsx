import './PostInList.css';

import Post from '../model/Post';

interface Props {
    post: Post;
    onDelete?: () => void;
}

function PostInList( { post, onDelete }: Props ) {

    return (
        <div className="PostInList">
            <h3 className="postTitle">{ post.title }</h3>
            <p className="postThought">{ post.thought }</p>
            <button className="delete" onClick={ onDelete }>Delete</button>
        </div>
    );
}


export default PostInList;