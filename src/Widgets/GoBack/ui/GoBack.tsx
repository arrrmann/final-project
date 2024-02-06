import React from 'react'
import styles from './go-back.module.css'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const GoBack: React.FC = () => {
    return (
        <div className={styles.arrow}>
            <button className={styles.btn}>
                <Link to='/'><FaCircleArrowLeft /></Link>
            </button>
        </div>
    )
}

export default GoBack
