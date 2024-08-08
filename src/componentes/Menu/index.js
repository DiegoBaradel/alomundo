import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

const Menu = ()=>{
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink rota='/'>
                    Início
                </MenuLink>
                <MenuLink rota='/SobreMim'>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu