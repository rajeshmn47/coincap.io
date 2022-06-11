import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import millify from "millify";

function App() {
const[coinlist,setCoinlist]=useState([])
const[page,setPage]=useState(1)
  async function getcoinlist(){
    const data=await axios.get('https://api.coincap.io/v2/assets')
    console.log(data.data)
    setCoinlist(data.data.data)
  }
  useEffect(()=>{
getcoinlist()
  },[])

const handlepage=()=>{
  if(page<7){
  setPage(page+1)
  }
}
  return (
 <div className='container'>
coins are coming
{coinlist?
<div className='coinstable'>
  <table id='table'>
  <tr id='headertable'>
    <th>Rank</th>
  <th id='second'>Name</th>
  <th>Price</th>
  <th>Market Cap</th>
  <th>VWAP(24hr)</th>
  <th>Supply</th>
  <th>Volume(24hr)</th>
  <th>Change(24hr)</th>
  </tr>
{coinlist.slice(0,page*20).map((c,index)=>
<>
  <tr id='tableitems'>
  <td>
{index+1}
</td>
  <td id='ima'>
  <img src={`https://assets.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`} alt='' width='20'/>
{c.name}
</td>

<td>
{millify(c.priceUsd)}
</td>

<td>
  {millify(c.marketCapUsd)}
</td>
{c.vwap24Hr&&<>
<td>
{millify(c.vwap24Hr)}
</td>
</>
}
<td>
{millify(c.supply)}
</td>
<td>
{millify(c.volumeUsd24Hr)}
</td>
<td>
{millify(c.changePercent24Hr)}
</td>
</tr></>)}
</table>
<button className='viewmore' onClick={()=>handlepage()}>view more</button>
</div>:'loading'}
 </div>
  );
}

export default App;
