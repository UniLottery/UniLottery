/**
 *  Main file, which gets called on document onload.
 *  This file fills up and controls the dynamic browser-side UI.
 */

// Public web3 variable.
// If NULL, then Ethereum hasn't been enabled yet / is not installed.
var web3 = null;
var accounts = null;

// UniLottery-specific variables.
const POOL_ADDRESS_MAINNET = "0xEC0eb8D86D735C54c7523f30fD45D8d8F178cD8b";
const POOL_ADDRESS_ROPSTEN = "0x11";
const POOL_ADDRESS_RINKEBY = "0x499389bfdbBda63597FEf038aB505Cb5400CF5b7";

var MainPool = null;


// Set up Web3. Called on window.onload.
async function setupWeb3()
{
    // Modern dapp browsers...
    if( window.ethereum ) {
        web3 = new Web3( window.ethereum );
        console.log("Integration: window.ethereum");
    }
    // Legacy dapp browsers...
    else if( window.web3 ) {
        web3 = new Web3( window.web3.currentProvider );
        console.log( "Integration: window.currentProvider" );
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        alert( 'No Ethereum browser detected.' );
        throw  'No Ethereum browser detected.';
    }

    console.log( "Web3 Version:", web3.version );

    // Setup the UniLottery Environment, according to Network ID.
    var id = await web3.eth.net.getId();

    // Network Info Setup.
    str = "[ Network: <span style=\"color:red\">";

    // MainNet: 1, Ropsten: 3, Rinkeby: 4.
    if( id == 1 ) {
        paddr = POOL_ADDRESS_MAINNET;
        str += "MainNet</span> ]";
    }
    else if( id == 3 ) {
        paddr = POOL_ADDRESS_ROPSTEN;
        str += "Ropsten</span> ]";
    }
    else if( id == 4 ) {
        paddr = POOL_ADDRESS_RINKEBY;
        str += "Rinkeby</span> ]";
    }
    else {
        str += "Unknown</span> ]";
    }

    // Set the contract.
    MainPool = new web3.eth.Contract(
        UniLotteryContractABI.UniLotteryPool, paddr );

    document.getElementById("NetworkInfo").innerHTML = str;
}


// Requests the account access.
// Called when button "Enable Ethereum" gets pressed.
async function enableEthAccounts()
{
    try {
        await window.ethereum.enable();
        accounts = await web3.eth.getAccounts();

        // Set default account for all transaction "from"s.
        web3.eth.defaultAccount = accounts[ 0 ];

        // On successful enable, remove the button.
        document.getElementById("button_unlockWallet").innerHTML =
            "[ Wallet: "+ accounts[ 0 ] +" ]";
    }
    catch (error) {
        // User denied account access...
    }
}


// Load the Current Lottery Config into a table.
const showChainNextLotteryConfig = async () =>
{
    var res = await MainPool.methods.getNextLotteryConfig.call();
    var cfg = await res.call();
    showLotteryConfig( cfg );
}

// Get the Default Lottery Config.
function showLotteryConfig( cfg )
{
    cont = document.getElementById("configContainer");
    table = getLotteryConfigTable( cfg );
    cont.appendChild( table );
}


// Animate the Title (UniLottery).
function animateTitle()
{
    title = document.getElementById("title");
    if( !title.counter )
        title.counter = 1;

    if( title.counter % 2 == 0 ) {
        document.getElementById("title_pic1").src = "ul-logo.png";
        document.getElementById("title_pic2").src = "ul-logo-2.png";
        document.getElementById("title_uni").style.color = "#ab2eab";
        document.getElementById("title_lottery").style.color = "#0ccc33";
    }
    else {
        document.getElementById("title_pic1").src = "ul-logo-2.png";
        document.getElementById("title_pic2").src = "ul-logo.png";
        document.getElementById("title_uni").style.color = "#0ccc33";
        document.getElementById("title_lottery").style.color = "#ab2eab";
    }

    title.counter++;
    setTimeout( animateTitle, 1000 );   // Run again after 1 second.
}


// Generate a Referral ID for current account.
// Main Page must be loaded to Contents.
async function currLot_generateRef()
{
    if( !accounts ) {
        alert("Unlock the wallet first!");
        return;
    }

    // Get current lottery, and send transaction.
    lot = await MainPool.methods.mostRecentLottery().call();
    lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, lot );

    lot.methods.generateReferralID().send( { from: accounts[0] } );
}


// Register a Referral ID.
// Main Page must be loaded to Contents.
async function currLot_registerRef()
{
    if( !accounts ) {
        alert("Unlock the wallet first!");
        return;
    }

    cont = document.getElementById("content");

    form = "<form action=\"javascript:currLot_registerRef_onSubmit()\">"+
           "<input type=\"text\" class=\"referralIdInput\">" +
           "<input type=\"submit\" value=\"Submit\"></form>";

    cont.getElementsByClassName("registerRef")[0].innerHTML = form;
}

async function currLot_registerRef_onSubmit()
{
    if( !accounts ) {
        alert("Unlock the wallet first!");
        return;
    }

    cont = document.getElementById("content");

    try{
        // It's in base64, so decode.
        val = cont.getElementsByClassName("referralIdInput")[0].value;
        console.log(val);

        // Get current lottery, and try to input the Referral ID.
        lot = await MainPool.methods.mostRecentLottery().call();
        lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, lot );

        // Send transaction from the default account.
        lot.methods.registerReferral( val ).send( { from: accounts[0] } );
    }
    catch( err ) {
        cont.getElementsByClassName("registerRef_msg")[0].innerHTML =
            "<p>Invalid referral ID !</p>";
    }
}


// Load Main Page into the contents.
async function navbar_mainPage()
{
    var cont = document.getElementById("content");
    cont.innerHTML = document.getElementById("div_MainPage").innerHTML;

    // Check most recent lottery, and show it's data.
    // Also, while ETH is calling, all contents of div_MainPage's
    // innerHTML will be fully loaded!
    mostRecentLot = await MainPool.methods.mostRecentLottery().call();

    if( !mostRecentLot ||
        mostRecentLot == "0x0000000000000000000000000000000000000000" )
    {
        cont.getElementsByClassName("currentLottery")[0].innerHTML =
            "<p>No lotteries have been deployed yet!</p>"
        return;
    }

    var lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, 
                                 mostRecentLot );

    setupLotteryButtons( cont, lot, showCurrentLotteryData,
                         showCurrentLotteryData );
}


// Animate the "claim prize" button.
var priv_animatePrizeButton_session = null;

async function animateClaimPrizeButton( cont, session )
{
    if( !priv_animatePrizeButton_session )
        priv_animatePrizeButton_session = session;

    if( priv_animatePrizeButton_session != session ){
        return;
    }

    butt = cont.getElementsByClassName("playButton")[0];
    if( !butt ) {
        return;
    }

    var bText = "CLAIM PRIZE!";
    var htmlStr = "";

    for( i = 0; i < bText.length; i++ )
    {
        // Generate a random color for this letter:
        var color = '#' + ( "000000" + 
            Math.floor( Math.random() * Math.pow(2, 24) )
            .toString( 16 ) ).substr( -6 );

        htmlStr += "<span style=\"color:"+ color +"\">"+ 
                   bText[ i ] +"</span>";
    }

    // Set border & padding.
    //butt.style.padding = "10px";
    butt.style.border = "thick dashed #" + ( "000000" + 
            Math.floor( Math.random() * Math.pow(2, 24) )
            .toString( 16 ) ).substr( -6 );

    butt.innerHTML = htmlStr;

    // Run again after 0.5s.
    setTimeout( animateClaimPrizeButton, 500, cont, session );
}


// "Play" button's default action.
var priv_playButtonAction = () => {};

function playButton_action() {
    if( !accounts ) {
        alert("Unlock the wallet first!");
        return;
    }
    priv_playButtonAction();
};


// Setup the Lottery Interaction Buttons.
// Main Page, or Lottery Info must be loaded into Contents.
//
async function setupLotteryButtons( cont, lot, mineAction, claimPrizeAction,
                                    lotteryInfoMode )
{
    lotStage = await lot.methods.lotteryStage().call();
    playBut = cont.getElementsByClassName("playButton")[0];

    // Change button text according to lottery stage.
    // ACTIVE or ACTIVE-FINISHING stages.
    if( lotStage == "1" || lotStage == "2" ) {
        playBut.innerHTML = "[ TRADE! ]";
        playBut.setAttribute( "href", 
            "https://app.uniswap.org/#/swap?outputCurrency="+
            mostRecentLot );

        // Make referral section visible.
        cont.getElementsByClassName("referralSection")[0]
            .style.display = "block";

        if( accounts )
        {
            stor = await lot.methods.lotStorage().call()
            stor = new web3.eth.Contract(
                UniLotteryContractABI.LotteryStorage, stor );

            holderData = await stor.methods.holderData(accounts[0]).call();

            // If referral ID was already generated.
            if( holderData.referralID != "0" ) {
                cont.getElementsByClassName("generateRef")[0].innerHTML =
                    "<p>[ Your Referral ID: "+ holderData.referralID +
                    " ]<p>";
            }

            // If referral was already registered.
            if( holderData.referrer !=
                "0x0000000000000000000000000000000000000000" )
            {
                cont.getElementsByClassName("registerRef")[0].innerHTML =
                    "<p>[ You've been referred by: "+ holderData.referrer +
                    " ]<p>";
            }
        }
    }
    else if( lotStage == "3" ) {
        isMiningAvailable = await lot.methods.isMiningAvailable().call();

        if( isMiningAvailable ) {
            playBut.innerHTML = "[ MINE! ]";
            priv_playButtonAction = mineAction;
        }
    }
    else if( lotStage == "4" ) 
    {
        playBut.innerHTML = "[ CLAIM PRIZE! ]";
        priv_playButtonAction = claimPrizeAction;

        if( lotteryInfoMode && accounts ) {
            winfo = cont.getElementsByClassName("li_winInfo_p")[0];

            winStat = await lot.methods.getWinnerStatus( accounts[0] ).call();
            prizeAlreadyClaimed = await
                lot.methods.prizeClaimersAddresses( accounts[0] ).call();

            if( winStat.isWinner && winStat.prizeAmount != "0" &&
                !prizeAlreadyClaimed ) 
            {
                playBut.style.display = "block";
                playBut.style.fontSize = "400%";

                priv_animatePrizeButton_session = Date.now();
                animateClaimPrizeButton( 
                    cont, priv_animatePrizeButton_session );

                winfo.style.display = "block";
                winfo.innerHTML = "<span style=\"font-size: 200%\">"+
                    "YOU WON: <span style=\"font-weight: bold\">"+ 
                    web3.utils.fromWei( winStat.prizeAmount ) +
                    "</span> ETH !</span><br>Ranking position: "+
                    winStat.rankingPosition + "<br><hr><br>";
            }
            else {
                playBut.style.display = "none";
                winfo.style.display = "block";

                if( winStat.isWinner && winStat.prizeAmount != "0" &&
                    prizeAlreadyClaimed )
                    winfo.innerHTML = 
                        "You have already claimed your prize!<br><hr><br>";
                else
                    winfo.innerHTML = 
                        "Unfortunately, you didn't win this time.<br><hr><br>";
            }
        }
    } 
}


// Execute the Holder Data Load.
async function lot_checkHolderData( cont )
{
    if( !cont )
        cont = document.getElementById("content");

    cont.getElementsByClassName("li_holderData_div")[0]
        .innerHTML = "Loading...";

    var addrToCheck = cont.getElementsByClassName("li_check_addr")[0].value;
    var lot = cont.getElementsByClassName("li_lotteryAddress")[0].innerHTML;
    var htmlStr="<p style='font-weight:bold'>Address: "+addrToCheck+"</p>";

    try {
        lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, lot );

        var stor = await lot.methods.lotStorage().call()
        stor = new web3.eth.Contract(
            UniLotteryContractABI.LotteryStorage, stor );

        var holderData = await stor.methods.holderData(addrToCheck).call();
        if( !holderData.tokenBalance || holderData.tokenBalance == "0" )
            htmlStr +=
                "<p style='color:red'>Address is not a token holder.</p>";

        // If completion stage, get winner status too.
        var lotStage = await lot.methods.lotteryStage().call();

        if( lotStage == '4' ) {
            winStat = await lot.methods.getWinnerStatus( addrToCheck ).call();
            prizeAlreadyClaimed = await
                lot.methods.prizeClaimersAddresses( addrToCheck ).call();

            if( winStat.isWinner && winStat.prizeAmount != "0" ) {
                htmlStr +=
                    "<p>Address has won: <span style='font-weight:bold;"+
                    "font-size:140%;'>"+ 
                    web3.utils.fromWei( winStat.prizeAmount ) +
                    " ETH!</span><br>Ranking Position: "+
                    winStat.rankingPosition + 
                    ( !prizeAlreadyClaimed ? "" :
                      "<br>This address has already claimed it's prize." )+
                    "</p><br>";
            }
            else {
                htmlStr += "<p>Address hasn't won anything.</p><br>";
            }
        }

        // Obtain InterMediate Score.
        var val = "0";
        try {
            val = await lot.methods.getPlayerIntermediateScore(
                        addrToCheck ).call();
        } catch { }

        htmlStr += "<p>Holder's Intermediate Score: <span "+
            "style='font-weight:bold;font-size:140%'>"+
            val +"</span></p>";

        // Obtain full holder data.
        htmlStr += "<p>Full Holder Data (advanced):</p>"+
                    loadHolderData( holderData ).outerHTML;

        cont.getElementsByClassName("li_holderData_div")[0]
            .innerHTML = htmlStr;
    }
    catch {
        cont.getElementsByClassName("li_holderData_div")[0].innerHTML =
            "<p style:'color:red'>Invalid address!</p>";
    }
}


// Show Current Lottery Data.
async function showCurrentLotteryData()
{
    lot = await MainPool.methods.mostRecentLottery().call();
    navbar_loadLotteryInfo( lot );
}

// Refresh Lottery Info.
async function refreshLotteryInfo()
{
    cont = document.getElementById("content");
    lotAddr = cont.getElementsByClassName("li_lotteryAddress")[0].innerHTML;
    if( lotAddr )
        navbar_loadLotteryInfo( lotAddr );
}


// Load Lottery Info into contents.
async function navbar_loadLotteryInfo( lotAddr )
{
    // Set content as "loading";
    document.getElementById("content").innerHTML = "<p>Loading...</p>";

    // Fill the "invisible" element.
    var cont = document.createElement("div");
    cont.innerHTML = document.getElementById("div_lotteryInfo").innerHTML;

    var lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, lotAddr );
    
    var stor = await lot.methods.lotStorage().call();
    stor = new web3.eth.Contract( UniLotteryContractABI.LotteryStorage,
                                  stor );

    // Setup the Lottery Action Buttons.
    setupLotteryButtons( cont, lot, 
        () => { lot.methods.mine().send( { from: accounts[0] } ); },
        () => { lot.methods.claimWinnerPrize( 0 ).send( { from: accounts[0] } ) },
        true
    );

    // Get current stage, holder count, current ETH funds, etc.
    lotteryStage = await lot.methods.lotteryStage().call();
    currentEthFunds = await lot.methods.getCurrentEthFunds().call();
    startDate = await lot.methods.startDate().call();
    completionDate = await lot.methods.completionDate().call();
    finishProbablity = await lot.methods.getFinishProbability().call();
    ending_profitAmount= await lot.methods.ending_profitAmount().call();
    ending_totalReturn = await lot.methods.ending_totalReturn().call();
    lotteryContractBalance = await web3.eth.getBalance( lot._address );
    isMiningAvailable = await lot.methods.isMiningAvailable().call();

    holderCount = await stor.methods.getHolderCount().call();

    lotConfig = null;

    // Get lottery config from events.
    MainPool.events.LotteryStarted( {
        filter: { lottery: [ lot._address ] },
        fromBlock: 0
    }, async ( error, evt ) => {
        if( !error )
            var lotConfig = evt.returnValues.config;
        else
            throw error;

        // Compute the Winner Profit Share;
        var winnerProfitShare =
            ( 100 * PERCENT ) - 
            parseInt( lotConfig.poolProfitShare ) -
            parseInt( lotConfig.ownerProfitShare ) - 
            parseInt( lotConfig.minerProfitShare );

        // Function to compute net winner prize funds (surplus funds)
        // for given total funds. Return: BigNum.
        var getWinnerSurplusFunds = _totFunds => {
            return new web3.utils.BN( _totFunds ).sub(
                new web3.utils.BN( lotConfig.initialFunds )
            ).mul( new web3.utils.BN( winnerProfitShare )
            ).div( new web3.utils.BN( 100 * PERCENT ) );
        };

        // Now all data is gathered. Let's fill the UI!
        cont.getElementsByClassName("li_lotteryAddress")[0].innerHTML =
            lot._address;

        cont.getElementsByClassName("li_LotEtherscan")[0].href =
            "https://etherscan.io/address/"+ lot._address;

        cont.getElementsByClassName("li_StorEtherscan")[0].href =
            "https://etherscan.io/address/"+ stor._address;

        cont.getElementsByClassName("li_UniswapInfo")[0].href =
            "https://uniswap.info/token/"+ lot._address;

        // Fill the finishing conditions.
        cont.getElementsByClassName("li_finCond_timeSinceStart")[0].innerHTML=
            unixToTime( lotConfig.finishCriteria_minTimeActive );

        cont.getElementsByClassName("li_finCond_numberOfHolders")[0].innerHTML=
            lotConfig.finishCriteria_minNumberOfHolders;

        cont.getElementsByClassName("li_finCond_surplusEth")[0].innerHTML =
            web3.utils.fromWei( getWinnerSurplusFunds(
                lotConfig.finishCriteria_minFunds ) ) + " ETH";

        cont.getElementsByClassName("li_winFundsDenySells")[0].innerHTML =
            web3.utils.fromWei( getWinnerSurplusFunds(
                lotConfig.fundRequirement_denySells ) ) + " ETH";

        // Fill the winner profit share percentages.
        var elems = cont.getElementsByClassName("li_winFundPercentage");
        for( j = 0; j < elems.length; j++ ) {
            elems[ j ].innerHTML =
                ( winnerProfitShare / PERCENT ).toString() + "%";
        }

        // Fill the Burning Info.
        cont.getElementsByClassName("li_burn_buy")[0].innerHTML =
            ( lotConfig.burn_buyerRate / PERCENT ).toString() + "%";

        cont.getElementsByClassName("li_burn_sell")[0].innerHTML =
            ( lotConfig.burn_defaultRate / PERCENT ).toString() + "%";


        // If completion stage:
        // Load current winner funds. Diffent for completion.
        if( lotteryStage == "4" ) {
            cont.getElementsByClassName("li_winnerFunds")[0].innerHTML =
                web3.utils.fromWei( lotteryContractBalance ) + " ETH";

            cont.getElementsByClassName("li_completionDate")[0].innerHTML =
                unixToTime( completionDate, true );
            cont.getElementsByClassName("li_completionDate_p")[0]
                .style.display = "table-row";   // Make visible.

            cont.getElementsByClassName("li_ending_profitAmount")[0]
                .innerHTML = web3.utils.fromWei(ending_profitAmount)+" ETH";
            cont.getElementsByClassName("li_ending_profitAmount_p")[0]
                .style.display = "table-row";   // Make visible.
        }
        // Other stages - winner funds from Uniswap.
        else {
            cont.getElementsByClassName("li_winnerFunds")[0].innerHTML =
                web3.utils.fromWei( 
                    getWinnerSurplusFunds( currentEthFunds ) ) + " ETH";
        }

        // All stages:
        cont.getElementsByClassName("li_startDate")[0].innerHTML =
            unixToTime( startDate, true );

        cont.getElementsByClassName("li_holderCount")[0].innerHTML =
            holderCount;

        // Uptime: if Completion Date is set, use it.
        daet = ( completionDate == "0" ? 
                 ( Date.now() / 1000 ) : parseInt( completionDate ) );
        cont.getElementsByClassName("li_uptime")[0].innerHTML =
            unixToTime( daet - parseInt( startDate ) );

        // Load stage-specific data.
        if( lotteryStage == "1" ) {
            stageStr = "Active";
        }
        else if( lotteryStage == "2" ) {
            stageStr = "Active - Finishing";

            // Get finish probability.
            cont.getElementsByClassName("li_FinProb")[0].innerHTML =
                ( parseInt( finishProbablity ) / PERCENT ).toString()+"%";
            cont.getElementsByClassName("li_FinProb_p")[0]
                .style.display = "table-row";   // Make visible.
        }
        else if( lotteryStage == "3" ) {
            stageStr = "Mining";

            // Set WinInfo.
            winfo = cont.getElementsByClassName("li_winInfo_p")[0];
            winfo.style.display = "block";

            isMiningAvailable=await lot.methods.isMiningAvailable().call();

            if( isMiningAvailable ) {
                var profitAmount = null;
                var secondStep = false;

                if( ending_profitAmount != "0" ) {
                    profitAmount = new web3.utils.BN( ending_profitAmount );
                    secondStep = true;
                }
                else {
                    profitAmount = 
                        new web3.utils.BN( currentEthFunds ).sub(
                        new web3.utils.BN( lotConfig.initialFunds ) );
                }

                miningReward = ( profitAmount.mul(
                    new web3.utils.BN( lotConfig.minerProfitShare ) ) )
                    .div( new web3.utils.BN( PERCENT.toString() + "00" ) );

                mainReward = ( 
                    miningReward.mul( new web3.utils.BN( 80 * PERCENT ) )
                ).div( new web3.utils.BN( PERCENT.toString() + "00" ) );

                additionalReward = miningReward.sub( mainReward );

                winfo.innerHTML = ( !secondStep ? (
                    "Main Mining Reward: <span style=\"font-weight:bold\">"+
                    web3.utils.fromWei( mainReward ) +" ETH</span>" ) : (
                    "Second Step Reward: <span style=\"font-weight:bold\">"+
                    web3.utils.fromWei( additionalReward ) )+" ETH</span>"
                ) + "<hr><br>";
            }
            else {
                winfo.innerHTML = "<p>Mining is not currently available"+
                                  " - currently waiting for Random Seed.";
            }
        }
        else if( lotteryStage == "4" ) {
            stageStr = "Completed";
            // WinInfo is already set for this stage, in button setup.
        }
        else {
            stageStr = "Invalid";
        }

        cont.getElementsByClassName("li_lotteryStage")[0].innerHTML =
            stageStr;

        // Set Holder Data.
        if( accounts ) {
            cont.getElementsByClassName("li_check_addr")[0].value = 
                accounts[ 0 ];

            await lot_checkHolderData( cont );
        }

        // Finally, load our lottery config!
        cont.getElementsByClassName("li_lotteryConfig_cont")[0].appendChild(
            getLotteryConfigTable( lotConfig ) );

        // Swap the "content" div with loaded div.
        document.getElementById("content").innerHTML = "";
        document.getElementById("content").appendChild( cont );
    } );
}


// Load specific lottery page from it's address, obtained in submit form.
async function form_openLotteryPage()
{
    var addr =  document.getElementById("content")
                        .getElementsByClassName("ll_open_addr")[0].value;
    try {
        var lot = new web3.eth.Contract( UniLotteryContractABI.Lottery,
                                         addr );

        // Check if contract is really a lottery.
        var name = await lot.methods.name().call();
        var symbol = await lot.methods.symbol().call();
        var ls = await lot.methods.lotteryStage().call();

        if( name != "UniLottery Token" || symbol != "ULT" )
            throw 1;
    }
    catch {
        document.getElementById("content")
                .getElementsByClassName("ll_open_addr").innerHTML =
                "<p>Invalid contract on this address!</p>";
    }

    // Load lottery page of this address.
    await navbar_loadLotteryInfo( addr );
}


// Load other Sections into contents.
async function navbar_lotteryList()
{
    cont = document.getElementById("content");
    cont.innerHTML = document.getElementById("div_lotteryList").innerHTML;

    // Get no.of lotteries, and loop!
    numberOfLotteries =
        await MainPool.methods.allLotteriesPerformed_length().call();

    // Setup the Table to which we'll put'em.
    tabl = cont.getElementsByClassName("ll_lotteryListTable")[0];

    for( i = 0; i < parseInt( numberOfLotteries ); i++ )
    {
        // Get basic data: lottery stage, startdate, isWinner.
        lot = await MainPool.methods.allLotteriesPerformed( i ).call()
        lot = new web3.eth.Contract( UniLotteryContractABI.Lottery, lot );

        // Create new TableRow.
        row = document.createElement("tr");
        row.appendChild( document.createElement("td") );
        row.appendChild( document.createElement("td") );
        row.appendChild( document.createElement("td") );
        row.appendChild( document.createElement("td") );

        tabl.appendChild( row );

        // Load lottery address & link.
        row.children[ 0 ].innerHTML =
            "<a href='#' onclick='navbar_loadLotteryInfo(\""+ 
            lot._address+"\");return false;'>"+lot._address+"</a>";

        row.children[ 1 ].innerHTML = "Loading";
        row.children[ 2 ].innerHTML = "Loading";

        // Load Start Date.
        val = await lot.methods.startDate().call();
        row.children[ 1 ].innerHTML = unixToTime( val, true );

        // Load lottery stage.
        val = await lot.methods.lotteryStage().call();
        if( val == '1' ) {
            row.children[ 2 ].innerHTML =
                "<span style='color:lime'>Active</span>";
        }
        else if( val == '2' ) {
            row.children[ 2 ].innerHTML =
                "<span style='color:yellow'>Finishing</span>";
        }
        else if( val == '3' ) {
            row.children[ 2 ].innerHTML =
                "<span style='color:cyan'>Mining</span>";
        }
        else if( val == '4' ) {
            row.children[ 2 ].innerHTML =
                "<span style='color:red'>Completed</span>";
        }
        else {
            row.children[ 2 ].innerHTML =
                "<span style='color:white'>INVALID</span>";
        }

        // Load WinnerD4T4.
        if( accounts ) {
            val = await lot.methods.getWinnerStatus( accounts[0] ).call();
            prizeAlreadyClaimed = await lot.methods
                .prizeClaimersAddresses( accounts[0] ).call();

            if( val.isWinner && val.prizeAmount != "0" &&
                !prizeAlreadyClaimed )
                row.children[ 3 ].innerHTML =
                    "<span style='color:yellow;font-weight:bold'>"+
                    "YOU WON: "+ web3.utils.fromWei( val.prizeAmount )+
                    " ETH!</span>";
        }
    }
}


async function navbar_stats()
{
    document.getElementById("content").innerHTML = "<p>Loading...</p>";

    var cont = document.getElementById("div_poolStats").cloneNode( true );

    // Fetch the needed data from the Main Pool.
    totalPoolFunds = await MainPool.methods.totalPoolFunds().call();
    lotteryRunMode = await MainPool.methods.lotteryRunMode().call();
    lastAutoLotteryStart = 
        await MainPool.methods.autoMode_lastLotteryStarted().call();
    lastAutoLotteryEnd =
        await MainPool.methods.autoMode_lastLotteryFinished().call();

    if( lotteryRunMode == '0' )
        lotteryRunMode = "Manual";
    else if( lotteryRunMode == '1' )
        lotteryRunMode = "Auto";
    else
        lotteryRunMode = "INVALID";

    // Fill the G00i.
    cont.getElementsByClassName("ps_totalPoolFunds")[0].innerHTML =
        web3.utils.fromWei( totalPoolFunds ) + " ETH";

    cont.getElementsByClassName("ps_lotteryRunMode")[0].innerHTML =
        lotteryRunMode;

    cont.getElementsByClassName("ps_lastAutoLotteryStart")[0].innerHTML =
        unixToTime( lastAutoLotteryStart, true );

    cont.getElementsByClassName("ps_lastAutoLotteryEnd")[0].innerHTML =
        unixToTime( lastAutoLotteryEnd, true );

    cont.getElementsByClassName("ps_autoNextLotteryDelay")[0].innerHTML =
        await MainPool.methods.autoMode_nextLotteryDelay().call();

    // Fill lottery configs.
    nextLotConfig = await MainPool.methods.getNextLotteryConfig().call();

    cont.getElementsByClassName("ps_nextLotteryConfig")[0].appendChild(
        getLotteryConfigTable( nextLotConfig ) );

    // Fill default lottery config.
    cont.getElementsByClassName("ps_defaultLotteryConfig")[0].appendChild(
        getLotteryConfigTable( LCF_getLotteryConfig() ) );

    // Swap with real content.
    cont.style.display = "block";
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild( cont );
}


async function navbar_about()
{
    var cont = document.getElementById("content");
    cont.innerHTML = document.getElementById("div_about").innerHTML;

    var lf = await MainPool.methods.lotteryFactory().call();
    var sf = await MainPool.methods.storageFactory().call();
    var rp = await MainPool.methods.randomnessProvider().call();

    var limp = await ( new web3.eth.Contract(
        UniLotteryContractABI.LotteryFactory, lf ) )
        .methods.delegateContract().call();

    var simp = await ( new web3.eth.Contract(
        UniLotteryContractABI.StorageFactory, sf ) )
        .methods.delegateContract().call();

    // fill the contract addresses.
    cont.getElementsByClassName("ab_lotteryFactory")[0].href =
        "https://etherscan.io/address/" + lf;

    cont.getElementsByClassName("ab_storageFactory")[0].href =
        "https://etherscan.io/address/" + sf;

    cont.getElementsByClassName("ab_randomProvider")[0].href =
        "https://etherscan.io/address/" + rp;

    cont.getElementsByClassName("ab_mainPool")[0].href =
        "https://etherscan.io/address/" + MainPool._address;

    cont.getElementsByClassName("ab_lotteryImpl")[0].href =
        "https://etherscan.io/address/" + limp;

    cont.getElementsByClassName("ab_storageImpl")[0].href =
        "https://etherscan.io/address/" + simp;

    var lot = await MainPool.methods.mostRecentLottery().call();

    if( lot != "0x0000000000000000000000000000000000000000" )
    {
        var stor = await ( new web3.eth.Contract(
        UniLotteryContractABI.Lottery, lot ) )
        .methods.lotStorage().call();

        cont.getElementsByClassName("ab_lotteryStub")[0].href =
            "https://etherscan.io/address/" + lot;

        cont.getElementsByClassName("ab_storageStub")[0].href =
            "https://etherscan.io/address/" + stor;
    }
}

 
// Load Start UI content.
window.onload = async () =>
{
    // Set up the UI: set the Title animation.
    animateTitle();

    // Set up Web3.js.
    await setupWeb3();

    // Load Main Page first.
    navbar_mainPage();
}



