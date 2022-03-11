import { Avatar } from '@material-ui/core';
import { ChatBubbleOutlineRounded, NearMeRounded, ThumbUpAltRounded } from '@material-ui/icons';
import '../style/post.css';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className = 'post'>
            <div className="post-top">
                <Avatar 
                    className = 'post-avatar' 
                    src ={profilePic}/>
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                </div>
            </div>
            
            <div className="post-bottom">
                {message}
            </div>

            <div className="post-image">
                {image ? <img src={image} alt="post"/>: null}
            </div>

            <div className="post-options">
                <div className="post-option">
                    <ThumbUpAltRounded/>
                    <span>Like</span>
                </div>
                <div className="post-option">
                    <ChatBubbleOutlineRounded/>
                    <span>Comment</span>
                </div>
                <div className="post-option">
                    <NearMeRounded/>
                    <span>Share</span>
                </div>
            </div>            

        </div>
    )
}

export default Post;
