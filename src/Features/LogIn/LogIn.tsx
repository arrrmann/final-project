import React from 'react'
import { Link } from 'react-router-dom';
import SignInWGithub from 'Features/SignInWGithub';
import SignInWGoogle from 'Features/SignInWGoogle';
import styles from './logIn.module.css'


const LogIn: React.FC = () => {
    return (
        <div className={styles.registerPageWrapper}>
            <h1 className={styles.sign}>Welcome back</h1>
            <div className={styles.icons}>
                <SignInWGoogle/>
                <SignInWGithub/>
            </div>
            <div className="register-form">
                <div className={styles.registerInput}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' placeholder="Enter username" id="name" />
                </div>
                <div className={styles.registerInput}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' placeholder="Enter password" id="password" />
                </div>
                <button className={styles.btn}><Link to='/board-list-workspace' className={styles.a}>Log in</Link></button>
            </div>
        </div>
    )
}


export default LogIn;