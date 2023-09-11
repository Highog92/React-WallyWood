import style from './Navigation.module.scss'
import { Link } from 'react-router-dom';


export const Navigation = () => {

    return (
        <nav className={style.navStyle}>
            <div>
                <Link to="/">HOME</Link>
                <Link to="/posters">PLAKATER</Link>
                <Link to="/about">OM OS</Link>
                <Link to="/contact">KONTAKT</Link>
                <Link to="/login">LOGIN</Link>

            </div>
        </nav>
    )
}