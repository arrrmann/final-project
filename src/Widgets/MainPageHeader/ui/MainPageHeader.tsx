import React from 'react'
import { Link } from 'react-router-dom'
import styles from './main-page-header.module.css'

const MainPageHeader: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <span className={styles.brandName}>Manage<span className={styles.brandX}>X</span></span>
            </div>
            <div className={styles.authButtons}>
                <button className={styles.button}><Link to="/log-in">Log in</Link></button>
                <button className={styles.button}><Link to="/registration">Sign-up</Link></button>
            </div>
        </header>
    )
}

export default MainPageHeader
