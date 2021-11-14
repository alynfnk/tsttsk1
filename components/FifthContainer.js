import styles from '../styles/ThirdContainer.module.scss'
import SignUpButton from "../components/SignUpButton";
import { useState } from 'react';
import Input from "../utils/input/Input";

const FifthContainer = ({children}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (       
        
        <div className={styles.container}>
            <div className={styles.registerTitle}>
                <h1>Register to get a work</h1>
            </div>
            <div className={styles.registerSubTitle}>
                <h2>Your personal data is stored according to the Privacy Policy</h2>
            </div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
        </div>
        
    );
};
export default FifthContainer;
