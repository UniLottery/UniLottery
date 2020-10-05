// This Node.js background-running script simulates behavior of a
// Provable (Oraclize) ethereum oracle service.
// We use this in testing environments, to power the 
// UniLottery Randomness Provider.
//
// In this script, we just listen to Randomness Provider emitting
// specific events, and then call that provider with the specific value.

// Use "Web3.js".
const Web3 = require('web3');

// Setup our Web3 provider (ganache).
const web3 = new Web3( 
    new Web3.providers.HttpProvider(
        'http://localhost:7545' ) );

const accounts = web3.eth.getAccounts();


// Setup the Randomness Provider contract from it's ABI, and addresses.
const PROVABLE_SIMULATOR_ADDRESS = accounts[ 1 ];
const randomnessProviderAddress = process.argv[ 2 ];

const randProvCompiled = 
    require("../build/contracts/UniLotteryRandomnessProvider.json");

const randomnessProvider = new web3.eth.Contract( 
    randProvCompiled.abi,
    randomnessProviderAddress,
    { from: PROVABLE_SIMULATOR_ADDRESS }
);


// Setup the Web3 Event Interceptors:
// LotteryRandomSeedRequested:

randomnessProvider.events.LotteryRandomSeedRequested( 
    { fromBlock: 'latest' }
)
.on('data', async evt => {
    console.log( "Lottery requested random seed! Event params:",
                 JSON.stringify( evt.returnValues, null, 4 ) );

    // Obtain a random value, to be used as a random seed.
    const randomSeed = String( Math.random() );

    // Call the randomness Provider's callback with the given random seed.
    randomnessProvider.__callback( evt.returnValues.id, randomSeed, "000",
        {
            from: PROVABLE_SIMULATOR_ADDRESS, 
            gas: evt.returnValues.gasLimit
        }
    );
})
.on('error', console.error);

// Pool Callback Scheduled:
randomnessProvider.events.PoolCallbackScheduled( 
    { fromBlock: 'latest' }
)
.on('data', async evt => {
    console.log( "Pool Callback Scheduled! Event params:",
                 JSON.stringify( evt.returnValues, null, 4 ) );

    // Call the Callback after a specified amount of time.
    setTimeout(
        () => {
            randomnessProvider.__callback( evt.returnValues.id, "0", "0",
                {
                    from: PROVABLE_SIMULATOR_ADDRESS, 
                    gas: evt.returnValues.gasLimit
                }
            );
        },
        evt.returnValues.timeout.toNumber() * 1000; // Convert to millisecs.
    );
})
.on('error', console.error);




