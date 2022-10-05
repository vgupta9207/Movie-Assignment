
import { useEffect, useState } from "react"
import { getMovies } from "../../services/movies"
import Filter from "../forms/Filter"
import Loading from "../layout/Loading"
import MovieList from "../lists/movieList"
import { Container,Center ,Box} from "native-base"

const MovieContainer=({navigation})=>{
const[filter,setFilter]=useState("popular")
const [movies, setMovies] = useState([])
const[isLoading,setIsLoading]=useState(false)

const handleFilter=(value)=>{
setFilter(value)
console.log("new",value)
}


useEffect(()=>{

getMovies(filter).then(results=>{

setMovies(results)
})




},[filter])




return(
    <Container>
    <Center>
    <Box mt={30} mx={70} mb={30}>
    <Center>

        <Filter handleFilter={handleFilter}/>
</Center>

    </Box>



{isLoading ? <Loading/> : <MovieList movies={movies} navigation={navigation}/>}
{console.log(movies)}

</Center>


 </Container>
)

}


export default MovieContainer