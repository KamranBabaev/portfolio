import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import photo from './photo.jpg'

export function Main() {
    return (
        <div className={styles.main}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <h3>Привет!</h3>
                    <h3>Меня зовут Камран Бабаев.</h3>
                    <p>Я Frontend-разработчик!</p>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt=''/>
                </div>
            </div>
        </div>
    )
}