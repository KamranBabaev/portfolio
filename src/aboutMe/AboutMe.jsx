import styles from './AboutMe.module.css'
import stylesContainer from "../common/styles/Container.module.css";

export const AboutMe = () => {
    return (
        <div className={styles.aboutMeBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <div className={styles.info}>
                    <h3>Не рассматриваю вариант удаленной работы</h3>
                    <button>нанять меня</button>
                </div>
            </div>
        </div>
    )
}