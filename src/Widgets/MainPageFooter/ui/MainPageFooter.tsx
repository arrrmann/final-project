import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import styles from './main-page-footer.module.css'

const MainPageFooter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.companyName}>
                <span className={styles.brandName}>
                    Manage
                    <span className={styles.brandX}>X</span>
                </span>
            </div>
            <div className={styles.centerLinks}>
                <button className={styles.links}><Link to='/about-page'>About us</Link></button>
                <button className={styles.links}><Link to='/contact-page'>Contact us</Link></button>
            </div>
            <div className={styles.socialIcons}>
                <button className={`${styles.Btn} ${styles.links}`}>
                    <span className={styles.svgContainer}>
                        <a href="https://www.instagram.com/"><FaInstagram className={styles.icon}/></a>
                    </span>
                    <span className={styles.backG}></span>
                </button>
                <button className={`${styles.Btn} ${styles.links}`}>
                    <span className={styles.svgContainer}>
                        <a href="https://www.youtube.com/"><FaYoutube className={styles.icon} /></a>
                    </span>
                    <span className={styles.backG}></span>
                </button>
                <button className={`${styles.Btn} ${styles.links}`}>
                    <span className={styles.svgContainer}>
                        <a href="https://www.linkedin.com/"><FaLinkedin className={styles.icon} /></a>
                    </span>
                    <span className={styles.backG}></span>
                </button>
                <button className={`${styles.Btn} ${styles.links}`}>
                    <span className={styles.svgContainer}>
                        <a href="https://www.facebook.com/"><FaFacebook className={styles.icon} /></a>
                    </span>
                    <span className={styles.backG}></span>
                </button>
            </div>
            <div className={styles.license}>Copyright © 2023 Atlassian</div>
        </footer>
    )
}

export default MainPageFooter