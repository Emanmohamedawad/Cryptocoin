
import React, { useState, useEffect } from 'react';
import {Routes , Route} from 'react-router-dom';
import axios from 'axios'
import Coins from './component/Coins';
import Coin from './coinPage/Coin';
import Navbar from './component/Navbar';
function App() {

  const [coins, setCoins] = useState([])

  const urlApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(urlApi).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>

    <Navbar/> 

     <Routes>
       <Route path='/' element={<Coins coins={coins}/>} />
       <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
       </Route>
     </Routes>
      
    </>
  );
}

export default App;
