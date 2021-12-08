import ProfileInfo from "../../components/profile-info";
import ProfileTaskCard from "../../components/profile-task-card";
import GlassPanel from "../../components/shared/GlassPanel";
import styles from "./styles.module.scss";


const MockData = [
    {
        passed: false,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
    {
        passed: false,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
    {
        passed: true,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
    {
        passed: false,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
    {
        passed: true,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
    {
        passed: true,
        level: 'Proficient 4',
        task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        mark: 35.7,
        attemps: 3,
        timeSpent: 26
    },
]

const StudentProfile = () => {
    return (<>
        <div className={styles.background} />
        <div>
            <GlassPanel className={styles.panel} >
                <div className={styles.content}>
                    <div  className={styles.profile}>
                    <ProfileInfo
                        fullName="Ivan Ivanov"
                        role="Student"
                        email="oleh@gmail.com"
                        onChangeName={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                      </div>
                    {MockData.map((card) => <ProfileTaskCard {...card} />)}
                </div>
            </GlassPanel>
        </div>
    </>
    );
};

export default StudentProfile;