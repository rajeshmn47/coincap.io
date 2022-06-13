import axios from 'axios'
import { useEffect,useState } from 'react'


export const Chart=({show,setShow,coin})=>{
    useEffect(()=>{
        async function fetchdata(){
        if(show){
            const data=await axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`)
            console.log(data)
        }
        }
        fetchdata()
        },[coin])
    return(
        <>
        <h1>rajesh</h1>
        </>
    )
}
export default Chart