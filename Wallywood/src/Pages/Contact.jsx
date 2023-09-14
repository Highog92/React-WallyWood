import style from '../Layout/MainLayout.module.scss'


export function Contact() {

  return (
    <section className={style.contactStyle}>
      <h2>Kontakt os</h2>
      <form action="">
        <label htmlFor="">Dit navn</label>
        <input type="name" />

        <label htmlFor="email">Email</label>
        <input type="email" />

        <label htmlFor="">Din Besked</label>
        <textarea name="comment" id="" cols="50" rows="10"></textarea>
        <button>Send</button>
      </form>
    </section>
  )
}
