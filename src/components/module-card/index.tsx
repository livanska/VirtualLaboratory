import classNames from "classnames";
import { Link } from "react-router-dom";
import { ModellingRoute } from "../../routes/routes";
import Module from "../../types/module";
import Button from "../shared/Button";
import styles from "./styles.module.scss";

interface Props {
  module: Module;
}

const ModuleCard = (props: Props) => {
  const {
    module: {
      title,
      image,
      levelsAmount,
      passedTaskAmount,
      allTaskAmount,
      disabled,
      description,
    },
  } = props;

  return (
    <div className={styles.moduleCard}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.moduleCardBody}>
        <div className={styles.moduleCardTitle}>
          <p className={styles.title}>{title}</p>

          <div className={styles.moduleInfo}>
            <p>
              <span className={styles.bold}>{levelsAmount}</span> Levels
            </p>
            <p>
              <span className={styles.bold}>{passedTaskAmount}</span>/
              <span className={styles.bold}>{allTaskAmount}</span> Passed
            </p>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <Button
          buttonstyle="secondary"
          disabled={disabled}
          className={classNames(styles.buttonStart, {
            [styles.disabled]: disabled,
          })}
        >
         {title ==='Modelling'? <Link to={ModellingRoute} className={styles.buttonLink} >Start</Link>:'START'}
        </Button>
      </div>
    </div>
  );
};

export default ModuleCard;
