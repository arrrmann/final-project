import React, { ChangeEvent, useState } from 'react'
import GoBack from 'Widgets/GoBack'
import styles from './contact-page.module.css'


const ContactPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("")

    const handlePhoneNumber=(e:ChangeEvent<HTMLInputElement>)=>{
        setPhoneNumber(e.target.value)
    }

    const savePhoneNumber=()=>{
        if(phoneNumber.length<12){
            console.log('not valid')
            return false
        }
        setPhoneNumber("")
    }


    return (
    <>
        <div className={styles.GoBack}><GoBack/></div>
        <div className={styles.bg}>
            <div className={styles.contentBlock}>
                <div className={styles.wrapper}>
                    <h1 className={styles.h1}>Enter your phone number and we will contact with you</h1>
                    <div className="register-form">
                        <div className={styles.inp}>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" name='phoneNumber' 
                                placeholder="Phone number..." id="phone" onChange={handlePhoneNumber}
                                value={phoneNumber}
                            />
                        </div>
                        <button className={styles.btn} onClick={savePhoneNumber}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </>
        
    )
}


export default ContactPage