import logo from "../../assets/logo.svg";
import figure from "../../assets/backgroundFigure.svg";

import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import GlassPanel from "../../components/shared/GlassPanel";
import background from "../../assets/background.svg";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { LoginRoute, MainPageRoute } from "../../routes/routes";
import { useState } from "react";
import { Snackbar } from "@material-ui/core";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isError, setIsError] = useState(false);

  const Register = () => {
    var data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: firstName,
      surname: lastName,
    };
    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    fetch("https://vlpz-backend.herokuapp.com/api/auth/signup", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) throw Error();

        localStorage.setItem("user", data.role);
        window.location.href = MainPageRoute;
      })
      .catch((error) => {
        setIsError(true);
      });
  };

  return (
    <>
      <img src={figure} className={styles.figure} />
      <div className={styles.background} />
      <div className={styles.signUp}>
        <GlassPanel className={styles.signUpBody}>
          <p className={styles.title}>Virtual Laboratory</p>
          <p className={styles.subtitle}>
            Created to learn Software Development Life Cycle.
          </p>
          <p className={styles.editLater}>
            You can edit this in your Personal Profile later.
          </p>

          <div className={styles.signUpForm}>
            <div className={styles.signUpInputs}>
              <FieldGroup
                title="Email*"
                fieldProps={{
                  value: email,
                  onChange: (e) => {
                    setEmail(e.target.value);
                  },
                }}
              />
              <FieldGroup
                title="Password*"
                fieldProps={{
                  value: password,
                  onChange: (e) => {
                    setPassword(e.target.value);
                  },
                }}
              />
              <FieldGroup
                title="Confirm Password*"
                fieldProps={{
                  value: confirmPassword,
                  onChange: (e) => {
                    setConfirmPassword(e.target.value);
                  },
                }}
              />
              <FieldGroup
                title="First Name"
                fieldProps={{
                  value: firstName,
                  onChange: (e) => {
                    setFirstName(e.target.value);
                  },
                }}
              />
              <FieldGroup
                title="Last Name"
                fieldProps={{
                  value: lastName,
                  onChange: (e) => {
                    setLastName(e.target.value);
                  },
                }}
              />
            </div>

            <p className={styles.loginText}>
              Already a member?{" "}
              <Link className={styles.loginLink} to={LoginRoute}>
                Log in
              </Link>
            </p>
            <Button
              buttonstyle="primary"
              className={styles.signUpButton}
              onClick={Register}
            >
              Register
            </Button>
          </div>
        </GlassPanel>

        <img src={logo} className={styles.logo} />
      </div>

      <Snackbar
        open={isError}
        autoHideDuration={2000}
        onClose={() => setIsError(false)}
        message="An error has occured"
      />
    </>
  );
};

export default SignUp;
