import React from 'react'
import styles from './user-page.module.css'
import img from 'Pages/MainPage/ui/images/2.png'

const UserPage: React.FC = () => {
    return (
        <div className={styles.page}>
            <div className={styles.infoList}>
                <span>Personal Information</span>
                <div className={styles.info}>
                    Arman Arustamyan
                </div>
                <div className={styles.info}>
                    arman.arustamyan99@gmail.com
                </div>
                <div className={styles.info}>
                    ************
                </div>
            </div>
            <div className={styles.picBlock}>
                <img src={img} alt="img" className={styles.img} />
            </div>
        </div>
    )
}

export default UserPage
