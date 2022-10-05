import { useEffect, useState } from "react"
import { getTv } from "../../services/tv"
import TvFilter from "../forms/TvFilter"
import Loading from "../layout/Loading"
import MovieList from "../lists/movieList"
import { Container,Center } from "native-base"

const TvContainer=({navigation})=>{
const[filter,setFilter]=useState("popular")
const [movies, setMovies] = useState([])
const[isLoading,setIsLoading]=useState(false)

const handleFilter=(value)=>{
setFilter(value)
console.log("new",value)
}


useEffect(()=>{

getTv(filter).then(results=>{

setMovies(results)
})




},[filter])




return(
    <Container>
    <Center>
<TvFilter handleFilter={handleFilter}/> 
{isLoading ? <Loading/> : <MovieList movies={movies} navigation={navigation}/>}
{console.log("New",movies)}
</Center>

 </Container>
)

}


export default TvContainer