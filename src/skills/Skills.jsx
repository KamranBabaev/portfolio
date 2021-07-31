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
                 icon={html}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
          <Skill title='JavaScript'
                 icon={js}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
          <Skill title='TypeScript'
                 icon={typeScript}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
          <Skill title='React'
                 icon={react}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
          <Skill title='GIT'
                 icon={git}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
          <Skill title='Material UI'
                 icon={materialUI}
                 description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
        </div>
      </div>
    </div>
  )
}