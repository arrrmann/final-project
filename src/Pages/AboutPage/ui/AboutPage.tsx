import React from 'react'
import AboutMeCard from 'Widgets/AboutMeCard'
import GoBack from 'Widgets/GoBack'
import styles from './about-page.module.css'

const AboutPage: React.FC = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.up}><GoBack/></div>
            <div className={styles.content}>
                <AboutMeCard/>
                <div className={styles.aboutManageX}>
                    <p className={styles.text}>
                    ManageX is a user-friendly web application designed to enhance IT project management.
                    Tailored for IT project managers and teams, ManageX offers a comprehensive suite of features to facilitate efficient project planning and collaboration.
                    You can utilize task boards to organize project tasks effectively,
                    create custom boards for different project phases, or task categories.
                    The drag-and-drop functionality makes it easy to update task statuses.
                    ManageX is not just a project management tool; it's a solution designed to empower IT teams and project managers to deliver successful projects.
                    With its feature-rich environment and emphasis on collaboration, ManageX provides a solid foundation for effective management.
                    </p>
                </div>
            </div>
            <div className={styles.down}></div>
        </div>
    )
}

export default AboutPage
