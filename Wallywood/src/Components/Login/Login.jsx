import { useContext, useEffect } from "react"
import { UserContext } from "../useContext/useContext"

export const Login = () => {

    const { setUser, user } = useContext(UserContext)

    const submitHandler = (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        if (username !== "" && password !== "") {

            const url = 'https://dummyjson.com/auth/login'

            const option = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: event.target.username.value,
                    password: event.target.password.value,

                })
            }
            fetch(url, option).then(res => res.json())
                .then((data) => setUser(data))
                .catch((err) => console.log(err))
        }
        else {
            alert('Du skal udfylde felterne før du sender')
        }

        fetch
        console.log("username:", event.target.username.value);
        console.log("password:", event.target.password.value);
    }

                    // "username": "jtreleven5",
                    // "password": "zY1nE46Zm",

    return (
        user?.username?
            <>
                <h3>Velkommen {user?.username}</h3>
                <button onClick={() => setUser(null)}>Log ud</button>
            </>
            :
            <form onSubmit={(event) => submitHandler(event)}>
                <label>Brugernavn
                    <input name="username"></input>
                </label>
                <label htmlFor="">Password
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Send" />
            </form>
    )

}