

export const Navigation = () => {
 
    // Eksempel der viser Mount / unmount logik
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        <nav className={style.navStyle}>
            <div>
                <Link to="/">HOME</Link>
                <Link to="/Posters">Plakater</Link>
                <Link to="/About">OM OS</Link>
                <Link to="/Contact">Kontakt</Link>
                <Link to="/Login">Login</Link>

            </div>
        </nav>
    )
}