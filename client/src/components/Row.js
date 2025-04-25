
const Row = ({ asset, index }) => {
    const getColor = (value) => (value >= 0 ? 'green' : 'red');
  return (
    <>
    <tr >
      <td>{index}</td>
      <td><img className="logo" src={asset.logo} alt={asset.symbol} /></td>
      <td>{asset.name}</td>
      <td>{asset.symbol}</td>
      <td>${asset.price}</td>
      <td style={{ color: getColor(asset.change1h) }}>{asset.change1h}%</td>
      <td style={{ color: getColor(asset.change24h) }}>{asset.change24h}%</td>
      <td style={{ color: getColor(asset.change7d) }}>{asset.change7d}%</td>
      <td>${asset.marketCap}</td>
      <td>${asset.volume24h}</td>
      <td>{asset.circulatingSupply}</td>
      <td>{asset.maxSupply}</td>
      <td><img className="chart" src={asset.chart7d} alt="7D Chart" /></td>
    </tr>
    </>
  );
};


export default Row
