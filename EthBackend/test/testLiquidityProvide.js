var MainPool = artifacts.require( "UniLotteryPool" );
var UniRouter = artifacts.require( "UniswapV2Router02" );

describe( "TestLiquidityProvide", async accounts => {
    before( async () => {
        TW = val => web3.utils.toWei( val, "ether" );
        FW = val => web3.utils.fromWei( val, "ether" );
        OWNER = accounts[ 0 ];

        mp = await MainPool.deployed();
        uniswap = await UniRouter.deployed();
    } );

    it( "Should correctly provide Liquidity to Pool & Uniswap", async () => {
        // Initial funds are already there.

        await debug( uniswap.addLiquidityETH( 
            mp.address, 
            TW("30"), 
            TW("30"), 
            TW("1"), 
            OWNER, 
            "100000000000000", {
                from: OWNER, 
                value: TW("1"), 
                gas: 10000000 
            } ) );
    } );

} );



