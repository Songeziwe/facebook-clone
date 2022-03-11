import Story from './Story';
import '../style/storyReel.css';
import {useStateValue} from './StateProvider';

function StoryReel() {
    const [{user}] = useStateValue();
    
    return (
        <div className = 'storyReel'>
            <Story
                image = 'https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileSrc = {user.photoURL}
                profileName = {user.displayName}/>
            <Story
                image = 'https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileSrc = 'https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileName = 'John Doe'/>
            <Story
                image = 'https://images.unsplash.com/photo-1609971757431-439cf7b4141b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileSrc = 'https://images.unsplash.com/photo-1614247521228-d4184c975eff?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileName = 'Zibondile Habashwe'/>
            <Story
                image = 'https://images.unsplash.com/photo-1504888060547-83cbe78ccfe0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEJKSk10dGVESkE0fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileSrc = 'https://images.unsplash.com/photo-1614449203851-926c8509ebe2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileName = 'Zwilakhe Rhadebe'/>
            <Story
                image = 'https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YWV1NnJMLWo2ZXd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileSrc = 'https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                profileName = 'John Doe'/>
        </div>
    )
}

export default StoryReel;
