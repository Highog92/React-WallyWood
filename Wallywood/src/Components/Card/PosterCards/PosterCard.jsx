import React, { useEffect, useState } from "react";
import movieCardStyle from '../PosterCards/PosterCard.module.scss';

export function PosterCard() {

  useEffect(() => {
    const fetchMovie = () => {
      const url = 'http://localhost:4000/poster/list?limit=9';
      fetch(url)
        .then(result => result.json())
        .then(data => setMovieData(data));
    }
    fetchMovie();
  }, []);
// -------------------------------↓ Dette stykke gør at Plakater giver fejl ↓ -----------------------------------------------------------
  const setSort = (sort) => {
    switch (sort) {
        case 'low':
            setFetchUrl('http://localhost:4000/poster/list?sort_key=price&sort_direction=asc')
            break;
        case 'high':
            setFetchUrl('http://localhost:4000/poster/list?sort_key=price&sort_direction=desc')
            break;
        case 'title':
            setFetchUrl('http://localhost:4000/genre?sort_key=title')
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
        {setSort(["title"]).map((movie) => (

// ------------------------------- ↑ Dette stykke gør at Plakater giver fejl ↑ -----------------------------------------------------------

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
