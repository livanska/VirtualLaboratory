import logo from "../../assets/logo.svg";
import figure from "../../assets/backgroundFigure.svg";

import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import GlassPanel from "../../components/shared/GlassPanel";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { MainPageRoute, RegisterRoute } from "../../routes/routes";
import { useState } from "react";
import { Snackbar } from "@material-ui/core";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const logIn = () => {
    var data = {
      email: email,
      password: password,
    };
    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    fetch("https://vlpz-backend.herokuapp.com/api/auth/signin", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (!data.email) throw Error();

        localStorage.setItem("user", data.role);
        window.location.href = MainPageRoute;
      })
      .catch((error) => {
        setPassword("");
        setIsError(true);
      });
  };

  return (
    <>
      <img src={figure} className={styles.figure} />
      <div className={styles.background} />
      <div className={styles.signIn}>
        <GlassPanel className={styles.signInBody}>
          <p className={styles.title}>Virtual Laboratory</p>
          <p className={styles.subtitle}>
            Created to learn Software Development Life Cycle.
          </p>

          <div className={styles.signInForm}>
            <div className={styles.signInInputs}>
              <FieldGroup
                title="Email"
                fieldProps={{
                  value: email,
                  onChange: (e) => {
                    setEmail(e.target.value);
                  },
                }}
              />
              <FieldGroup
                title="Password"
                fieldProps={{
                  value: password,
                  onChange: (e) => {
                    setPassword(e.target.value);
                  },
                  type: "password",
                }}
              />
            </div>

            <p className={styles.registerText}>
              Don’t have an account yet?{" "}
              <Link className={styles.registerLink} to={RegisterRoute}>
                Register now
              </Link>
            </p>
            <Button
              buttonstyle="primary"
              className={styles.signInButton}
              onClick={logIn}
            >
              Log In
            </Button>
          </div>
        </GlassPanel>

        <img src={logo} className={styles.logo} />
      </div>

      <Snackbar
        open={isError}
        autoHideDuration={2000}
        onClose={() => setIsError(false)}
        message="Incorrect input data"
      />
    </>
  );
};

export default SignIn;
