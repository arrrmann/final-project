import React from 'react'
import styles from './signin.module.css';
import { auth } from 'Features/FireBase/firebase';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGithub } from "react-icons/fa6";

const SignInWGithub: React.FC = () => {
    const signInGithub = async () => {
        const provider = new GithubAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <button className={styles.comicButton} onClick={signInGithub}><FaGithub /></button>
    )
}


export default SignInWGithub