import { PosterCard } from '../Components/Card/PosterCards/PosterCard'
import style from '../Layout/MainLayout.module.scss'
import { Categories } from '../Components/Categories/Categories'
export function Posters() {

  return (

    <section >
      <Categories />
      <article className={style.contactStyle}>
        <PosterCard />
      </article>
    </section>

  )
}
