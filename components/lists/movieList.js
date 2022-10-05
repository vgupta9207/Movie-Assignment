import MovieCard from "../listItems/MovieCard"
import { FlatList } from "native-base"

const MovieList=(props)=>{
   
const {movies,navigation}  = props
console.log("movies",movies)
return(
   
<FlatList
data={movies}
renderItem={({item})=>(
<MovieCard
image={item.poster_path}
name={item.title}
popularity={item.popularity}
releaseDate={item.release_date}
overview={item.overview}
navigation={navigation}
/>



)}
>
</FlatList>





)

{ console.log("Vipul",props)}


}
export default MovieList