import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row.js';



const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className='table'>
      <table >
        <thead >
          <tr >
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>Last 7d Chart</th>
          </tr>
        </thead>
        <tbody>
          
          
          {assets.map((asset, idx) => (
            <>
            <Row key={asset.id} asset={asset} index={idx + 1} />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;