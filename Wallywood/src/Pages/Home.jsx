import { useEffect, useState } from "react"
import { MovieCard } from "../Components/Card/MovieCard"

export function Home() {


  return (
    <section>
      <h2>Sidste nyt...</h2>
      <MovieCard />
    </section>
  )
}
