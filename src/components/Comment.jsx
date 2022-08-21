import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/sullivandcesaris.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sullivan Dcesaris</strong>
                            <time title="11 de Maio às 16:32h" dataTime="2022-05-11 16:32:12">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}