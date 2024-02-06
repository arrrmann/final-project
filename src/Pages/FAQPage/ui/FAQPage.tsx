import React from 'react'
import FAQs from 'Widgets/FAQs'//component
import styles from './faq-page.module.css'
import { faqs } from 'Widgets/FAQs'//data-array

const FAQPage: React.FC = () => {

    return (
        <div className={styles.main}>
            <div className={styles.heading}>FAQS</div>
            {
                faqs.map((faq, index)=>(
                    <FAQs key={index} question={faq.question} answer={faq.answer}/>
                ))
            }
        </div>
    )
}

export default FAQPage