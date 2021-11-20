import styles from './GetAcquaintedContainer.module.scss'
import SignUpButton from "../SignUpButton";
import picture from "../../public/images/programmer.svg";

const GetAcquaintedContainer = ({children}) => {
    return (

        <div className={styles.container}>
            <div className={styles.acquaintanceContainer}>
                <div className="acquaintanceLeft">
                    <img src={picture.src} alt="programmer" />
                </div>
                <div className={styles.acquaintanceRight}>
                    <div className="acquaintanceTitle">
                        <h1>Let's get acquainted</h1>
                    </div>
                    <div className="acquaintanceSubTitle">
                        <h2>I'm a good front-end developer</h2>
                    </div>
                    <div className={styles.acquaintanceContent}>
                        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                    </div>
                    <SignUpButton />
                </div>

            </div>
        </div>

        );
};
export default GetAcquaintedContainer;
