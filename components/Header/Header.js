import MenuItem from "../MenuItem/MenuItem";
// import MyDocument from "../pages/_document";
import logoImg from "../../public/images/logo.png";
import styles from './Haeder.module.scss'
import Head from 'next/head';

const Haeder = ({children}) => {
    return (
        <>
        <Head>
                <meta keywords="testtask, abzagency, frontend"></meta>
                <title>TestTask</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
            </Head>
            <header>
                <div className={styles.container}>
                    <nav className={styles.navbar}>
                        <div className="navbar-left">
                            <div className="header-logo">
                                <img src={logoImg.src} alt="logo" />
                            </div>
                        </div>
                        <div className="uk-navbar-right">
                            <div className={styles.menu}>
                                <MenuItem href='#ourUsers' text={'About Me'}/>
                                <MenuItem href={'/'} text={'Relationships'}/>
                                <MenuItem href={'/'} text={'Requirements'}/>
                                <MenuItem href='#ourUsers' text={'Users'}/>
                                <MenuItem href='#register' text={'Sign Up'}/>
                            </div>
                            {/* <div className={styles.burgerBtn}>
                                <span />
                            </div> */}
                        </div>        
                    </nav>
                </div>
            </header>
            <div>{children}</div>   
            
        </>    
    );
};
export default Haeder;