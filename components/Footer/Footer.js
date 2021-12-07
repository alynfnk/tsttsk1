import footprint from "../../public/images/footprint.png";
import logoAbz from "../../public/images/logo-abz-agency.png"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer>
            <div className={styles.footprint}>
                <img src={footprint.src} alt="footprint" />
            </div>
            <div className={styles.abzText}>
                <p>© abz.agency specially for the test task</p>
            </div>
        </footer>
    )};
export default Footer;