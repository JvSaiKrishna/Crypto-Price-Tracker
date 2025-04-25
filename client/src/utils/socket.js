const Socket = (assets,update) => {
    setInterval(() => {
      const updatedAssets = assets.map((asset) => {
        const change = (Math.random()*2 - 1).toFixed(2);
        console.log(change)
        return {
          ...asset,
          price: (asset.price * (1+ change / 100)).toFixed(2),
        //   change1h: (+asset.change1h + +change).toFixed(2),
        //   change24h: (+asset.change24h + +change).toFixed(2),
          volume24h: Math.floor(asset.volume24h * (1 + change / 100)),
        };
      });
      update(updatedAssets);
    },2000);
  };

  export default Socket