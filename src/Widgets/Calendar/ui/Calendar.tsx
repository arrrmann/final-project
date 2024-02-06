import React from 'react'
import Calendar from 'react-calendar'
import styles from './calendar.module.css'

const CalendarWidget: React.FC = () => {
    return (
        <div className={styles.calendar}>
            <Calendar/>
        </div>
    )
}

export default CalendarWidget