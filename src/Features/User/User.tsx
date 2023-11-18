import React, { useState } from 'react';
import { RegistrationProps } from 'shared/userInterface';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './user.module.css';

const User: React.FC<RegistrationProps> = ({handleSignOut, user}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.userContainer}>
            <div className={styles.userBlock} onClick={toggleDropdown}>
                <FaUser className={styles.userIcon} />
            </div>
            {isDropdownOpen && (
                <ul className={styles.dropdown}>
                    <li>
                        <Link to="/user-profile" className={styles.dropdownLink}>
                            Profile
                        </Link>
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
