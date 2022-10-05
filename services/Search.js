import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from './api_config'

export const getSearchedMovies=async(movies,filter)=>{

// const url = BASE_URL
    
try {
    console.log("1",movies,filter)
const response = await axios.get(`https://api.themoviedb.org/3/search/${filter}?api_key=${APP_KEY}&query=${movies}&language=en-US&page=1`)

const movieData=response.data.results
console.log("2",movieData)
return movieData;

}
 catch(error){

    throw error
}
}



    
    
    
    
    
    