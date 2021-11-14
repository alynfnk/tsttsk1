import A from "../components/A";
import MyDocument from "../pages/_document";
import logoImg from "../public/images/logo.png";
import styles from '../styles/MainContainer.module.scss'

const MainContainer = ({children}) => {
    return (
        <>
        <MyDocument />
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className="navbar-left">
                        <div className="header-logo">
                            <img src={logoImg.src} alt="logo" />
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="navbar">
                            <A href={'/'} text={'About Me'}/>
                            <A href={'/'} text={'Relationships'}/>
                            <A href={'/'} text={'Requirements'}/>
                            <A href={'/'} text={'Users'}/>
                            <A href={'/'} text={'Sign Up'}/>
                        </div>
                    </div>        
                </div>
            </div>
            <div>{children}</div>   
            
        </>    
    );
};
export default MainContainer;