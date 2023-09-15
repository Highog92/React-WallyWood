import { PosterCard } from '../Components/Card/PosterCards/PosterCard'
import style from '../Layout/MainLayout.module.scss'

export function Posters() {

  return (

    <section className={style.contactStyle}>
      <article>
        <PosterCard />
      </article>
    </section>

  )
}
