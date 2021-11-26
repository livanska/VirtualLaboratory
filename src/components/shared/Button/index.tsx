import { ButtonBase, ButtonProps } from "@material-ui/core";
import React from "react";
import styles from './styles.module.scss'

interface Props extends ButtonProps {
    buttonstyle: 'primary' | 'secondary'
}

const Button = (props: Props) => {
    return (
        <ButtonBase {...props} className={`${styles.button} ${props.buttonstyle === 'primary' ? styles.primary : styles.secondary}`} />
    )

}
export default Button;