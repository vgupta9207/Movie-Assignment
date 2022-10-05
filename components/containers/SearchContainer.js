


import { Center, Container } from "native-base"
import { getSearchedMovies } from "../../services/Search"
import { useState } from "react"
import Form from "../forms/Form"
import Loading from "../layout/Loading"
import MovieList from "../lists/movieList"
import SearchFilter from "../forms/SearchFilter"
import EmptySearch from "../layout/EmptySearch"

const SearchContainer =({navigation})=>{
const [name, setName] = useState(null)
const [movies, setMovies] = useState([])
const [empty, setEmpty] = useState(true)
const [loading, setLoading] = useState(false)
const [filter, setFilter] = useState("multi")
    


const fetchMovies=()=>{
    
    getSearchedMovies(name,filter).then(movie=>{
                setMovies(movie)
                console.log("3",movie, name)
                })
    }

    const handleInputChange =(name)=>{
        if(name!= null)
        {
        setName(name)
        setEmpty(false)
        }
       



    }

    const handleFilter=(value)=>{
        setFilter(value)
        }
 return(
 <Container mx={5} >


<Form  fetchMovies={fetchMovies} onInputChange={handleInputChange}/>
<SearchFilter handleFilter={handleFilter}/>
{empty ? <EmptySearch/> :""}
{loading ? <Loading/> : <MovieList movies={movies} navigation={navigation}/>}




 </Container>

)}


export default SearchContainer