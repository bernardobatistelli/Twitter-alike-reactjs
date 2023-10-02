import styles from './Sidebar.module.css'
import foto from '../assets/avatar.jpg'
import cover from '../assets/cover.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src={cover} alt="" />
            <div className={styles.profile}>
                <Avatar src= {foto} />
                <strong>Bernardo Batistelli</strong>
                <span>Atacante</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}