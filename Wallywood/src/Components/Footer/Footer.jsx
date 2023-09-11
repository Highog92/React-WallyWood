import style from './Footer.module.scss'
import { SocialMedia } from '../../Assets/Svgs/FaceBook'
// import Twitter from '../../Assets/Svgs/Twitter'


export const Footer = () => {

    return (
        <footer className={style.footerStyle}>
            <article>
                <h2>WALLYWOOD</h2>
                <p>Øster Uttrupvej 1</p>
                <p>9000 Aalborg</p>
            </article>
            <article>
                <p>
                    CVR: 12345678
                </p>
                <p>MAIL: Info@plakatshoppen</p>
                <p>MOBIL:+45 9812 3456</p>
            </article>
            <aside>
                <SocialMedia />
            </aside>
        </footer>
    )
}