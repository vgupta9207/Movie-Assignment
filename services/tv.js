import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from './api_config'
export const getTv=async (filter)=>{

    const url = BASE_URL
   
    try{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${filter}?api_key=${APP_KEY}&language=en-US&page=1`)
    //const response= await moviesAxios.get(url,{params})
    // console.log('RESPONSE',response.data)
    
    const movieData=response.data.results;
console.log("result",movieData)
    
    return movieData;
    
    
    
    
    }
    catch(error){
    
        throw error
    }
    
    
    
    
    
    
    }


     