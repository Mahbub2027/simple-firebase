import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleSubmitAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInuser = result.user;
                console.log(loggedInuser);
                setUser(loggedInuser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleSignOut= () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            {/* user ? sign out : login  */}
            { user ?
                <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleSubmitAuth}>Google Login</button>
            }
            {
                user && <div>
                <h2>User: {user?.displayName}</h2>
                <h3>Email: {user?.email}</h3>
            </div>
            }
        </div>
    );
};

export default Login;