/**
 *  File contains the ABI of the 3 frontend-necessary UniLottery contracts:
 *  UniLotteryPool, Lottery, and LotteryStorage.
 */

const UniLotteryContractABI =
{
UniswapV2Router02: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_WETH",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "WETH",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountADesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapETHForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveB",
          "type": "uint256"
        }
      ],
      "name": "quote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsOut",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsIn",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],



UniLotteryPool: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_lotteryFactoryAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_storageFactoryAddr",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_randProvAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "poolholder",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "AddedLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "EtherReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "lottery",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "totalReturn",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "profitAmount",
          "type": "uint256"
        }
      ],
      "name": "LotteryFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum UniLotteryPool.LotteryRunMode",
          "name": "previousMode",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "enum UniLotteryPool.LotteryRunMode",
          "name": "newMode",
          "type": "uint8"
        }
      ],
      "name": "LotteryRunModeChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "lottery",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fundsUsed",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "poolPercentageUsed",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "indexed": false,
          "internalType": "struct Lottery.LotteryConfig",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "LotteryStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "indexed": false,
          "internalType": "struct Lottery.LotteryConfig",
          "name": "cfg",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "configIndex",
          "type": "uint256"
        }
      ],
      "name": "NewConfigProposed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "poolholder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "initialAmount",
          "type": "uint256"
        }
      ],
      "name": "NewPoolholderJoin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "lotteriesPerformed",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "totalPoolFunds",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentPoolBalance",
          "type": "uint256"
        }
      ],
      "name": "PoolStats",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "poolholder",
          "type": "address"
        }
      ],
      "name": "PoolholderWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "poolholder",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RemovedLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "OWNER_ADDRESS",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "PERCENT",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allLotteriesPerformed",
      "outputs": [
        {
          "internalType": "contract Lottery",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "autoMode_isLotteryCurrentlyOngoing",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "autoMode_lastLotteryFinished",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "autoMode_lastLotteryStarted",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "autoMode_maxNumberOfRuns",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "autoMode_nextLotteryDelay",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "autoMode_timeCallbackScheduled",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lotteryFactory",
      "outputs": [
        {
          "internalType": "contract UniLotteryLotteryFactory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "lotteryRunMode",
      "outputs": [
        {
          "internalType": "enum UniLotteryPool.LotteryRunMode",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "mostRecentLottery",
      "outputs": [
        {
          "internalType": "contract Lottery",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ownerApprovedAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "randomnessProvider",
      "outputs": [
        {
          "internalType": "contract UniLotteryRandomnessProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "storageFactory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    },
    {
      "inputs": [],
      "name": "totalPoolFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getPoolStats",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "_numberOfLotteriesPerformed",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "_totalPoolFunds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_currentPoolBalance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "provideLiquidity",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "getPoolSharePercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "percentage",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ulptAmount",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lotAddr",
          "type": "address"
        }
      ],
      "name": "isLotteryOngoing",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "allLotteriesPerformed_length",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "totalReturn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "profitAmount",
          "type": "uint256"
        }
      ],
      "name": "lotteryFinish",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "scheduledCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "currentRequestPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "poolGivenExpectedRequestPrice",
          "type": "uint256"
        }
      ],
      "name": "onLotteryCallbackPriceExceedingGivenFunds",
      "outputs": [
        {
          "internalType": "bool",
          "name": "callbackExecutionPermitted",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct Lottery.LotteryConfig",
          "name": "cfg",
          "type": "tuple"
        }
      ],
      "name": "setNextLotteryConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum UniLotteryPool.LotteryRunMode",
          "name": "runMode",
          "type": "uint8"
        }
      ],
      "name": "setRunMode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startManualModeLottery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "nextLotteryDelay",
          "type": "uint32"
        },
        {
          "internalType": "uint16",
          "name": "maxNumberOfRuns",
          "type": "uint16"
        }
      ],
      "name": "setAutoModeParameters",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startAutoModeCycle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "owner_setOwnerApprovedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "owner_removeOwnerApprovedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNextLotteryConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct Lottery.LotteryConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "lottery",
          "type": "address"
        }
      ],
      "name": "retrieveUnclaimedLotteryPrizes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "etherAmount",
          "type": "uint256"
        }
      ],
      "name": "retrieveRandomnessProviderFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "etherAmount",
          "type": "uint256"
        }
      ],
      "name": "provideRandomnessProviderFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        }
      ],
      "name": "setGasPriceOfRandomnessProvider",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "setGasOracleAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
],


Lottery: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "FallbackEtherReceiver",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "FinishingStageStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "FinishingStageStopped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "totalReturn",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "profitAmount",
          "type": "uint128"
        }
      ],
      "name": "LotteryEnd",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "LotteryInitialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "RandomnessProviderCalled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "ReferralIDGenerated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "referree",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "ReferralRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "OWNER_ADDRESS",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERCENT",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "completionDate",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ending_profitAmount",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ending_totalReturn",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "exchangeAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lotStorage",
      "outputs": [
        {
          "internalType": "contract LotteryStorage",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lotteryStage",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolAddress",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "prizeClaimersAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "randomnessProvider",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startDate",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct Lottery.LotteryConfig",
          "name": "config",
          "type": "tuple"
        },
        {
          "internalType": "address payable",
          "name": "_poolAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_randomProviderAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_storageAddress",
          "type": "address"
        }
      ],
      "name": "construct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getInitialFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getActiveInitialFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReserves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_ethReserve",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenReserve",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentEthFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ethAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFinishProbability",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "generateReferralID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "referralID",
          "type": "uint256"
        }
      ],
      "name": "registerReferral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "randomSeed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "finish_randomnessProviderCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isMiningAvailable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mine",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "rankingPosition",
          "type": "uint256"
        }
      ],
      "name": "getWinnerPrizeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "finalPrizeAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getWinnerStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isWinner",
          "type": "bool"
        },
        {
          "internalType": "uint32",
          "name": "rankingPosition",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "prizeAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getPlayerIntermediateScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "rankingPosition",
          "type": "uint32"
        }
      ],
      "name": "claimWinnerPrize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUnclaimedPrizes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
],


LotteryStorage: [
    {
      "inputs": [],
      "name": "OWNER_ADDRESS",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERCENT",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "holderData",
      "outputs": [
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "int16",
          "name": "bonusScore",
          "type": "int16"
        },
        {
          "internalType": "uint16",
          "name": "referreeCount",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "referralID",
          "type": "uint256"
        },
        {
          "internalType": "int40",
          "name": "etherContributed",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "timeFactors",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "tokenBalance",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referree_etherContributed",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referree_timeFactors",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referree_tokenBalance",
          "type": "int40"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "holders",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minMaxReferralScores",
      "outputs": [
        {
          "internalType": "int40",
          "name": "referralScore_etherContributed_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referralScore_etherContributed_max",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referralScore_timeFactors_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referralScore_timeFactors_max",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referralScore_tokenBalance_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "referralScore_tokenBalance_max",
          "type": "int40"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minMaxScores",
      "outputs": [
        {
          "internalType": "int40",
          "name": "holderScore_etherContributed_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "holderScore_etherContributed_max",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "holderScore_timeFactors_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "holderScore_timeFactors_max",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "holderScore_tokenBalance_min",
          "type": "int40"
        },
        {
          "internalType": "int40",
          "name": "holderScore_tokenBalance_max",
          "type": "int40"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "int256",
          "name": "__etherContributed_change",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "__timeFactors_change",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "__tokenBalance_change",
          "type": "int256"
        }
      ],
      "name": "updateAndPropagateScoreChanges",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "executeWinnerSelectionAlgorithm",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "addHolder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "removeHolder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getHolderCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "generateReferralID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "referralID",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "int16",
          "name": "referralRegisteringBonus",
          "type": "int16"
        },
        {
          "internalType": "uint256",
          "name": "referralID",
          "type": "uint256"
        }
      ],
      "name": "registerReferral",
      "outputs": [
        {
          "internalType": "address",
          "name": "_referrerAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_seed",
          "type": "uint256"
        }
      ],
      "name": "setRandomSeed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            }
          ],
          "internalType": "struct LotteryStorage.WinnerAlgorithmConfig",
          "name": "_wcfg",
          "type": "tuple"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRandomSeed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minedSelection_algorithmAlreadyExecuted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "minedSelection_getWinnerStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isWinner",
          "type": "bool"
        },
        {
          "internalType": "uint32",
          "name": "rankingPosition",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "rankingPosition",
          "type": "uint32"
        }
      ],
      "name": "minedSelection_isAddressOnWinnerPosition",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minedSelection_getAllWinners",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holderAddr",
          "type": "address"
        }
      ],
      "name": "getPlayerActiveStageScore",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "playerScore",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getWinnerStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isWinner",
          "type": "bool"
        },
        {
          "internalType": "uint32",
          "name": "rankingPosition",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
],


LotteryFactory: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "delegateContract",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_storageFactoryAddress",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "initialFunds",
              "type": "uint256"
            },
            {
              "internalType": "uint128",
              "name": "fundRequirement_denySells",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "finishCriteria_minFunds",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "maxLifetime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "prizeClaimTime",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_buyerRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "burn_defaultRate",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "maxAmountForWallet_percentageOfSupply",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "poolProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "ownerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "minerProfitShare",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minNumberOfHolders",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finishCriteria_minTimeActive",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_initialProbability",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_transaction",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "finish_probabilityIncreaseStep_holder",
              "type": "uint32"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_etherContributed",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_tokenHoldingAmount",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_timeFactor",
              "type": "int16"
            },
            {
              "internalType": "int16",
              "name": "maxPlayerScore_refferalBonus",
              "type": "int16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_scorePart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "randRatio_randPart",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "timeFactorDivisor",
              "type": "uint16"
            },
            {
              "internalType": "int16",
              "name": "playerScore_referralRegisteringBonus",
              "type": "int16"
            },
            {
              "internalType": "bool",
              "name": "finish_resetProbabilityOnStop",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "prizeSequenceFactor",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_winnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "prizeSequence_sequencedWinnerCount",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "initialTokenSupply",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "endingAlgoType",
              "type": "uint8"
            },
            {
              "internalType": "uint32[]",
              "name": "winnerProfitShares",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct Lottery.LotteryConfig",
          "name": "config",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "randomnessProvider",
          "type": "address"
        }
      ],
      "name": "createNewLottery",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "newLottery",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
],


StorageFactory: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "delegateContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "createNewStorage",
      "outputs": [
        {
          "internalType": "address",
          "name": "newStorage",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]


};



