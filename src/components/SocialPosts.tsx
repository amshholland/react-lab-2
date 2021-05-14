import './SocialPosts.css';

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

    function openForm() {
        setPostForm( true );
    }

    function closeForm() {
        setPostForm( false );
    }


    // function showForm() {
    //     // return postform === false ? true : false;
    //     
    // }

    return (
        <div className="SocialPosts">
            <header className="Header">
                <h1>My Thoughts</h1>
            </header>
            <div className="formDiv">
                <button type="button" className="close" onClick={ closeForm }>Close</button>
                { postform && <PostForm onSubmit={ handleAddPost } /> }
            </div>
            <button className="newThoughtButton" onClick={ openForm } >New Thought</button>
            <div className="PostContainer">
                { posts.map( ( post, i ) =>
                    <PostInList key={ i } post={ post } onDelete={ () => handleDeletePost( i ) } />
                ) }
            </div>
        </div>
    );
}

export default SocialPosts;