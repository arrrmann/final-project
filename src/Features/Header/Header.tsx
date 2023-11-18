import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RegistrationProps } from 'shared/userInterface';
import User from 'Features/User';
import Search from 'Features/Search';
import styles from './header.module.css';
import { FaAngleDown } from 'react-icons/fa';

const Header: React.FC<RegistrationProps> = ({handleSignOut, user}) => {
  const [workspaceDropdownVisible, setWorkspaceDropdownVisible] = useState(false);
  const [latestDropdownVisible, setLatestDropdownVisible] = useState(false);

  const toggleWorkspaceDropdown = () => {
    setWorkspaceDropdownVisible(!workspaceDropdownVisible);
    setLatestDropdownVisible(false);
  };

  const toggleLatestDropdown = () => {
    setLatestDropdownVisible(!latestDropdownVisible);
    setWorkspaceDropdownVisible(false);
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span className={styles.brandName}>
                Manage
                <span className={styles.brandX}><Link to='/board-list-workspace'>X</Link></span>
              </span>
            </li>

            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <span onClick={toggleWorkspaceDropdown}>Workspace <FaAngleDown className={styles.icon}/></span>
              {workspaceDropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li>Current Workspace</li>
                  <li>Last Workspace</li>
                </ul>
              )}
            </li>

            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <span onClick={toggleLatestDropdown}>Latest <FaAngleDown className={styles.icon}/></span>
              {latestDropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li>Current Workspace</li>
                  <li>My Workspace</li>
                </ul>
              )}
            </li>
            
            <li className={styles.navItem}>Templates</li>
            <li><button className={styles.btn}>Create</button></li>
          </ul>
        </nav>
        <div className={styles.searchWrap}>
          <Search/>
          <User handleSignOut={handleSignOut} user={user}/>
        </div>
      </header>
    </>
  )
}

export default Header
