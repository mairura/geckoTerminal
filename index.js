const axios = require("axios");

async function getData(pageNO){
    await axios.get(
    `https://app.geckoterminal.com/api/p1/eth/pools?include=dex,dex.network,dex.network.network_metric,tokens&page=${pageNO}&include_network_metrics=true`
  )
  .then((response) => {
    let res = response.data.data;
    const count = res.length;
    console.log("COUNT NO:", count);

    for(let i = 0; i < res.length; i++){
        console.log("\nAddresses:", res[i].attributes.address);
        console.log("Names:", res[i].attributes.name);

        let rel = res[i].relationships.tokens.data;

        for(let j=0; j < rel.length; j++){
            console.log("ID:", rel[j].id)
        }
    }    
  })
}


const result = getData(3);
const count = result.length;
for(let i=1;i<=result;i++){
    const count = result.length;
    console.log("Count:", count);
    console.log("Result:", i);
}