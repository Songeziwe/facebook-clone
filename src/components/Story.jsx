import { Avatar } from '@material-ui/core';
import '../style/story.css';

function Story({image, profileSrc, profileName}) {
    return (
        <div 
            className = 'story'
            style = {{backgroundImage: `url(${image})`}}
            >
            <Avatar 
                src = {profileSrc}
                className = 'story-avatar'/>
            <h4>{profileName}</h4>
        </div>
    )
}

export default Story;
