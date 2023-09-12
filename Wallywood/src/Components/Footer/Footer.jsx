import style from './Footer.module.scss'
// import { SocialMedia } from '../../Assets/Svgs/FaceBook'
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

                    {/* Facebook */} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 4c0-1 .5-1 1-1h.6a.75.75 0 0 0 .76-.76V1.3a.76.76 0 0 0-.77-.76L8.17.52a2.86 2.86 0 0 0-2.95 3.2v1.45h-.79a.76.76 0 0 0-.76.76v.94a.76.76 0 0 0 .76.76h.79V13a.5.5 0 0 0 .5.5h1.81A.5.5 0 0 0 8 13V7.63h.88a.76.76 0 0 0 .76-.76v-.94a.76.76 0 0 0-.76-.76H8Z"></path></svg>
                    {/* Linkedin */}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.54 1.71a1.33 1.33 0 0 1-1.3 1.34A1.36 1.36 0 0 1 .93 1.71A1.34 1.34 0 0 1 2.24.43a1.33 1.33 0 0 1 1.3 1.28ZM1.07 5.43c0-.77.49-.65 1.17-.65s1.16-.12 1.16.65v7.5c0 .78-.49.62-1.16.62s-1.17.16-1.17-.62Zm4.35 0c0-.43.16-.59.41-.64s1.11 0 1.41 0s.42.49.41.86a2.51 2.51 0 0 1 2.24-1a3 3 0 0 1 3.18 3.13v5.12c0 .78-.48.62-1.16.62s-1.16.16-1.16-.62v-4a1.44 1.44 0 0 0-1.52-1.56a1.45 1.45 0 0 0-1.48 1.59v4c0 .78-.49.62-1.17.62s-1.16.16-1.16-.62Z"></path></svg>
                    {/* Pinterest */}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M8 14.5c-3-4.5 1.462-8 4.5-8c3.038 0 5.5 1.654 5.5 5.5c0 3.038-2 5-4 5s-3-2-2.5-5m.5-2L9 21.5"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path></g></svg>
                    {/* Twitter */}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9.4a6.77 6.77 0 0 1-2.41 1.21a.5.5 0 0 0 0 .94C8.51 14.39 12.91 10 12.24 5.13l1.12-2.32h-1.3C10.44.82 6.14.92 6.85 5.16c0 0-2.3.41-5.24-2.48A.5.5 0 0 0 .76 3A5.52 5.52 0 0 0 4 9.4Z"></path></svg>
                </aside>
        </footer>
    )
}