import StoryReel from './StoryReel';
import '../style/feed.css';
import MessangeSender from './MessangeSender';
import Post from './Post';
import { useState, useEffect } from 'react';
import db from '../fbConfig';

function Feed() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            setPost(snapshot.docs.map(doc => {
                return {id: doc.id, data: doc.data()};
            }));
        });        
    }, []);
    
    return (
        <div className = 'feed'>
            <StoryReel/>
            <MessangeSender/>
            {
                posts.map(post => {
                    const {data, id} = post;
                    return (
                        <Post
                            key = {id}
                            profilePic = {data.profilePic}
                            message = {data.message}
                            timestamp = {data.timestamp}
                            username = {data.username}
                            image = {data.image}
                        />
                    );
                })
            }
            {/* <Post
            profilePic = 'https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            message = 'Cape Town Train Station'
            timestamp = 'This is a timestamp'
            username = 'Mr Zibondiwe'
            image = 'https://images.unsplash.com/photo-1615123888414-2c245800c754?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhIeFlUTUhMZ09jfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/> */}
        </div>
    )
}

export default Feed;
