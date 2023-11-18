import React from 'react'
import Header from 'Features/Header/index.'
import { RegistrationProps } from 'shared/userInterface'
import styles from './board-list-page.module.css'
import SideInfo from 'Features/SideInfo'
import BoardInfo from 'Features/BoardInfo'

const BoardListPage: React.FC<RegistrationProps> = ({handleSignOut, user}) => {
    return (
        <>
            <Header handleSignOut={handleSignOut} user={user}/>
            <div className={styles.wrapper}>
                <SideInfo/>
                <BoardInfo/>
            </div>
        </>
    )
}


export default BoardListPage