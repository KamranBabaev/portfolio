import React from "react";
import styles from './Skill.module.css'

export function Skill(props) {
  return (
    <div className={styles.skill}>
      <img src={props.icon} className={styles.icon} alt=''/>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}