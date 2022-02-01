import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Профиль</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Сообщения</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>Новости</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Музыка</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Настройки</NavLink>
                </li>                
            </ul>       
        </nav>
    );
}

export default Navbar;