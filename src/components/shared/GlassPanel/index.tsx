import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

const GlassPanel = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={classNames(styles.glassPanel, className)} {...rest}>
      {children}
    </div>
  );
};

export default GlassPanel;
