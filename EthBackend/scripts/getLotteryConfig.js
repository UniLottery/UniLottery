// This script is used to conveniently obtain a Lottery Config object,
// which can then be used as struct param to a Solidity function accepting
// a struct, by using ABIEncoderV2 functionality.

const PERCENT = 1000000;

// Get a default lottery config, with the specified properties changed.
//
function getLotteryConfig( changedProperties )
{
    var defaultConfig = [];

    defaultConfig.initialFunds = '300000000000000000'; // 0.3 ETH.
    defaultConfig.fundRequirement_denySells = '500000000000000000'; // 0.5 ETH
    defaultConfig.finishCriteria_minFunds = '800000000000000000'; // 0.8 ETH
    defaultConfig.maxLifetime = '7200'; // 2 hours.
    defaultConfig.prizeClaimTime = '1800'; // 30 minutes.
    defaultConfig.burn_buyerRate = (1 * PERCENT).toString();
    defaultConfig.burn_defaultRate = (10 * PERCENT).toString();
    defaultConfig.maxAmountForWallet_percentageOfSupply = (20 * PERCENT).toString();
    defaultConfig.REQUIRED_TIME_WAITING_FOR_RANDOM_SEED = '120'; // 120 secs.
    defaultConfig.poolProfitShare = (10 * PERCENT).toString();
    defaultConfig.ownerProfitShare = (10 * PERCENT).toString();
    defaultConfig.minerProfitShare = (5 * PERCENT).toString();
    defaultConfig.finishCriteria_minNumberOfHolders = '5';
    defaultConfig.finishCriteria_minTimeActive = '10'; // 10 secs.
    defaultConfig.finish_initialProbability = (5 * PERCENT).toString();
    defaultConfig.finish_probabilityIncreaseStep_transaction = (2 * PERCENT).toString();
    defaultConfig.finish_probabilityIncreaseStep_holder = (5 * PERCENT).toString();
    defaultConfig.maxPlayerScore_etherContributed = '10';
    defaultConfig.maxPlayerScore_tokenHoldingAmount = '10';
    defaultConfig.maxPlayerScore_timeFactor = '10';
    defaultConfig.maxPlayerScore_refferalBonus = '30';

    defaultConfig.randRatio_scorePart   = '1';
    defaultConfig.randRatio_randPart    = '2';

    defaultConfig.timeFactorDivisor = '1'; // Every second.
    defaultConfig.playerScore_referralRegisteringBonus = '5';
    defaultConfig.finish_resetProbabilityOnStop = false;
    defaultConfig.prizeSequenceFactor = (30 * PERCENT).toString();
    defaultConfig.prizeSequence_winnerCount = '4';
    defaultConfig.prizeSequence_sequencedWinnerCount = '2';
    defaultConfig.initialTokenSupply = '100000';
    defaultConfig.endingAlgoType = '2';
    defaultConfig.winnerProfitShares = [];


    // Change the needed values from the passed dictionary.
    // Also, push the already-specified default key-value pair keys
    // as an array elements to the config object - this is required 
    // by web3 - that the "struct" JS representation would be 
    // specified as an array.

    // Use ECMAScript 2017 feature, to iterate (key,value) pairs of
    // any JS object.
    
    for( const [key, value] of Object.entries( defaultConfig ) )
    {
        // Push the changed value, if it's key is also present in the
        // "changedProperties" object we got passed.
        // If not, push the default value.
        if( changedProperties && ( changedProperties[ key ] != null ) ) {
            defaultConfig.push( changedProperties[ key ] );
            defaultConfig[ key ] = changedProperties[ key ];
        }
        else
            defaultConfig.push( value );
    }

    // Return this config.
    return defaultConfig;
}

// Get a test-used lottery config, with some properties changed to
// more testing-compatible ones.
function getTestLotteryConfig()
{
    /*return getLotteryConfig( {
        initialFunds: '1300000000000000000',            // 1.3 ETH
        finishCriteria_minNumberOfHolders: '5',
        finishCriteria_minTimeActive: '5',
        finishCriteria_minFundEthGains: '200000000000', // 200% gains
        fundGainRequirement_denySells:  '100000000000', // 100% gains
        lotteryType: '1',   // Standalone Lottery
        winnerProfitShares: [
            '40000000000',  // 1st winner - 40% of profits
            '20000000000'   // 2nd winner - 20% of profits
        ]
    } );*/

    return getLotteryConfig();
}


// Set a property of a LotteryConfig to the specified one,
// also changing the corresponding array element.
//
function setProperty( config, propKey, propValue )
{
    // Iterate the keys, and also get the index of the wanted property
    // during the process. 
    //
    // Skip the first K keys, as they are the array element indexes.
    // These are exactly half of all keys present in the object.
    // We do this by simply subtracting the array length from the index,
    // after finding the wanted property's key.
    
    var index = 0;
    for( const [key, value] of Object.entries( config ) )
    {
        if( key == propKey ) {
            config[ key ] = propValue;
            config[ index - config.length ] = propValue;
            break;
        }
        index++;
    }
}

// Get the property of a config.
// Simply returns the value of a specified key.
//
function getProperty( config, propKey ) {
    return config[ propKey ];
}

// Export the module functions.
module.exports = {
    "getLotteryConfig": getLotteryConfig,
    "getTestLotteryConfig": getTestLotteryConfig,
    "setProperty": setProperty,
    "getProperty": getProperty
};



