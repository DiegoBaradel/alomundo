import styles from './Erro404.module.css'
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from '../BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

const Erro404 = ()=>{
    const navegar = useNavigate()
    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paraggrafo}>Tem certeza de que era isso que você estava procurando? </p>
                <p className={styles.paraggrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div 
                    className={styles.botaoContainer}
                    onClick={()=>{navegar(-1)}}
                >
                    <BotaoPrincipal estilo='lg'>Voltar</BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='imagem de um cachorro usando roupas de humano'
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        <h1>Página não encontrada</h1>
        </>
    )
}

export default Erro404