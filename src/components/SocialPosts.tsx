import './SocialPosts.css';

import React, { useState } from 'react';

import Post from '../model/Post';
import PostForm from "./PostForm";
import PostInList from './PostInList';

function SocialPosts() {
    const [ postform, setPostForm ] = useState( false );

    const closeButton = <button type="button" className="closeButton" onClick={ closeForm }>X</button>;

    const [ posts, setPosts ] = useState<Post[]>( [
        { title: "Grand Circus", thought: "Grand Circus is cool" },
        { title: "React", thought: "React give me power!" },
        { title: "Beatrice", thought: "My friend Beatrice has mad skills. She made the top 10!" },
    ] );

    function showForm() {
        setPostForm( true );
    }

    function closeForm() {
        setPostForm( false );
    }

    function handleDeletePost( index: number ): void {
        setPosts( prevPost => [
            ...prevPost.slice( 0, index ),
            ...prevPost.slice( index + 1 )
        ] );
    }

    function handleAddPost( posts: Post ): void {
        setPosts( prevPosts => [ ...prevPosts, posts ] );
    }

    // Close button is hidden until post form is visible
    // submit button is hidden except while post for is visible
    // New thought is hidden while post form is visisble
    return (
        <div className="SocialPosts">
            <header className="Header">
                <h1>My Thoughts</h1>
            </header>

            <div className={ "formContainer" }>
                { postform &&
                    <>
                        { closeButton }
                        <PostForm onSubmit={ handleAddPost } />
                    </> }
            </div>

            <button className="newThoughtButton" id="newThoughtButton" onClick={ showForm }>New Thought</button>

            <div className="PostContainer">
                { posts.map( ( post, i ) =>
                    <PostInList key={ i } post={ post } onDelete={ () => handleDeletePost( i ) } />
                ) }
            </div>

        </div>
    );
}


export default SocialPosts;