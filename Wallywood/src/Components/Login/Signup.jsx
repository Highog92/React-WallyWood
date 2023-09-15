// import style from '../Layout/MainLayout.module.scss'
import { useForm } from 'react-hook-form'


export function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  // className={style.contactStyle}
  return (
    <section  >
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <label htmlFor="">Brugernavn
          <input {...register('username', { required: true, minLength: 4 })} type="username" />
          {errors.username == 'required' && <span>Du skal udfylde Brugernavn</span>}
          {errors.username == 'minLength' && <span>Du skal have et brugernavn længere end 4 bogstaver</span>}
        </label>
        <label htmlFor="login">Password
        <input {...register('password', { required: true })} type="username" />
        {errors.password == 'required' && <span>Du skal udfylde Password</span>}
        </label>


        <input type="submit" value="submit" />
      </form>
    </section>
  )
}
