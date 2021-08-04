import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <input type="checkbox" className={styles.checkMenu} id='checkMenu'/>
        <label htmlFor='checkMenu'>меню</label>
        <div className={styles.burgerLine + ' ' + styles.first}></div>
        <div className={styles.burgerLine + ' ' + styles.sec}></div>
        <div className={styles.burgerLine + ' ' + styles.three}></div>
        <div className={styles.burgerLine + ' ' + styles.four}></div>
        <nav className={styles.mainMenu}>
          <a href="#">главная</a>
          <a href="#">скиллы</a>
          <a href="#">проекты</a>
          <a href="#">контакты</a>
        </nav>
      </div>
    </div>
  )
}