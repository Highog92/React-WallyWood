// import style from '../Layout/MainLayout.module.scss'
import { useForm } from 'react-hook-form'
import { Signup } from '../Components/Login/Signup';
import { useContext, useState } from 'react';
import { LoginContext } from '../Components/LoginContext/LoginContext';
import style from '../Layout/MainLayout.module.scss'

export function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { setUser } = useContext(LoginContext)

  const onSubmit = (data) => {

    const url = 'http://localhost:4000/login'
    const body = new URLSearchParams()
    body.append('username', data.username)
    body.append('password', data.password)

    const options = {
      method: 'POST',
      body: body
    }

    fetch(url, options).then(res => res.json()).then(data => setUser(data));

  }

  const [isLoginTrue, setIsLoginTrue] = useState(true)

  if (isLoginTrue)
    return (
      <section className={style.contactStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <label htmlFor="">Brugernavn
            <input {...register('username', { required: true, minLength: 4 })} type="username" />
            {errors.username?.type === 'required' && <span>Du skal udfylde Brugernavn</span>}
            {errors.username?.type === 'minLength' && <span>Du skal have et brugernavn længere end 4 bogstaver</span>}
          </label>
          <label htmlFor="login">Password
            <input {...register('password', { required: true })} type="password" />
            {errors.password == 'required' && <span>Du skal udfylde Password</span>}
          </label>

          <input type="submit" value="submit" />
        </form>

        <button onClick={() => setIsLoginTrue(false)} >Eller opret ny bruger</button>
      </section>
    )

  else
    return (
      <section className={style.contactStyle} >

        <Signup />
        <button onClick={() => setIsLoginTrue(true)}>Har du allerede en bruger? Login her</button>

      </section>
    )
}
