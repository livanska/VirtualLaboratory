import ProfileInfo from "../../components/profile-info";
import GlassPanel from "../../components/shared/GlassPanel";
import styles from "./styles.module.scss";

const AdminPanel = () => {
  return (
    <div className={styles.adminPanel}>
      <GlassPanel className={styles.panel}>
        <ProfileInfo
          fullName="Ivan Ivanov"
          role="Student"
          email="oleh@gmail.com"
          onChangeName={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </GlassPanel>
    </div>
  );
};

export default AdminPanel;
