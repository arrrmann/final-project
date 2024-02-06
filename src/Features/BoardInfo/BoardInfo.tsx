import React from 'react'
import styles from './board-info.module.css'
import { litlleboardata } from 'Widgets/LittleBoard';
import LittleBoard from 'Widgets/LittleBoard';
import { FaCheck } from "react-icons/fa6";
import { FaDisplay } from "react-icons/fa6";


const BoardInfo: React.FC = () => {
    return (
        <div className={styles.board}>
            <div className={styles.up}>
                <h3 className={styles.heading}>
                    <span className={styles.iconspan}><FaCheck className={styles.icon}/></span>
                    <span className={styles.title}>My workspace</span>
                </h3>
                <div className={styles.tempWrapper}>
                    <LittleBoard color='rgb(90, 99, 224)' title='My board'/>
                </div>
            </div>
            <div className={styles.down}>
                <h3 className={styles.heading}>
                    <span className={styles.iconspan}><FaDisplay className={styles.icon}/></span>
                    <span  className={styles.title}>Templates</span>
                </h3>
                <div className={styles.tempWrapper}>
                    {
                        litlleboardata.map((board, index)=>(
                            <LittleBoard color={board.color} title={board.title}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BoardInfo

//<Link to='/board-page'></Link>
