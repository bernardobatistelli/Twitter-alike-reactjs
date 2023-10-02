import styles from './Header.module.css'
import tombaLogo from '../assets/tomba-logo.svg'

export function Header(){
    return (
        <header className={styles.header}> 
        <img src={tombaLogo} alt="Logotipo do tomba" />
        <strong>Tombattwitter</strong>
        </header>
    )
}