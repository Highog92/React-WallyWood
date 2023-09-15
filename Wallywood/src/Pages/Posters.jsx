import { MovieCard } from '../Components/Card/MovieCard'
import style from '../Layout/MainLayout.module.scss'

export function Posters() {

  return (
    
      <section className={style.contactStyle}>
        <div>
          <img src="" alt="" />
        </div>

        <article>
          <MovieCard/>
          {/* <h2>Film overskrift</h2>
          <p>Om filmen</p>
          <p>Størrelse</p>
          <p>Genre:</p>
          <p>Pris</p>
          <div>
            <p><input type="number" />{}</p>
            <button>Læg i kurv</button>
            <p>Her skal der stå hvor mange der er på lager</p>
          </div> */}
        </article>
      </section>

  )
}
