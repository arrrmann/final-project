import React from 'react'
import { RegistrationProps } from 'shared/userInterface'
import SideInfo from 'Features/SideInfo'
import Board from 'Features/Board'
import Header from 'Features/Header/Header'
import styles from './board-page.module.css'

const BoardPage: React.FC <RegistrationProps>= ({handleSignOut, user}) => {
    return (
        <>
            <Header handleSignOut={handleSignOut} user={user} />
            <div className={styles.wrapper}>
                <SideInfo/>
                <Board/>
            </div>
        </>
    )
}

export default BoardPage