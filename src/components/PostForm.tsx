import { FormEvent, useState } from "react";

import Post from '../model/Post';

interface Props {
    onSubmit: ( post: Post ) => void;
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
        onSubmit( post );

        // reset form
        setTitle( '' );
        setThought( '' );
    }
    return (
        <form className="PostForm" onSubmit={ handleSubmit }>
            <p>
                <label> Title:
                <input type="text" className="title" onChange={ e => setTitle( e.target.value ) } value={ title } />
                </label>
            </p>
            <p>
                <label> Thought:
                <input type="text" className="thought" onChange={ e => setThought( e.target.value ) } value={ thought } />
                </label>
            </p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostForm;