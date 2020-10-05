CG = require("./getLotteryConfig.js");

/*Pool = require("../build/contracts/UniLotteryPool.json");
Lottery = require("../build/contracts/Lottery.json");
LotteryStorage = require("../build/contracts/LotteryStorage.json");
UniswapRouter = require("../build/contracts/UniswapV2Router02.json");

Contrado = async ( web3 ) =>
{
    netID = await web3.eth.net.getId();

    Pool = new web3.eth.Contract( Pool.abi, Pool.networks[ netID ].address );
    Lottery         = new web3.eth.Contract( Lottery.abi );
    LotteryStorage  = new web3.eth.Contract( LotteryStorage.abi );
    UniswapRouter   = new web3.eth.Contract( UniswapRouter.abi );
}*/


module.exports = {
    publicBootstrap: async ( web3, Pool, Lottery, LotteryStorage, 
                             UniswapRouter, pubNet ) =>
    {
        if( pubNet )
            uniswap = await UniswapRouter.at(
                "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" );
        else
            uniswap = await UniswapRouter.deployed();

        mp = await Pool.deployed();
        lot = await mp.mostRecentLottery().then( r=> Lottery.at( r ) );
        weth = await uniswap.WETH()
        stor = await lot.lotStorage().then( r=> LotteryStorage.at( r ) );

        TW = v=> web3.utils.toWei(v);
        FW = v=> web3.utils.fromWei(v);
        GB = async adr => { 
            var b = await web3.eth.getBalance( adr );
            return web3.utils.fromWei( b );
        };

        return [ mp, lot, stor, uniswap, TW, FW, GB, weth ];
    },

    bootstrap: async ( web3, Pool, Lottery, LotteryStorage, UniswapRouter, 
                       deployLot, publicTestnet ) => 
    {
        var mp = await Pool.deployed();
        if( deployLot ) {
            await mp.provideLiquidity( 
                { value: web3.utils.toWei("0.6") } );
            await mp.setNextLotteryConfig(
                CG.getLotteryConfig() );
            await mp.startManualModeLottery( { gas: 10000000 });
        }
        var lot = await mp.mostRecentLottery();
        lot = await Lottery.at( lot );

        lotStor = await lot.lotStorage().then( r=> LotteryStorage.at( r ) );

        if( UniswapRouter ) {
            if( publicTestnet )
                var uniswap = await UniswapRouter.at(
                    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
            else
                var uniswap = await UniswapRouter.deployed();

            var accounts = await web3.eth.getAccounts();
            var weth = await uniswap.WETH();
            //console.log( uniswap.address, weth, lot.address, accounts[4] );
            await uniswap.swapExactETHForTokens( "0", [weth, lot.address],
                accounts[4], "1000000000000000000", 
                { from: accounts[4], value: web3.utils.toWei("0.01") } );

            // Approve all accounts for selling.
            accounts.forEach( a => lot.approve(
                uniswap.address, web3.utils.toWei("10000000"), { from: a } ) );
        }

        return [ mp, lot, uniswap,
                 val => web3.utils.toWei( val ),
                 val => web3.utils.fromWei( val ),
                 lotStor,
                 async adr => { 
                     var b = await web3.eth.getBalance( adr );
                     return web3.utils.fromWei( b );
                 } ];
    },

    buy: async ( web3, Pool, Lottery, UniswapRouter, wallet, amount ) => {
        var mp = await Pool.deployed();
        var lot = await mp.mostRecentLottery();
        lot = await Lottery.at( lot );

        var uniswap = await UniswapRouter.deployed();
        var weth = await uniswap.WETH();

        if( amount )
            amount = web3.utils.toWei( amount );
        else
            amount = web3.utils.toWei("0.01");

        // Buy the Tokens.
        await uniswap.swapExactETHForTokens( "0", [weth, lot.address],
            wallet, "1000000000000000000", 
            { from: wallet, value: amount } );

        return [ mp, lot, uniswap,
                 val => web3.utils.toWei( val ),
                 val => web3.utils.fromWei( val ) ];
    },

    sell: async ( web3, Pool, Lottery, UniswapRouter, wallet, amount ) => {
        var mp = await Pool.deployed();
        var lot = await mp.mostRecentLottery();
        lot = await Lottery.at( lot );

        var uniswap = await UniswapRouter.deployed();
        var weth = await uniswap.WETH();

        if( amount )
            amount = web3.utils.toWei( amount );
        else
            amount = web3.utils.toWei("100");

        // Sell the Tokens.
        await uniswap.swapExactTokensForETHSupportingFeeOnTransferTokens(
            amount, "0", [lot.address, weth],
            wallet, "100000000000000000",
            { from: wallet } );

        return [ mp, lot, uniswap,
                 val => web3.utils.toWei( val ),
                 val => web3.utils.fromWei( val ) ];
    },

    // Simplified BUY.
    buy1: async( web3, lot, uniswap, wallet, ethAmount, _gas ) => {
        var weth = await uniswap.WETH();
        await uniswap.swapExactETHForTokens( "0", [weth, lot.address],
            wallet, "1000000000000000000", 
            { from: wallet, value: ethAmount, gas: _gas } );
        
        var stage = await lot.lotteryStage();
        var prob = await lot.getFinishProbability();
        var tokAmount = await lot.balanceOf( wallet );
        var lotFunds = await lot.getCurrentEthFunds();
        var pScore = await lot.getPlayerIntermediateScore( wallet );

        return [ stage.toNumber(), prob.toNumber(), pScore.toNumber(),
                 web3.utils.fromWei( tokAmount ),
                 web3.utils.fromWei( lotFunds ) ];
    },

    // Simplified SELL.
    sell1: async( web3, lot, uniswap, wallet, tokenAmount, _gas ) => {
        var weth = await uniswap.WETH();
        await uniswap.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount, "0", [lot.address, weth],
            wallet, "100000000000000000",
            { from: wallet, gas: _gas } );

        var stage = await lot.lotteryStage();
        var prob = await lot.getFinishProbability();
        var tokAmount = await lot.balanceOf( wallet );
        var lotFunds = await lot.getCurrentEthFunds();
        var pScore = await lot.getPlayerIntermediateScore( wallet );

        return [ stage.toNumber(), prob.toNumber(), pScore.toNumber(),
                 web3.utils.fromWei( tokAmount ),
                 web3.utils.fromWei( lotFunds ) ];
    },

    // Simplified BUY - no waiting
    buy_2: async( web3, lot, uniswap, wallet, ethAmount, _gas, weth ) => {
        return uniswap.swapExactETHForTokens( "0", [weth, lot.address],
            wallet, "1000000000000000000", 
            { from: wallet, value: ethAmount, gas: _gas } );
    },

    // Simplified SELL - no waiting.
    sell_2: async( web3, lot, uniswap, wallet, tokenAmount, _gas, weth ) => {
        return uniswap.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount, "0", [lot.address, weth],
            wallet, "100000000000000000",
            { from: wallet, gas: _gas } );
    }


}



