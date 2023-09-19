import React, { useEffect, useState } from "react";
import movieCardStyle from '../PosterCards/PosterCard.module.scss';

export function PosterCard() {
  const [movieData, setMovieData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All"); // Initialize with "All" to show all genres.

  useEffect(() => {
    const fetchMovie = () => {
      const url = 'http://localhost:4000/poster/list?limit=9';
      fetch(url)
        .then(result => result.json())
        .then(data => setMovieData(data));
    }
    fetchMovie();
  }, []);

  // Function to filter movies based on selected genre
  const filterMoviesByGenre = () => {
    if (selectedGenre === "All") {
      return movieData;
    } else {
      return movieData.filter(movie => movie.genres.some(genre => genre.title === selectedGenre));
    }
  }

  // Event handler for genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  }

  return (
    <div>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="All">All Genres</option>
        <option value="All">Action</option>
        <option value="All">Adventure</option>
        <option value="All">Dokumentar</option>
        <option value="All">Drama</option>
        <option value="All">Gyser</option>
        <option value="All">Karatefilm</option>
        <option value="All">Komedie</option>
        <option value="All">Krigsfilm</option>
        <option value="All">Krimi</option>
        <option value="All">Science Fiction</option>
        <option value="All">Børnfilm</option>

      </select>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '50px' }}>
        {filterMoviesByGenre().map((movie) => (
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
    </div>
  );
}
