import styles from './WorkItem.module.css'

export const WorkItem = (props) => {
    return (
        <div className={styles.workItem}>

            <div className={styles.container}>
                <img src={props.backIMG} alt=''/>
                <button className={styles.btn}>смотреть</button>
            </div>

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}