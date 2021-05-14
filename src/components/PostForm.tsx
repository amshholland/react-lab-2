import './PostForm.css';

import { FormEvent, useState } from "react";

import Post from '../model/Post';
import closeForm from './SocialPosts';

interface Props {
    onClick?: ( post: Post ) => void;
    onSubmit?: ( post: Post ) => void;
}

// Should form submit to PostInList component?
// SocialPosts component would have one <PostInList/ >

// Should form submit to SocialPosts component?
// SocialPosts component would have <PostInList/ > for each post
// A parent div would be around all of the <PostInList/ > in SocialPosts


function PostForm( { onSubmit }: Props ) {
    const [ title, setTitle ] = useState( " " );
    const [ thought, setThought ] = useState( " " );

    function handleSubmit( e: FormEvent ) {
        e.preventDefault();
        const post: Post = {
            title: title,
            thought: thought
        };

        // reset form
        setTitle( '' );
        setThought( '' );
    }
    return (
        <form className="PostForm" id="postform" onSubmit={ handleSubmit }>
            <div className="titleDiv">
                <label htmlFor="title" />Title <br />
                <input type="text" className="title" id="title" onChange={ e => setTitle( e.target.value ) } value={ title } required />
            </div>
            <div className="thoughtDiv">
                <label htmlFor="thought" />Thought <br />
                <input type="text" className="thought" id="thought" onChange={ e => setThought( e.target.value ) } value={ thought } required />
            </div>
            <button type="submit" >Submit</button>
        </form >
    );
}

export default PostForm;