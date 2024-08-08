import { NavLink} from 'react-router-dom'
import styles from './MenuLink.module.css'

const MenuLink = ({children, rota})=>{

    return(
        <NavLink to={rota} className={({isActive})=>`
            ${styles.link} 
            ${isActive ? styles.link_destacado : ''}
        `}>
            {children}
        </NavLink>
    )
}

export default MenuLink