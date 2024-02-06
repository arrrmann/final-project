import React from 'react'
import arman from './images/arman.png'
import { FaGithub } from "react-icons/fa6";
import styles from './about-me-card.module.css'



const AboutMeCard: React.FC = () => {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.front}>
                    <img src={arman} className={styles.cardImg} alt="Author" />
                    <span className={styles.Ceo}>CEO of ManageX</span>
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>About me</p>
                    <p className={styles.cardDescription}>
                        I’m Arman Arustamyan, a multidisciplinary web developer who focuses on visually telling stories to my clients, through enjoyable and meaningful pictures.
                        I specialize in creative websites and functional user interfaces. I created over 15 websites from nothing. I also worked as a UI/UX developer, which allowed me to create more and more fresh designs and turn them into a reality. My websites are funny and joyeful just like me:)
                    </p>
                    <p className={styles.socials}><button className={styles.socialGitHub}><a href="https://github.com/arrrmann"><FaGithub/></a></button></p>
                </div>
            </div>
        </>
    )
}

export default AboutMeCard
