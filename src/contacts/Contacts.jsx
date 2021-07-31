import styles from './Contacts.module.css'
import stylesContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <div className={styles.item}>
                    <h3>Контакты</h3>
                    <form className={styles.form}>
                        <input value={'+7 (555) 444-33-22'}/>
                        <input value={'babaev.camran@yandex.ru'}/>
                        <textarea placeholder='что-нибудь написать...'/>
                    </form>
                        <button type={'submit'}>отправить</button>
                </div>
            </div>
        </div>
    )
}