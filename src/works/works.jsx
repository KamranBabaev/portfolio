import styles from './Works.module.css';
import {WorkItem} from "./WorkItem/WorkItem";
import stylesContainer from "../common/styles/Container.module.css";
import frnd from './frnd.png';
import caps from './caps.png';

export const Works = () => {
  return (
    <div className={styles.worksBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <div className={styles.title}>Мои работы:</div>
        <div className={styles.work}>
          <WorkItem title='FRND'
                    backIMG={frnd}
                    description='социальная сеть для общения и поиска друзей'
          />
          <WorkItem title='CAPSULA'
                    backIMG={caps}
                    description='интернет-магазин гаджетов'
          />
        </div>
      </div>
    </div>
  )
}