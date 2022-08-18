require("dotenv").config();
const ethers = require("ethers");


async function main() {

    const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WSS_KEY);

    provider.on("pending in the mempool...", async (tx) => {
        //just gives the hashes
        //console.log(tx); 

        const txInfo = await provider.getTransaction(tx);
        console.log(txInfo);
    })
}

main()