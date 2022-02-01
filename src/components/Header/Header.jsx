import s from './Header.module.css'
import logo from './logo.svg'

const Header = () => {
    return (
        <header className={s.header}>            
            <div className={s.logo}>
                <a href="#">
                    <img src={logo}></img>
                    Duckbook
                </a>              
            </div>
        </header>
    );
}    

export default Header;
