import { useEffect, useState } from "react";
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
    
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    // const getStudentInfo= async ()=>{
    //     var headers = {
    //         "Content-Type": "application/json",
    //         'Access-Control-Allow-Origin': '*',
    //       }
    //       console.log(headers)
    //       fetch('https://vlpz-backend.herokuapp.com/api/account', { method:'GET', headers: headers,})
    //         .then((response) => {
    //           return response.json();
    //         })
    //         .then((data) => {
    //             setEmail(data.email)
    //             setFirstName(data.name)
    //             setLastName(data.surname)
    //         });
    // }
   //
    return (<>
        <div className={styles.background} />
        <div>
            <GlassPanel className={styles.panel} >
                <div className={styles.content}>
                    <div  className={styles.profile}>
                    <ProfileInfo
                        fullName={`${firstName} ${lastName}`}
                        role="Student"
                        email={`${email}`}
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