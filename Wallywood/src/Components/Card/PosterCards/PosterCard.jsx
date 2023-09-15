import { useEffect, useState } from "react"
import movieCardStyle from '../HomeCards/MovieCard.module.scss'

export function PosterCard() {

  const [movieData, setMovieData] = useState([])
  useEffect(() => {

    const fetchMovie = () => {

      const url = 'http://localhost:4000/poster/list'
      fetch(url).then(result => result.json()).then(data => setMovieData(data))
    }
    fetchMovie()
  }, [])

  console.log("data", movieData);

  return (

    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'50px'}}>
      {
        movieData && movieData.map((movie) => {
          return (
            <section key={movie.id} className={movieCardStyle.movieCard}>

                <article>
                  <div>
                    <img src={movie.image} />
                  </div>
                  <div>

                    <h3>{movie.name}</h3>
                    <p>{movie.description}</p>
                    <p>{movie.genres.map((genre) => {
                      return (<p key={genre.id}>{genre.title}</p>)
                    })}</p>
                    
                    <button>Læs mere</button>
                  </div>
                </article>
            </section>
          )

        })
      }
    </div>
  )

}
