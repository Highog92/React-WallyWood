
export const Login = () => {



    // "username": "jtreleven5",
    // "password": "zY1nE46Zm",

    return (
        <>
            <h3>Velkommen</h3>
            <button>Log ud</button>
            <form>
                <label>Brugernavn
                    <input name="username"></input>
                </label>
                <label htmlFor="">Password
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Send" />
            </form>
        </>
    )

}