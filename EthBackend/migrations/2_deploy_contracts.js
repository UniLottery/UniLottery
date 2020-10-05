const LotteryFactory = artifacts.require("UniLotteryLotteryFactory");
const StorageFactory = artifacts.require("UniLotteryStorageFactory");
const MainPool = artifacts.require("UniLotteryPool");
const RandomProvider = artifacts.require("UniLotteryRandomnessProvider");

// If using Development network, deploy GANACHE UNISWAP.
const UniRouter = artifacts.require("UniswapV2Router02");
const UniFactory = artifacts.require("UniswapV2Factory");
const WETH = artifacts.require("WETH9");

// Uniswap Router address.
var uniAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

module.exports = async ( deployer, network, accounts ) =>
{
    // Deploy LotteryFactory, StorageFactory, then deploy MainPool.
    /*await eployer.deploy( WETH )
    await deployer.deploy( UniFactory, accounts[4] );
    await deployer.deploy( UniRouter, UniFactory.address, WETH.address );*/

    if( network == 'development' )
        uniAddress = UniRouter.address;

    await deployer.deploy( LotteryFactory /*, uniAddress*/ );
    await deployer.deploy( StorageFactory );
    await deployer.deploy( RandomProvider );

    console.log( "UniRouter:", uniAddress );
    console.log( "LotteryFactory:", LotteryFactory.address );
    console.log( "StorageFactory:", StorageFactory.address );
    console.log( "RandomProvider:", RandomProvider.address );

    return deployer.deploy( MainPool, LotteryFactory.address, 
                                      StorageFactory.address,
                                      RandomProvider.address );
};


/*
MainNet deployment (old):

UniRouter: 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
LotteryFactory: 0x8deCDbd8101c85D4d151383A3130EaBF9A4CBe57
StorageFactory: 0xb9cfc55a243CE278d318Bd3D311416B77972951a
RandomProvider: 0xD5fb59D9402c382746AbF223511FbA1AEFd3a268
UniLotteryPool: 0x599a3f10A5b70B164f535bD98191Cf19d357539C

(new):

LotteryFactory.address = "0xe18d9062e61e2dcb45960115518f1b09ee4d5ccb";
StorageFactory.address = "0xCe6cd236DD298779dF8F8F683bE9674a115f450f";
RandomProvider.address = "0x87cbf8b62e4d268a103ce1f7b3a49694ca18375d";
*/



