import { useEffect, useState } from "react"
import { MovieCard } from "../Components/Card/MovieCard"

export function Home() {
  // const [userData, setUserData] = useState([])
  // useEffect(() => {

  //   const fetchUsers = () => {

  //     const url = 'http://localhost:4000/poster/list'
  //     fetch(url).then(result => result.json()).then(data => setUserData(data))
  //   }
  //   fetchUsers()
  // }, [])

  // console.log("data", userData);

  return (
    <section>
      <h2>Sidste nyt...</h2>
      <MovieCard />
    </section>
  )
}
