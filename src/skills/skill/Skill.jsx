import React from "react";
import styles from './Skill.module.css'

export function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h4>{props.title}</h4>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}