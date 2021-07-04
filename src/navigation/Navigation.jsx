import React from "react";
import styles from './Navigation.module.css'

export function Navigation() {
    return (
        <div className={styles.navigation}>
            <a href=''>главная</a>
            <a href=''>скиллы</a>
            <a href=''>проекты</a>
            <a href=''>контакты</a>
        </div>
    )
}