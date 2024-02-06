import React, { useState } from 'react'
import styles from './faqs.module.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import type { FAQ } from '../FAQ.props';

const FAQs: React.FC<FAQ> = ({question, answer}) => {
    const [isopen, setIsopen] = useState(false)

    const showAnswer=()=>{
        setIsopen(!isopen)
    }

    return (
        <div className={styles.main}>
            <div className={styles.question}>
                <p>{question}<span className={styles.qmark}>?</span></p>
                {
                    isopen ? <span className={styles.minplus} onClick={showAnswer}><FaMinus /></span> : 
                        <span className={styles.minplus} onClick={showAnswer}><FaPlus /></span>
                }
            </div>
            {
                isopen ? (<div className={styles.answer}>
                <p>{answer}</p>
            </div>) : null
            }
        </div>
    )
}


export default FAQs