import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaQuestion } from 'react-icons/fa';
import styles from './search.module.css';

const Search: React.FC = () => {
    const [isQuestion, setIsQuestion] = useState(false);

    const toggleExpand = () => {
        setIsQuestion(true);
        setTimeout(() => {
            setIsQuestion(false);
        }, 3000);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
            />
            <FaSearch className={styles.searchIcon} />
            <div className={styles.questionContainer}>
                <button className={styles.questionBtn}>
                    <FaQuestion className={styles.questionIcon} onClick={toggleExpand} />
                </button>
                {isQuestion && (
                    <div className={styles.dropdown}>
                    For questions, please <Link to='./questions-FAQ'>read</Link> FAQ's
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;

