import React from "react";
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h3 className={styles.title}>Мои скиллы:</h3>
                <div className={styles.skills}>
                    <Skill title='HTML and CSS' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                    <Skill title='JavaScript' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                    <Skill title='TypeScript' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                    <Skill title='React' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                    <Skill title='GIT' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                    <Skill title='Material UI' description='Блок с текстом. Здесь будет краткое описание моих скиллов'/>
                </div>
            </div>
        </div>
    )
}