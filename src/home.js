import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import millify from "millify";
import Header from './header';
import Footer from './footer';
import Coin from './coin';

export const Home=()=>{

    const[coinlist,setCoinlist]=useState([])
const[page,setPage]=useState(1)
  async function getcoinlist(){
    const data=await axios.get('https://api.coincap.io/v2/assets')
    const datab=await axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
   console.log(datab.data)
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
    return(
        <>
            <div className="secondpart">
        <div className="secondpart_div">         
        <div>
            <h5>MARKET CAP</h5>
            <h5>$1.44T</h5>
</div>
<div>
<h5>EXCHANGE VOL</h5>
<h5>$68.51B</h5>
</div>
<div>
<h5>ASSETS</h5>
<h5>2,295</h5>
</div>
<div>
<h5>EXCHANGES</h5>
<h5>73</h5>
</div>
<div>
<h5>MARKETS</h5>
<h5>15,069</h5>
</div>
<div>
<h5>BTC DOM INDEX</h5>
<h5>36.4%</h5>
</div>
</div>
<div className='container'>
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
<Coin index={index} c={c}/>
</>)}
</table>
<button className='viewmore' onClick={()=>handlepage()}>view more</button>

</div>:'loading'}
<Footer/>
 </div>  

            </div>
        </>
    )
}

export default Home