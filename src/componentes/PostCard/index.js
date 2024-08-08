import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from '../BotaoPrincipal'

const PostCard = ({post}) =>{
    return(
        <div className={styles.post}>
            <img 
                className={styles.capa} 
                src={`/assets/posts/${post.id}/capa.png`} 
                alt='Imagem de capa'/>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Link to={`/Posts/${post.id}`}>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </Link>
        </div>
    )
}

export default PostCard