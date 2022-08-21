import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/97621407?v=4" />
                <strong>Sullivan Dcesaris</strong>
                <span>Web Developer</span>

            </div>
            <footer>
                <a href="#">
                    <PencilLine size="20" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}