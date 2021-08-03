import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import inst from './instagram.png'
import link from './linkedin.png'
import git from './github.png'

export const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <div className={styles.footerContainer}>
          <h3>Камран Бабаев</h3>
          <div className={styles.items}>
            <a href='https://www.instagram.com/?hl=ru' target='blank'>
              <img src={inst} alt=''/>
            </a>
            <a href='https://github.com/KamranBabaev' target='blank'>
              <img src={git} alt=''/>
            </a>
            <a href='https://www.linkedin.com/feed/' target='blank'>
              <img src={link} alt=''/>
            </a>
          </div>
          <div>@2021 Все права защищены</div>
        </div>
      </div>
    </div>
  )
}