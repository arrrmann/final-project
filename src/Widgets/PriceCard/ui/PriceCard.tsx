import React from 'react'
import styles from './price-card.module.css'

const PriceCard: React.FC = () => {
    return (
        <div className={styles.packContainer}>
            <div className={styles.header}>
                <p className={styles.title}>Starter</p>
                <div className={styles.priceContainer}>
                    <span>$</span>0
                    <span>/mo</span>
                </div>
            </div>
            <div>
                <ul className={styles.lists}>
                    <li className={styles.list}>
                        <span>
                            <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <p>2 team members</p>
                    </li>
                    <li className={styles.list}>
                        <span>
                            <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <p>100+ components</p>
                    </li>
                    <li className={styles.list}>
                        <span>
                            <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <p>2 month free updates</p>
                    </li>
                    <li className={styles.list}>
                        <span>
                            <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </span>
                        <p>Life time technical support</p>
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <button type="button">Get started</button>
            </div>
        </div>
    )
}

export default PriceCard
