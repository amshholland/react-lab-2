import './PostInList.css';

import Post from '../model/Post';

interface Props {
    post: Post;
    onDelete?: () => void;
}

function PostInList( { post, onDelete }: Props ) {

    return (
        <div className="PostInList">
            <h3>{ post.title }</h3>
            <p>{ post.thought }</p>
            <button onClick={ onDelete }>Delete</button>
        </div>
    );
}


export default PostInList;