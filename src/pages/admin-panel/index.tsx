import AdminTaskCard from "../../components/admin-task-card";
import ProfileInfo from "../../components/profile-info";
import Button from "../../components/shared/Button";
import FieldGroup from "../../components/shared/FieldGroup";
import GlassPanel from "../../components/shared/GlassPanel";
import styles from "./styles.module.scss";

const AdminPanel = () => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.adminPanel}>
        <GlassPanel className={styles.panel}>
          <div className={styles.content}>
            <div className={styles.left}>
              <ProfileInfo
                fullName="Admin"
                role="Admin"
                email="admin@lpnu.ua"
                onChangeName={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />

              <div className={styles.form}>
                <FieldGroup title="Module" />

                <FieldGroup title="Level" />

                <FieldGroup
                  title="Task"
                  fieldProps={{ multiline: true, rows: 5 }}
                />

                <div className={styles.buttons}>
                  <Button buttonstyle="secondary">Add Answer</Button>
                  <Button buttonstyle="primary">Save</Button>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <AdminTaskCard
                title={"wadawwajhdawuhdwauihdwaiudhiawdhauidawhaiidawuhiawdiawhdiawddwadaw"}
                description={"dwaadiawhdiuawhawdiuwahiudwahdiwuhdiuwahdiawuhdiawuhdwaihdaaaaaaaaaaaaawfawfawfdwadwa"}
                maxAttempts={10}
                maxTime={50}
                onChangeAnswer={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onEdit={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />

              <AdminTaskCard
                title={"wadawdwadaw"}
                description={"dwaaaaaaaaaaaaaaawfawfawfdwadwa"}
                maxAttempts={10}
                maxTime={50}
                onChangeAnswer={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onEdit={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />

              <AdminTaskCard
                title={"wadawdwadaw"}
                description={"dwaaaaaaaaaaaaaaawfawfawfdwadwa"}
                maxAttempts={10}
                maxTime={50}
                onChangeAnswer={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onEdit={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />

              <AdminTaskCard
                title={"wadawdwadaw"}
                description={"dwaaaaaaaaaaaaaaawfawfawfdwadwa"}
                maxAttempts={10}
                maxTime={50}
                onChangeAnswer={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onEdit={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
        </GlassPanel>
      </div>
    </>
  );
};

export default AdminPanel;
