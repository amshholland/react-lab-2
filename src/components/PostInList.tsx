import Post from '../model/Post';

interface Props {
    post: Post;
    onDelete?: ( post: Post ) => void;
}
function PostInList( { post, onDelete }: Props ) {

    return (
        <div className="PostInList">
            <p> { post.title } { post.thought } { onDelete }</p>
        </div>
    );
}

export default PostInList;