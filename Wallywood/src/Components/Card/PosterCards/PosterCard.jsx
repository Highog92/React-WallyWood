import { useEffect, useState } from "react";
import movieCardStyle from '../PosterCards/PosterCard.module.scss';

export function PosterCard() {
  
  const [posterData, setPosterData] = useState()

  const [url, setUrl] = useState('http://localhost:4000/poster/list?limit=21')

  useEffect(() => {
    const fetchMovie = () => {
      fetch(url)
        .then(result => result.json())
        .then(data => setPosterData(data));
    }
    fetchMovie();
  }, [url]);


  const setSort = (sort) => {
    switch (sort) {
      case 'low':
        setUrl('http://localhost:4000/poster/list?sort_key=price&sort_direction=asc&limit=21')
        break;
      case 'high':
        setUrl('http://localhost:4000/poster/list?sort_key=price&sort_direction=desc&limit=21')
        break;
      case 'title':
        setUrl('http://localhost:4000/poster/list?sort_key=name&limit=21')
        break;
    }
  }

  return (
    <div>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="" disabled selected hidden>Sortér</option>
        <option value="low">Pris - stigende</option>
        <option value="high">Pris - faldene</option>
        <option value="title">Titel</option>
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '50px' }}>
        {posterData?.map((movie) => (

          <section key={movie.id} className={movieCardStyle.movieCard}>
            <article>
              <div>
                <img src={movie.image} alt={movie.name} />
              </div>
              <div>
                <h3>{movie.name}</h3>
                <p>Kr. {movie.price},00</p>
                <button>Læg i kurv</button>
              </div>
            </article>
          </section>
        ))}
      </div>
    </div >
  );
}
