import React from 'react'
import styles from './signin.module.css'
import { FaGithub } from "react-icons/fa6";

const SignInWGithub: React.FC = () => {
    return (
        <button className={styles.comicButton}><FaGithub /></button>
    )
}


export default SignInWGithub