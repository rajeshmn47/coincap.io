import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import millify from "millify";
import Header from './header';
import Footer from './footer';

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
    <>
  <div className='maincontainer'>
    <Header/>
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
<td className={c.changePercent24Hr>0?'positive':'negative'}>
{millify(c.changePercent24Hr)}%
</td>
</tr></>)}
</table>
<button className='viewmore' onClick={()=>handlepage()}>view more</button>

</div>:'loading'}
<Footer/>
 </div>  

            </div>
       
            </div>
          
 </> );
}

export default App;
