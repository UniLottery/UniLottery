// This script is used to conveniently obtain a Lottery Config object,
// which can then be used as struct param to a Solidity function accepting
// a struct, by using ABIEncoderV2 functionality.

const PERCENT = 1000000;


// Get a default lottery config, with the specified properties changed.
//
function LCF_getLotteryConfig( changedProperties )
{
    var defaultConfig = [];

    defaultConfig.initialFunds = web3.utils.toWei("0.3");
    defaultConfig.fundRequirement_denySells = web3.utils.toWei("0.5");
    defaultConfig.finishCriteria_minFunds = web3.utils.toWei("0.8");

    defaultConfig.maxLifetime = (7 * 24 * 3600).toString(); // 1 week
    defaultConfig.prizeClaimTime = (14 * 24 * 3600).toString(); // 2 weeks

    defaultConfig.burn_buyerRate = (1 * PERCENT).toString();
    defaultConfig.burn_defaultRate = (10 * PERCENT).toString();
    defaultConfig.maxAmountForWallet_percentageOfSupply = (10 * PERCENT).toString();

    defaultConfig.REQUIRED_TIME_WAITING_FOR_RANDOM_SEED = (2 * 3600).toString(); // 2 hours.

    defaultConfig.poolProfitShare = (10 * PERCENT).toString();
    defaultConfig.ownerProfitShare = (9 * PERCENT).toString();
    defaultConfig.minerProfitShare = (1 * PERCENT).toString();

    defaultConfig.finishCriteria_minNumberOfHolders = '4';
    defaultConfig.finishCriteria_minTimeActive = (10).toString(); // 3 hours.

    defaultConfig.finish_initialProbability = (1 * PERCENT).toString();
    defaultConfig.finish_probabilityIncreaseStep_transaction = (2 * PERCENT).toString();
    defaultConfig.finish_probabilityIncreaseStep_holder = (2 * PERCENT).toString();
    
    defaultConfig.maxPlayerScore_etherContributed = '40';
    defaultConfig.maxPlayerScore_tokenHoldingAmount = '30';
    defaultConfig.maxPlayerScore_timeFactor = '30';
    defaultConfig.maxPlayerScore_refferalBonus = '100';

    defaultConfig.randRatio_scorePart   = '1';
    defaultConfig.randRatio_randPart    = '3';

    defaultConfig.timeFactorDivisor = '120'; // Every 2 minutes.
    defaultConfig.playerScore_referralRegisteringBonus = '2';
    defaultConfig.finish_resetProbabilityOnStop = false;
    defaultConfig.prizeSequenceFactor = (30 * PERCENT).toString();

    defaultConfig.prizeSequence_winnerCount = '10';
    defaultConfig.prizeSequence_sequencedWinnerCount = '10';
    
    defaultConfig.initialTokenSupply = '1000000';
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


// Set a property of a LotteryConfig to the specified one,
// also changing the corresponding array element.
//
function LCF_setProperty( config, propKey, propValue )
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
function LCF_getProperty( config, propKey ) {
    return config[ propKey ];
}



