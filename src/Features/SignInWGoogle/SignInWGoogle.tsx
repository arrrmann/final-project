import React from 'react'
import { FaGoogle} from "react-icons/fa6";
import styles from './signin.module.css'
import { auth } from 'Features/FireBase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignInWGoogle: React.FC = () => {


    const signIn = async () => {
        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button onClick={signIn} className={styles.comicButton}><FaGoogle /></button>
    )
}

export default SignInWGoogle
