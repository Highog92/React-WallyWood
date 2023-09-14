import style from '../Layout/MainLayout.module.scss'



export function Login() {






  return (
    <section className={style.contactStyle} >
      <h2>Login</h2>
      <form action="">
        <label htmlFor="">Brugernavn</label>
        <input type="username" />

        <label htmlFor="login">Password</label>
        <input type="password" />

        <button>Login</button>
      </form>
    </section>
  )
}
