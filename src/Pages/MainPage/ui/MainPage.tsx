import React from 'react'
import { Link } from "react-router-dom";
import MainPageFooter from 'Widgets/MainPageFooter';
import PriceCard from 'Widgets/PriceCard';
import Card from 'Widgets/Card';
import MainPageHeader from 'Widgets/MainPageHeader';
import Saly from './images/Saly.png'
import img from './images/4.png'
import styles from './mainPage.module.css'

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <MainPageHeader/>
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
      <section>
        <div className={styles.secondBlockWrap}>
          <Card>
            <p className={styles.Heading}>Project Managment</p>
            <p className={styles.Description}>Keep tasks in order deadlines on track and team members aligned with ManageX</p>
          </Card>
          <Card>
            <p className={styles.Heading}>Meetings</p>
            <p className={styles.Description}>Empower your team meetings to be more productive with ManageX's board manager</p>
          </Card>
          <Card>
            <p className={styles.Heading}>Tasks Managment</p>
            <p className={styles.Description}>Use ManageX to track, manage, complete and bring tasks together like a pieces of a puzzle</p>
          </Card>
          <Card>
            <p className={styles.Heading}>Brainstorming</p>
            <p className={styles.Description}>Unless your team's creativity and keep ideas visible</p>
          </Card>
          <Card>
            <p className={styles.Heading}>Collaboration</p>
            <p className={styles.Description}>Enhance collaboration within your IT team by using ManageX to centralize communication and share insights. </p>
          </Card>
          <Card>
            <p className={styles.Heading}>Time Tracking</p>
            <p className={styles.Description}>Efficiently track the time spent on each task or project</p>
          </Card>
        </div>
      </section>
      <section>
        <div className={styles.thirdblock}>
          <PriceCard/>
          <div className={styles.imgBlcock}>
            <img src={img} alt="img" className={styles.png}/>
          </div>
        </div>
      </section>
      <MainPageFooter/>
    </div>
  )
}

export default MainPage

