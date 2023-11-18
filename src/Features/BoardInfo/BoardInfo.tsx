import React from 'react'
import styles from './board-info.module.css'
import { Link } from 'react-router-dom'

const BoardInfo: React.FC = () => {
    return (
        <div className={styles.board}><Link to='/board-page'>workspace...</Link></div>
    )
}

export default BoardInfo
