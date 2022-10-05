import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from './api_config'
export const getMovies=async filterKey=>{

    const url = BASE_URL
    console.log("filter",filterKey)
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${filterKey}?api_key=${APP_KEY}&language=en-US&page=1`)

    const movieData=response.data.results;
   
    return movieData;
    
    
    
    
    }
    catch(error){
    
        throw error
    }
    
    
    
    
    
    
    }