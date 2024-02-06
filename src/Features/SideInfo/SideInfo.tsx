import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CalendarWidget from 'Widgets/Calendar/ui/Calendar';
import styles from './side-info.module.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFlipboard } from "react-icons/fa6";



const SideInfo: React.FC = () => {
  const [opencalendar, setOpencalendar]=useState(false)

  const onCalendar=()=>{
    setOpencalendar(!opencalendar)
  }


  return (
    <div className={styles.sideInfo}>
      <div className={styles.nameblock}>
        <h3>Arman Arustamyan</h3>
      </div>
      <div className={styles.widgets}>
        <h3>Widgets</h3>
        <ul className={styles.tools}>
          <li className={styles.li}>
            <button className={styles.toolbtn}>
              <Link to='/board-list-workspace'>
                <span className={styles.icon}><FaFlipboard/></span>
                Workspace
              </Link>
            </button>
          </li>
          <li className={styles.li}>
            <button className={styles.toolbtn} onClick={onCalendar}>
              <span className={styles.icon}><FaRegCalendarAlt/></span>
              Calendar
            </button>
            {
              opencalendar ? <CalendarWidget/> : null
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideInfo
