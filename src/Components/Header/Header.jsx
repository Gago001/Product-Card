import React from 'react';
import styles from './Header.module.css';

export default function Header({ setSelectedCategory }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.rowHeader}>
        <ul>
          <li onClick={() => setSelectedCategory('All')}>All</li>
          <li onClick={() => setSelectedCategory('Apple')}>Apple</li>
          <li onClick={() => setSelectedCategory('Banana')}>Banana</li>
          <li onClick={() => setSelectedCategory('Strawberry')}>Strawberry</li>
        </ul>
      </div>
    </div>
  );
}
