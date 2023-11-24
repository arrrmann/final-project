import React from 'react'
import { Link } from 'react-router-dom';
import SignInWGoogle from 'Features/SignInWGoogle';
import SignInWGithub from 'Features/SignInWGithub';
import styles from './registration.module.css'


const Registration: React.FC = () => {
    return (
        <div className={styles.registerPageWrapper}>
            <h1 className={styles.sign}>Sign up</h1>
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
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' placeholder="Enter e-mail" id="email" />
                </div>
                <div className={styles.registerInput}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' placeholder="Enter password" id="password" />
                </div>
                <button className={styles.btn}><Link to='/board-list-workspace' className={styles.a}>Sign up</Link></button>
            </div>
        </div>
    )
}

export default Registration
