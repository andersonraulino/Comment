import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

import { PencilSimpleLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"  
            />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/andersonraulino.png" alt="Foto avatar" />

                <strong>Anderson Raulino</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}