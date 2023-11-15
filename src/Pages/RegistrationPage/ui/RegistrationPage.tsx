import React from 'react'
import  styles from "./registrationPage.module.css"
import Registration from 'Features/Registration'


const RegistrationPage:React.FC=()=> {
  return (
    <div className={styles.body}>
      <Registration/>
    </div>
  )
}

export default RegistrationPage
