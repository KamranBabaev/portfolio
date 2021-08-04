import React from "react";
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import html from './html.png'
import js from './js.png'
import typeScript from './typescript.png'
import react from './react.png'
import git from './git.png'
import materialUI from './materialUI.png'

export function Skills() {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h3 className={styles.title}>Мои скиллы:</h3>
        <div className={styles.skills}>
          <Skill title='HTML and CSS'
                 icon={html}/>
          <Skill title='JavaScript'
                 icon={js}/>
          <Skill title='TypeScript'
                 icon={typeScript}/>
          <Skill title='React'
                 icon={react}/>
          <Skill title='GIT'
                 icon={git}/>
          <Skill title='Material UI'
                 icon={materialUI}/>
        </div>
      </div>
    </div>
  )
}