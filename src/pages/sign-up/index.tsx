import logo from "../../assets/logo.svg";
import figure from "../../assets/backgroundFigure.svg";

import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import GlassPanel from "../../components/shared/GlassPanel";

import styles from "./styles.module.scss";

const SignUp = () => {
  return (
    <>
      <img src={figure} className={styles.figure} />

      <div className={styles.signUp}>
        <GlassPanel className={styles.signUpBody}>
          <p className={styles.title}>Virtual Laboratory</p>
          <p className={styles.subtitle}>
            Created to learn Software Development Life Cycle.
          </p>
          <p className={styles.editLater}>
            You can edit this in your Persona Profile later.
          </p>

          <div className={styles.signUpForm}>
            <div className={styles.signUpInputs}>
              <FieldGroup title="Email*" />
              <FieldGroup title="Password*" />
              <FieldGroup title="Confirm Password*" />
              <FieldGroup title="First Name" />
              <FieldGroup title="Last Name" />
            </div>

            <p className={styles.loginText}>
              Already a member?{" "}
              <a className={styles.loginLink} href="#">
                Login
              </a>
            </p>

            <Button buttonstyle="primary" className={styles.signUpButton}>
              Register
            </Button>
          </div>
        </GlassPanel>

        <img src={logo} className={styles.logo} />
      </div>
    </>
  );
};

export default SignUp;
