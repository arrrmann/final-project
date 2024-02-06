import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { RegistrationProps } from 'shared/userInterface';
import User from 'Features/User';
import Search from 'Features/Search';
import styles from './header.module.css';
import { FaAngleDown } from 'react-icons/fa';

const Header: React.FC<RegistrationProps> = ({handleSignOut, user}) => {
  const [workspaceDropdownVisible, setWorkspaceDropdownVisible] = useState(false);
  const [latestDropdownVisible, setLatestDropdownVisible] = useState(false);
  const [templateVisable, setTemplateVisable]=useState(false)
  const workspaceDropdownRef = useRef<HTMLLIElement>(null);
  const latestDropdownRef = useRef<HTMLLIElement>(null);
  const TemplateRef=useRef<HTMLLIElement>(null)
  
  const toggleTemplateDD=()=>{
    setTemplateVisable(!templateVisable)
    setLatestDropdownVisible(false)
    setWorkspaceDropdownVisible(false)
  }

  const toggleWorkspaceDropdown = () => {
    setWorkspaceDropdownVisible(!workspaceDropdownVisible)
    setLatestDropdownVisible(false)
    setTemplateVisable(false)
  };

  const toggleLatestDropdown = () => {
    setLatestDropdownVisible(!latestDropdownVisible)
    setWorkspaceDropdownVisible(false)
    setTemplateVisable(false)
  }

  const closeWorkspaceDropdown = (event: MouseEvent) => {
    if (workspaceDropdownRef.current && !workspaceDropdownRef.current.contains(event.target as Node)) {
      setWorkspaceDropdownVisible(false)
    }
  }

  const closeLatestDropdown = (event: MouseEvent) => {
    if (latestDropdownRef.current && !latestDropdownRef.current.contains(event.target as Node)) {
      setLatestDropdownVisible(false)
    }
  }

  const closeTemplateDD=(event: MouseEvent) => {
    if (TemplateRef.current && !TemplateRef.current.contains(event.target as Node)) {
      setTemplateVisable(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeWorkspaceDropdown);
    document.addEventListener('click', closeLatestDropdown);
    document.addEventListener('click', closeTemplateDD);

    return () => {
      document.removeEventListener('click', closeWorkspaceDropdown);
      document.removeEventListener('click', closeLatestDropdown);
      document.removeEventListener('click', closeTemplateDD);
    };
  }, [])

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

            <li className={`${styles.navItem} ${styles.dropdown}`} ref={workspaceDropdownRef}>
              <div className={styles.navItemWrapper} onClick={toggleWorkspaceDropdown}>
                <span>Workspace</span>
                <div><FaAngleDown className={styles.icon}/></div>
              </div>
              {workspaceDropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li><button className={styles.LIbtn}><Link to='/board-list-workspace'>Current Workspace</Link></button></li>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>Last Workspace</Link></button></li>
                </ul>
              )}
            </li>

            <li className={`${styles.navItem} ${styles.dropdown}`} ref={latestDropdownRef}>
              <div onClick={toggleLatestDropdown} className={styles.navItemWrapper}>
                <span >Latest</span>
                <div> <FaAngleDown className={styles.icon}/></div>
              </div>
              {latestDropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li><button className={styles.LIbtn}><Link to='/board-list-workspace'>Current Workspace</Link></button></li>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>My Workspace</Link></button></li>
                </ul>
              )}
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`} ref={TemplateRef}>
              <div onClick={toggleTemplateDD} className={styles.navItemWrapper}>
                <span >Popular templates</span>
                <div> <FaAngleDown className={styles.icon}/></div>
              </div>
              {templateVisable && (
                <ul className={styles.dropdownMenu}>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>Halloween mood</Link></button></li>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>Deep focus </Link></button></li>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>Flight </Link></button></li>
                  <li><button className={styles.LIbtn}><Link to='/board-page'>Chocolate </Link></button></li>
                </ul>
              )}
            </li>
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
