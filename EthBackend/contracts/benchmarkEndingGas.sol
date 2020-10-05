// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.7.1;
pragma experimental ABIEncoderV2;

import "./MinedUniswapLottery.sol";


// Contract used to Benchmark the Gas Needed for the ending algo.
//
contract BenchmarkEndingGas
{
    // Last-Generated storage.
    LotteryStorage public lastGenStorage;


    // Generate a nu-storage.
    function getNewStorage( 
            uint16 _winnerCount,
            uint8 _endingAlgoType )
                                                            external
    {
        LotteryStorage.WinnerAlgorithmConfig memory cfg;

        // Individual player max score parts.
        cfg.maxPlayerScore_etherContributed     = 40;
        cfg.maxPlayerScore_tokenHoldingAmount   = 30;
        cfg.maxPlayerScore_timeFactor           = 30;
        cfg.maxPlayerScore_refferalBonus = 100;

        // Number of lottery winners.
        cfg.winnerCount = _winnerCount;

        // Ending Algorithm Type.
        cfg.endingAlgoType = _endingAlgoType;

        // Score-To-Random ration data (as a rational ratio number).
        // For example if 1:4, then scorePart = 1, and randPart = 4.
        cfg.randRatio_scorePart = 1;
        cfg.randRatio_randPart  = 4;

        // Create the lottery storage.
        lastGenStorage = new LotteryStorage();
        lastGenStorage.initialize( cfg );
    }

    // Add holders to a passed storage.
    //
    function addHoldersToStorage( 
            LotteryStorage stor,
            uint holderCount, 
            uint seed )
                                                    external
    {
        // Add the HODL'ers.
        // Generate addresses from SEED, with i as nonce.
        for( uint i = 0; i < holderCount; i++ )
        {
            address addr = address( uint160( uint( keccak256(
                abi.encodePacked( seed, i ) ) ) ) );

            stor.addHolder( addr );

            // "Buy coins" for this holder.
            stor.updateAndPropagateScoreChanges( 
                addr,
                int80( i * ( 10^9 ) ),
                int80( i * ( 10^8 ) ),
                int80( i * ( 10^9 ) )
            );
        }
    }

    // Run Winner Selection Algo on the passed storage.
    //
    function runWinnerSelectionAlgo(
            LotteryStorage stor )
                                                    external
    {
        // Run the algo!
        stor.executeWinnerSelectionAlgorithm();
    }
}



