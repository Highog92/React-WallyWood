import image from '../Assets/kinoelement.jpg'
import style from '../Layout/MainLayout.module.scss'
export function About() {

  return (
    <section className={style.aboutStyle}>
      <h2>Om os</h2>

      <article>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et non iste, quas blanditiis soluta nobis, vel, ex harum tenetur earum iusto excepturi
            magnam. Corrupti quas illum velit et repellendus reiciendis numquam aspernatur, quisquam earum perspiciatis debitis maiores aliquam

          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et non iste, quas blanditiis soluta nobis, vel, ex harum tenetur earum iusto excepturi
            magnam. Corrupti quas illum velit et repellendus reiciendis numquam aspernatur, quisquam earum perspiciatis debitis maiores aliquam
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et non iste, quas blanditiis soluta nobis, vel, ex harum tenetur earum iusto excepturi
            magnam. Corrupti quas illum velit et repellendus reiciendis numquam aspernatur, quisquam earum perspiciatis debitis maiores aliquam
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </article>
    </section>
  )
}
