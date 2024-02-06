import React from 'react';
import styles from './card.module.css';
import { CardProps } from '../Card.props';



const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className={styles.Card}>
            {children}
        </div>
    );
};

export default Card;
