import styles from './BotaoPrincipal.module.css'

const BotaoPrincipal = ({children, estilo}) =>{
    return(
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[estilo]}
        `}>
           {children}
        </button>
    )
}

export default BotaoPrincipal