import styles from './WorkItem.module.css'
import backIMG from './backIMG.jpg'

export const WorkItem = (props) => {
    return (
        <div className={styles.workItem}>

            <div className={styles.container}>
                <img src={backIMG} alt=''/>
                <button className={styles.btn}>смотреть</button>
            </div>

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}