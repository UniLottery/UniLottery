/**
 *  File contains useful functions for interacting with Uniswap and
 *  the UniLottery ecosystem in the console.
 *  Mostly used when testing on testnets.
 */

const UNISWAP_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

var L_uniswap;
var L_mp;
var L_lot;
var L_weth;
var L_stor;

// Helpers.
var TW;
var FW;
var GB;
var BN;

// Load all data.
async function LTOOLS_publicBootstrap()
{
    L_uniswap = new web3.eth.Contract(
        UniLotteryContractABI.UniswapV2Router02, UNISWAP_ADDRESS );

    L_weth = await L_uniswap.methods.WETH().call();

    L_mp = MainPool;    // Must be already set in window.onload !

    L_lot = await L_mp.methods.mostRecentLottery().call();
    L_lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, L_lot );

    L_stor = await L_lot.methods.lotStorage().call();
    L_stor = new web3.eth.Contract(
        UniLotteryContractABI.LotteryStorage, L_stor );

    TW = v=> web3.utils.toWei(v);
    FW = v=> web3.utils.fromWei(v);
    GB = async adr => { 
        var b = await web3.eth.getBalance( adr );
        return web3.utils.fromWei( b );
    };
    BN = web3.utils.BN;

    return [ L_mp, L_lot, L_stor, L_uniswap, TW, FW, GB, L_weth ];
}


// Buy tokens from Uniswap.
async function LTOOLS_buy( wallet, ethAmount, _gas )
{
    var L_weth = await L_uniswap.methods.WETH().call();

    await L_uniswap.methods.swapExactETHForTokens( 
        "0", [ L_weth, L_lot._address ], wallet, "1000000000000000000" )
        .send( { from: wallet, value: ethAmount, gas: _gas } );
    
    var stage       = await L_lot.methods.lotteryStage().call();
    var prob        = await L_lot.methods.getFinishProbability().call();
    var tokAmount   = await L_lot.methods.balanceOf( wallet ).call();
    var lotFunds    = await L_lot.methods.getCurrentEthFunds().call();
    var pScore      = await L_lot.methods
                            .getPlayerIntermediateScore( wallet ).call();

    return [ stage, prob, pScore, FW( tokAmount ), FW( lotFunds ) ];
}


// Sell tokens to Uniswap.
async function LTOOLS_sell( wallet, tokenAmount, _gas )
{
    var L_weth = await L_uniswap.methods.WETH().call();

    await L_uniswap.methods.
        swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount, "0", [ L_lot.address, L_weth ],
            wallet, "100000000000000000" )
        .send( { from: wallet, gas: _gas } );

    var stage       = await L_lot.methods.lotteryStage().call();
    var prob        = await L_lot.methods.getFinishProbability().call();
    var tokAmount   = await L_lot.methods.balanceOf( wallet ).call();
    var lotFunds    = await L_lot.methods.getCurrentEthFunds().call();
    var pScore      = await L_lot.methods
                            .getPlayerIntermediateScore( wallet ).call();

    return [ stage, prob, pScore, FW( tokAmount ), FW( lotFunds ) ];
}




