import Button from "../shared/Button";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
  maxAttempts: number;
  maxTime: number;
  onChangeAnswer: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const AdminTaskCard = (props: Props) => {
  const {
    title,
    description,
    maxAttempts,
    maxTime,
    onChangeAnswer,
    onEdit,
    onDelete,
  } = props;

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>

      <p className={styles.description}>{description}</p>

      <div className={styles.mainBlock}>
        <div className={styles.buttons}>
          <Button buttonstyle="secondary" onClick={onEdit}>
            Edit
          </Button>
          <Button buttonstyle="secondary" onClick={onChangeAnswer}>
            Change answer
          </Button>
        </div>

        <div className={styles.info}>
          <p>
            <span className={styles.bold}>Max attempts: </span>
            {maxAttempts}
          </p>
          <p>
            <span className={styles.bold}>Max time: </span>
            {maxTime}s
          </p>
        </div>

        <div className={styles.delete} onClick={onDelete}>
          Delete X
        </div>
      </div>
    </div>
  );
};

export default AdminTaskCard;
