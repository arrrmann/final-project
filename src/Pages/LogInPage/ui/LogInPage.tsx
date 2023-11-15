import React from 'react'
import styles from './login-page.module.css'
import LogIn from 'Features/LogIn'

const LogInPage: React.FC = () => {
    return (
        <div className={styles.body}><LogIn/></div>
    )
}

export default LogInPage
