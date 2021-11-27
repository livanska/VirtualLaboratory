import { ButtonBase, ButtonProps } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonProps {
  buttonstyle: "primary" | "secondary";
}

const Button = (props: Props) => {
  const { children, buttonstyle, className, ...rest } = props;

  return (
    <ButtonBase
      {...rest}
      className={classNames(
        styles.button,
        buttonstyle === "primary" ? styles.primary : styles.secondary,
        className
      )}
    >
      {children}
    </ButtonBase>
  );
};
export default Button;
