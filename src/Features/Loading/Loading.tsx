import React from 'react';
import styles from "./Loading.module.css"


const Loading: React.FC = () => {
    const sliders = Array.from({ length: 5 }, (_, i) => i)

    return (
        <div className={styles.loadingContainer}>
            <section className={styles.loader}>
                {sliders.map((index) => (
                    <div key={index} className={styles.slider} style={{ '--i': index } as any}>
                        <div className={styles.sliderBefore}></div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Loading
