import Post from '../model/Post';
import PostForm from "./PostForm";
import PostInList from './PostInList';
import React from "react";
import { useState } from 'react';

function SocialPosts() {
    const [ postform, setPostForm ] = useState( false );
    const [ posts, setPosts ] = useState<Post[]>( [
    ] );

    function handleDeletePost( index: number ): void {
        setPosts( prevPost => [
            ...prevPost.slice( 0, index ),
            ...prevPost.slice( index + 1 )
        ] );
    }

    function handleAddPost( posts: Post ): void {
        setPosts( prevPosts => [ ...prevPosts, posts ] );
    }

    function showForm() {
        // return postform === false ? true : false;
        setPostForm( true );
    }

    return (
        <div className="SocialPosts">
            <header className="Header">
                <h1>My Thoughts</h1>
            </header>
            <div className="formContainer" >
                { postform && <PostForm onSubmit={ handleAddPost } /> }
            </div>
            <button id="newThoughtButton" onClick={ showForm }>New Thought</button>
            <div className="PostContainer">
                { posts.map( ( post, i ) =>
                    <PostInList key={ i } post={ post } onDelete={ () => handleDeletePost( i ) } />
                ) }
            </div>
        </div>
    );
}

export default SocialPosts;