import styles from "./styles.module.scss";
import Button from "../shared/Button";
interface ICardProps {

    passed: boolean,
    level: string,
    task: string,
    mark: number,
    attemps: number,
    timeSpent: number

}

const ProfileTaskCard = (props: ICardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.statusRow}>
                <div className={props.passed ? styles.colorGreen : styles.colorRed} />
                <span className={styles.status}>{'Status: '}<b>{props.passed ? 'Passed' : 'Failed'}</b></span>
            </div>
            <p className={styles.task}>{props.task}</p>
            <div className={styles.bottomRow}>
                <div className={styles.buttons}>
                    <Button buttonstyle='secondary'>REDO</Button>
                    <Button buttonstyle='secondary'>VIEW ANSWER</Button>
                </div>
                <div className={styles.info}>
                   <p>{`Mark: ${props.mark}% Correct.`}</p>
                   <p>{`Attemps: ${props.attemps}.`}</p>
                   <p>{`Time spent: ${props.timeSpent}m.`}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileTaskCard