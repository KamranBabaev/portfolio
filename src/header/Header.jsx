import React from "react";
import styles from './Header.module.css'
import {Navigation} from "../navigation/Navigation";

export function Header() {
    return (
        <div className={styles.header}>
            <Navigation/>
        </div>
    )
}