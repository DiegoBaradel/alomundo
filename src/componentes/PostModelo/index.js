import styles from './PostModelo.module.css'

const PostModelo = ({fotoCapa, titulo, children})=>{
    return(
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa}style={{background:`url(${fotoCapa})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}

export default PostModelo