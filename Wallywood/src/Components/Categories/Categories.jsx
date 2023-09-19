import { useEffect, useState } from "react"
import categorieStyle from '../Categories/Categories.module.scss'

export function Categories() {

  const [categorieData, setCategorieData] = useState([])
  useEffect(() => {

    const fetchMovie = () => {

      const url = 'http://localhost:4000/genre'
      fetch(url).then(result => result.json()).then(data => setCategorieData(data))
    }
    fetchMovie()
  }, [])

  console.log("data", categorieData);

  return (

    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'50px'}}>
      {
        categorieData && categorieData.map((categorie) => {
          return (
            <section key={categorie.id} className={categorieStyle.categories}>              
                    <a href="">{categorie.title}</a>
            </section>
          )

        })
      }
    </div>
  )

}
