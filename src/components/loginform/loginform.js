import "../loginform/loginform.css";
import { FacebookLoginButton,GoogleLoginButton,LinkedinLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return(
        <form action="#">
                <h1>Login here.</h1>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <div class="content">
                    <div class="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox"></input>
                        <label>Remember me</label>
                    </div>
                </div>
                <div class="pass-link">
                    <a href="#">Forgot password?</a>
                </div>
                <button>Login</button>
                <span>or use your account</span>
                <div class="social-container">
                    <FacebookLoginButton size={32} round />
                    <GoogleLoginButton size={32} round />
                    <LinkedinLoginButton size={32} round />
                </div>
        </form>
    );
}