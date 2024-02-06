import React from 'react'
import { LittleBoardProps } from '../LittleBoard.props'
import { Link } from 'react-router-dom'
import styles from './little-board.module.css'

const LittleBoard: React.FC<LittleBoardProps> = ({color, title}) => {
    const mystyles ={
        backgroundColor: color ? `${color}` : '',
    }

    return (
        <div className={styles.wrap} style={mystyles}>
            <Link to='/board-page'>
                <span className={styles.description}>{title}</span>
            </Link>
        </div>
    )
}

export default LittleBoard