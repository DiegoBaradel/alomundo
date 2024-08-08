import styles from './RodaPe.module.css'
import {ReactComponent as MarcaRegistrada} from '../../assets/marca_registrada.svg'

const RodaPe = () =>{
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            <p>Desemvolvido por Alura</p>
        </footer>
    )
}

export default RodaPe