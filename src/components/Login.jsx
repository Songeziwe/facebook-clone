import { Button } from '@material-ui/core';
import '../style/login.css';
import facebook from '../images/facebook.svg';
import { auth, provider } from '../fbConfig';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();   
    
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            // pass the user to the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div className = 'login'>
            <div className="login-logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/> 
                <img className="fb-name" src={facebook} alt=""/>
            </div>
            <Button 
                type='submit' 
                onClick={signIn}
                className='login-btn'
            >
                    Sign In
            </Button>
        </div>
    )
}

export default Login
