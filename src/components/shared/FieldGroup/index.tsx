import { InputBaseProps } from "@material-ui/core";
import Field from "../Field";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  fieldProps?: InputBaseProps;
}

const FieldGroup = (props: Props) => {
  const { title, fieldProps } = props;

  return (
    <div className={styles.fieldGroup}>
      <p className={styles.title}>{title}</p>
      <Field {...fieldProps} />
    </div>
  );
};

export default FieldGroup;
