import { InputBase, InputBaseProps } from "@material-ui/core";
import styles from "./styles.module.scss";

interface Props extends InputBaseProps {}

const Field = (props: Props) => {
  return <InputBase {...props} className={styles.field} />;
};

export default Field;
