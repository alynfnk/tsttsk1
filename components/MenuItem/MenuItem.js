import Link from "next/link";
import styles from './MenuItem.module.scss'

export default function MenuItem({text, href}){
    return(
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}