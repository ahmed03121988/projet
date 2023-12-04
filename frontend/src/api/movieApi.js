import axios from 'axios';



export const getMovie = async()=>{
    const {data} = await axios.get('http://localhost:6000/movie')
     return data
}
