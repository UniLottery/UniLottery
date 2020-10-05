// This test tests the initial state of all deployed contracts
// (most importantly, MainUniLotteryPool and LotteryFactory), if the
// functions can only be called by the allowed addresses, and if the state
// is good.

MainPool = artifacts.require( "UniLotteryPool" );
UniLotteryVoteToken = artifacts.require( "UniLotteryVoteToken" );
UniLotteryPoolToken = artifacts.require( "UniLotteryPoolToken" );
UniLotteryRandomnessProvider=artifacts.require("UniLotteryRandomnessProvider");
UniLotteryLotteryFactory = artifacts.require( "UniLotteryLotteryFactory" );
UniLotteryConfigGenerator = artifacts.require( "UniLotteryConfigGenerator" );

// Revert exception tester.
const catchRevert = require("./exceptions.js").catchRevert;

// Start the Test - check all deployed contract initial state.
contract( "Initial State Test", async accounts => 
{
    // The addresses from which we'll be calling functions.
    const owner             = accounts[ 0 ];
    const provableSimulator = accounts[ 1 ];
    const OTHER             = accounts[ 2 ];

    // The ZERO address constant string.
    const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

    // One test to check'em all!
    describe( "Test All Deployed Contracts initial state and check for "+
              " function call allowed address permissions.", async () => 
    {
        // Before launching tests, resolve all pool-deployed contracts.
        before( async () => {
            const mainPool = await MainPool.new();

            // Now, get all other Pool-Deployed contract instances from
            // the pool.
            var voteToken         = await mainPool.voteToken.call();
            var poolShareToken    = await mainPool.poolShareToken.call();

            var randomnessProvider= await mainPool.randomnessProvider.call();
            var lotteryFactory    = await mainPool.lotteryFactory.call();
            var lotteryConfigGenerator = 
                await mainPool.lotteryConfigGenerator.call();

            // Check if they all are Non-Zero & valid (isAddress).
            assert.isTrue( ( web3.utils.isAddress( voteToken ) &&
                             voteToken != ZERO ),
                           "voteToken address is invalid!" );

            assert.isTrue( ( web3.utils.isAddress( poolShareToken ) &&
                             poolShareToken != ZERO ),
                           "poolShareToken address is invalid!" );

            assert.isTrue( ( web3.utils.isAddress( randomnessProvider ) &&
                             randomnessProvider != ZERO ),
                           "randomnessProvider address is invalid!" );

            assert.isTrue( ( web3.utils.isAddress( lotteryFactory ) &&
                             lotteryFactory != ZERO ),
                           "lotteryFactory address is invalid!" );

            assert.isTrue( ( web3.utils.isAddress( lotteryConfigGenerator ) &&
                             lotteryConfigGenerator != ZERO ),
                           "lotteryConfigGenerator address is invalid!" );

            // Get the contract instances of those addresses.
            voteToken = UniLotteryVoteToken.at( voteToken );
            poolShareToken = UniLotteryPoolToken.at( poolShareToken );
            randomnessProvider = UniLotteryRandomnessProvider.at( 
                                        randomnessProvider );
            lotteryFactory = UniLotteryLotteryFactory.at( lotteryFactory );
            lotteryConfigGenerator = UniLotteryConfigGenerator.at( 
                                        lotteryConfigGenerator );
        } );

        // Try to call functions of contracts with specific addresses,
        // expecting specific results.

        // ===================== MainPool ==================== //
        it( "MainUniLotteryPool: all functions should be able to get called"+
            "only by their allowed addresses.", async () => {
            mainPool.woop();
        } );

    } );

} );



