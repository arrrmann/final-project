import React, { useState, useEffect, useRef } from 'react';
import { RegistrationProps } from 'shared/userInterface';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './user.module.css';

const User: React.FC<RegistrationProps> = ({ handleSignOut, user }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const userRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeUserDropdown = (event: MouseEvent) => {
        if (userRef.current && !userRef.current.contains(event.target as Node)) {
            setDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeUserDropdown);

        return () => {
            document.removeEventListener('click', closeUserDropdown);
        };
    }, [])

    return (
        <div className={styles.userContainer} ref={userRef}>
            <div className={styles.userBlock} onClick={toggleDropdown} >
                <FaUser className={styles.userIcon} />
            </div>
            {isDropdownOpen && (
                <ul className={styles.dropdown}>
                    <li>
                        <button className={styles.toProfilePage}>
                            <Link to="/user-profile">
                                Profile
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={styles.logoutButton}><Link to='/'>Log out</Link></button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default User;
