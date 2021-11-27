import logo from "../../assets/logo.svg";
import figure from "../../assets/backgroundFigure.svg";

import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import GlassPanel from "../../components/shared/GlassPanel";

import styles from "./styles.module.scss";

const SignIn = () => {
  return (
    <>
      <img src={figure} className={styles.figure} />

      <div className={styles.signIn}>
        <GlassPanel className={styles.signInBody}>
          <p className={styles.title}>Virtual Laboratory</p>
          <p className={styles.subtitle}>
            Created to learn Software Development Life Cycle.
          </p>

          <div className={styles.signInForm}>
            <div className={styles.signInInputs}>
              <FieldGroup title="Email" />
              <FieldGroup title="Password" />
            </div>

            <p className={styles.registerText}>
              Don’t have an account yet?{" "}
              <a className={styles.registerLink} href="#">
                Register now
              </a>
            </p>

            <Button buttonstyle="primary" className={styles.signInButton}>
              Log In
            </Button>
          </div>
        </GlassPanel>

        <img src={logo} className={styles.logo} />
      </div>
    </>
  );
};

export default SignIn;
