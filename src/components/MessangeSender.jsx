import { Avatar } from '@material-ui/core';
import '../style/messageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from '../fbConfig';
import firebase from 'firebase';

function MessangeSender() {
    // state using React Hook
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [{user}] = useStateValue();

    // handle a submit event
    const handleSubmit = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            username: user.displayName,
            profilePic: user.photoURL,
            image:  imageURL,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(docRef => console.log(docRef))
        .catch(err => console.log(err));


        setInput('');
        setImageURL('');
    }

    return (
        <div className = 'messageSender'>
            <div className="messageSender-top">
                <Avatar src = {user.photoURL}/>
                <form onSubmit = {handleSubmit}>
                    <input
                        value = {input}
                        onChange = {e => setInput(e.target.value)}
                        placeholder = {"What's on your mind, " + user.displayName + "?"}
                        className = 'messageSender-input'
                    />
                    <input
                        value = {imageURL}
                        onChange = {e => setImageURL(e.target.value)}
                        placeholder = 'Image URL (Optional)'/>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <VideocamIcon id ='videoCam'/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender-option">
                    <PhotoLibraryIcon id = 'photoLibrary'/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender-option">
                    <EmojiEmotionsOutlinedIcon id = 'emotion'/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessangeSender;
