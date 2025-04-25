import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CryptoTable from './components/Table'
import { updateAssets } from './Slices/cryptoSlice'
import "./App.css"

const App = () => {
  const {assets}  = useSelector(state=>state.crypto)
  const dispatch = useDispatch()

  useEffect(()=>{
    const stopSocket = setInterval(() => {
      const updatedAssets = assets.map((asset) => {
        const change = (Math.random()*2-1).toFixed(2);
        return {
          ...asset,
          price: (asset.price * (1+ change / 100)).toFixed(2),
          change1h: (parseFloat(asset.change1h)+ parseFloat(change)).toFixed(2),
          change24h: (parseFloat(asset.change24h)+ parseFloat(change)).toFixed(2),
          change7d: (parseFloat(asset.change7d)+ parseFloat(change)).toFixed(2),
          volume24h: Math.floor(asset.volume24h * (1+change / 100)),
        };
      });
      dispatch(updateAssets(updatedAssets));
    },1500);
    return()=>{
      clearInterval(stopSocket)
    }
  
  },[dispatch,assets])
  return (
    <div>
      <h1>Crypto Tracker</h1>
      <CryptoTable/>
    </div>
  )
}

export default App