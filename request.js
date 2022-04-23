const { default: axios } = require('axios');
const distributedPorts = [5001, 5001, 5001];
const singleNodePort = 5000;

getDistributedTime();
getSingleNodeTime();
async function getDistributedTime() {
    const Results = [];
    let totalTime = 0
    await Promise.all(distributedPorts.map(async (port) => {
        const response = await axios.get(`http://localhost:${port}/distributed`);
        Results.push(response.data.totalTime);
    }))
    Results.map((time, i) => {
        const seconds = time / 1000;
        totalTime += seconds;
        console.log(`Time taken from node ${i}: ${seconds} seconds`);
    });
    console.log(`Total time taken: ${totalTime} seconds`);
}

async function getSingleNodeTime() {
    const response = await axios.get(`http://localhost:${5001}/single_node`);
    const result = response.data.totalTime;
    const seconds = result / 1000;
    console.log(`Time taken from single: ${seconds} seconds`);
    console.log({ result });
}