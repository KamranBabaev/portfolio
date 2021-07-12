import styles from './Works.module.css'
import {WorkItem} from "./WorkItem/WorkItem";
import stylesContainer from "../common/styles/Container.module.css";

export const Works = (props) => {
    return (
        <div className={styles.worksBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <div className={styles.title}>Мои работы:</div>
                <div className={styles.work}>
                    <WorkItem title='FRND'
                              description='социальная сеть для общения и поиска друзей'
                    />
                    <WorkItem title='CAPSULA'
                              description='интернет-магазин лучших гаджетов'
                    />
                </div>
            </div>
        </div>
    )
}