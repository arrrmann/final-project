import React from 'react'
import { Link } from "react-router-dom";
import Saly from './Saly.png'
import styles from './mainPage.module.css'

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <span className={styles.brandName}>Manage<span className={styles.brandX}>X</span></span>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.button}><Link to="/log-in">Log in</Link></button>
          <button className={styles.button}><Link to="/registration">Sign-up</Link></button>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.firstBlockWrap}>
          <div className={styles.welcome}>
            <p className={styles.p}>
              Manage<span className={styles.brandX2}>X</span> brings all your tasks, teammates, and tools together
              <span className={styles.span}>Keep everything in the same place—even if your team isn’t.</span>
            </p>
            <button className={`${styles.button} ${styles.btnGetstarted}`}><Link to="/registration">Get started</Link></button>
          </div>
          <div className={styles.SalyBG}>
            <img src={Saly} alt="Saly" className={styles.Saly} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage

