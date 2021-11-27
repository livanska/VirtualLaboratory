import classNames from "classnames";
import { AppBarProps } from "material-ui";
import styles from "./styles.module.scss";

interface Props
  extends AppBarProps {
  children?: React.ReactNode;
}