import Button from "react-bootstrap/Button";
import styles from '../styles/SignUpButton.module.scss'

export default function SignUpButton(){
    return(
        <Button className={styles.signUpBtn} block size="lg" type="submit">
            Sign Up
        </Button>
    )
}