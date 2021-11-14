import styles from '../styles/SecondContainer.module.scss'
import SignUpButton from "../components/SignUpButton";


const SecondContainer = ({children}) => {
    return (
        <div className={styles.frontendContainer}>
            <div className={styles.container}>
                <div className={styles.frontendContent}>
                    <div className={styles.frontendTitle}>
                        <h1>Test assignment for front-end developers</h1>
                    </div>
                    <div className={styles.frontendText}>
                        <p>Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.</p>
                    </div>
                    <SignUpButton />
                    
                </div>
            </div>
        </div>
    );
};
export default SecondContainer;