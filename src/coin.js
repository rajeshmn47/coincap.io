import axios from "axios"
import millify from "millify"
import { useEffect, useState } from "react"
import Chart from "./chart"


export const Coin=({index,c})=>{
    const[show,setShow]=useState(false)
    const[address,setAddress]=useState()
useEffect(()=>{
async function fetchdata(){
if(show){
    const data=await axios.get(`https://api.coincap.io/v2/assets/${address}/history?interval=d1`)
    console.log(data)
}
}
fetchdata()
},[address])

const handleclick= async (a)=>{
    console.log(a)
    setShow(!show)
    const b=a.toLowerCase()
    setAddress(b)
}
    return(
        <>
       <tr id='tableitems' onClick={()=>handleclick(c.name)}>
  <td>
{index+1}
</td>
  <td id='ima'>
  <img src={`https://assets.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`} alt='' width='20'/>
{c.name}
</td>

<td>
${millify(c.priceUsd)}
</td>

<td>
  ${millify(c.marketCapUsd)}
</td>
{c.vwap24Hr&&<>
<td>
${millify(c.vwap24Hr)}
</td>
</>
}
<td>
{millify(c.supply)}
</td>
<td>
${millify(c.volumeUsd24Hr)}
</td>
<td className={c.changePercent24Hr>0?'positive':'negative'}>
{millify(c.changePercent24Hr)}%
</td>
</tr> 
{show&&<Chart show={show} setShow={setShow} coin={address} />}
        </>
    )
}

export default Coin