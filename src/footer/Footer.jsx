import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import icon from './icons.jpg'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <div className={styles.footerContainer}>
                    <h3>Камран Бабаев</h3>
                    <div className={styles.items}>
                        <img src={icon} alt=''/>
                        <img src={icon} alt=''/>
                        <img src={icon} alt=''/>
                        <img src={icon} alt=''/>
                    </div>
                    <div>@2021 Все права защищены</div>
                </div>
            </div>
        </div>
    )
}