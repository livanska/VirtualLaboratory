import penIcon from "../../assets/pen.svg";
import styles from "./styles.module.scss";

import { ReactComponent as UserImage } from "../../assets/profile/user.svg";

interface Props {
  fullName: string;
  role: string;
  email: string;
  onChangeName: () => void;
}

const ProfileInfo = (props: Props) => {
  const { fullName, role, email, onChangeName } = props;

  return (
    <div className={styles.profileInfo}>
      <UserImage onClick={onChangeName} />

      <div className={styles.mainInformation}>
        <div className={styles.nameField}>
          <p className={styles.fullName}>{fullName}</p>
          <img
            className={styles.pen}
            src={penIcon}
            alt="pen"
            onClick={onChangeName}
          />
        </div>

        <p className={styles.role}>{role}</p>

        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
