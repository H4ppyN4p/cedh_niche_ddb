import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')

    function checkCredentials(){
        console.log(userEmail + ' ' + userPass)
        signInWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        }) 
    }

    return(
        <>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" value={userEmail} name="email" onInput={e => setUserEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" value={userPass} name="password" onInput={e => setUserPass(e.target.value)}></input>
        </div>
        <button onClick={checkCredentials}>Button to login</button>
        </>
    )
}

export default SignIn;