import React from "react";
import styles from './Skill.module.css'

export function Skill(props) {
  return (
    <div className={styles.skill}>
      <img src={props.icon} className={styles.icon} alt=''/>
      <h4>{props.title}</h4>
    </div>
  )
}