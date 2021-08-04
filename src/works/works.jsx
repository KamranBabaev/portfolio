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
                    description='Социальная сеть с возможностью добавления постов, подписки, логинизации.
                    Использовался стек: TypeScript, React, Redux, Redux Thunk и Form, Axios и др'
          />
          <WorkItem title='CAPSULA'
                    backIMG={caps}
                    description='Интернет-магазин гаджетов, с возможностью добавления товаров в корзину, расчетом стоимости, добавлением товаров в избранное.
                    Использовался читый React, хуки, для запросов Axios.'
          />
        </div>
      </div>
    </div>
  )
}