import { MovieCard } from "../Components/Card/HomeCards/MovieCard"
import Curtains from '../Assets/Curtains.jpg'
export function Home() {


  return (
    <section>
      <img src={Curtains} alt="" />
      <h2>Sidste nyt...</h2>
        <MovieCard />
    </section>
  )
}
