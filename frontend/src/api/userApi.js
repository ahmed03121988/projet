import axios from "axios"


// register api 

export const signUp = async(values)=>{
    await axios.post('http://localhost:6000/api/register',{...values})
}