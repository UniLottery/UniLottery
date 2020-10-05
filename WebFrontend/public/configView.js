/**
 *  Contains functions to turn a given Lottery Config into an HTML table,
 *  and to turn a given Holder Data into an HTML table.
 */

// Tablify holder data.
function loadHolderData( hdata )
{
    hdata = copyWeb3Struct( hdata );

    // Function to turn precisionified number to ETH (or ULT).
    var turnToEth = ( val, suffix ) => {
        hdata[ val ] = web3.utils.fromWei(
            new web3.utils.BN( hdata[ val ] ).mul(
                new web3.utils.BN( web3.utils.toWei("1","ether") ).div(
                    new web3.utils.BN( suffix=="ETH" ? '10000' : '1' ) )
            )
        ) +" "+ suffix;
    }

    // Change properties to more readable form.
    turnToEth( 'etherContributed', 'ETH' );
    turnToEth( 'tokenBalance', 'ULT' );

    hdata.referralID = hdata.referralID;// atob( hdata.referralID );

    turnToEth( 'referree_etherContributed', 'ETH' );
    turnToEth( 'referree_tokenBalance', 'ULT' );

    // Table-ify the data.
    return priv_tableifyWeb3Struct( hdata );
}


// Helpers.
// Convert a Unix Timestamp to time or date.
function unixToTime( unix_timestamp, fullDate )
{
    if( typeof(unix_timestamp) == 'string' )
        unix_timestamp = parseInt( unix_timestamp );

    if( fullDate ) {
        str = ( new Date(unix_timestamp * 1000) ).toISOString();
        return str.substr(0,10)+" "+str.substr(11,8);
    }

    var days = Math.floor( unix_timestamp / (3600 * 24) );
    var hours = Math.floor( ( unix_timestamp % (3600 * 24) ) / 3600 );
    var minutes = Math.floor( ( unix_timestamp % 3600 ) / 60 );
    var seconds = Math.floor( unix_timestamp % 60 );

    return  ( days != 0 ? days + " days, " : "" ) +
            hours +" hours, "+ minutes +" minutes, "+ seconds +" seconds";
}


function fixEthers( cfg, prop ) {
    cfg[ prop ] = web3.utils.fromWei( cfg[ prop ] ) + " ETH";
}

function fixPercentage( cfg, prop ) {
    cfg[ prop ] = ( parseInt( cfg[ prop ] ) / PERCENT ).toString() + "%";
}

function fixTime( cfg, prop ) {
    cfg[ prop ] = unixToTime( cfg[ prop ] );
}


// Tablify lottery config.
function getLotteryConfigTable( cfg )
{
    cfg = copyWeb3Struct( cfg );

    // Change properties to more readable form.
    fixEthers( cfg, "initialFunds" );
    fixEthers( cfg, "fundRequirement_denySells" );
    fixEthers( cfg, "finishCriteria_minFunds" );

    fixTime( cfg, "maxLifetime" );
    fixTime( cfg, "prizeClaimTime" );
    fixTime( cfg, "REQUIRED_TIME_WAITING_FOR_RANDOM_SEED" );
    fixTime( cfg, "finishCriteria_minTimeActive" );
    fixTime( cfg, "timeFactorDivisor" );

    // Compute the Winner Profit Share;
    cfg.winnerProfitShare =
        ( 100 * PERCENT ) - 
        parseInt( cfg.poolProfitShare ) -
        parseInt( cfg.ownerProfitShare ) - 
        parseInt( cfg.minerProfitShare );

    fixPercentage( cfg, "burn_buyerRate" );
    fixPercentage( cfg, "burn_defaultRate" );
    fixPercentage( cfg, "maxAmountForWallet_percentageOfSupply" );
    fixPercentage( cfg, "poolProfitShare" );
    fixPercentage( cfg, "ownerProfitShare" );
    fixPercentage( cfg, "minerProfitShare" );
    fixPercentage( cfg, "winnerProfitShare" );
    fixPercentage( cfg, "finish_initialProbability" );
    fixPercentage( cfg, "finish_probabilityIncreaseStep_transaction" );
    fixPercentage( cfg, "finish_probabilityIncreaseStep_holder" );
    fixPercentage( cfg, "prizeSequenceFactor" );

    cfg.finish_resetProbabilityOnStop =
        cfg.finish_resetProbabilityOnStop.toString();

    if( cfg.endingAlgoType == '0' )
        cfg.endingAlgoType = 'MinedWinnerSelection';
    else if( cfg.endingAlgoType == '1' )
        cfg.endingAlgoType = 'WinnerSelfValidation';
    else if( cfg.endingAlgoType == '2' )
        cfg.endingAlgoType = 'RolledRandomness';
    else
        cfg.endingAlgoType = 'Invalid';

    if( cfg.winnerProfiShares ) {
        for( i = 0; i < cfg.winnerProfitShares.length; i++ ) {
            cfg.winnerProfitShares[ i ] = 
                ( parseInt( cfg.winnerProfitShares[ i ] ) / PERCENT )
                .toString() + "%";
        }
    }
    else {
        delete cfg.winnerProfiShares;
    }

    // Table-ify the cfg.
    return priv_tableifyWeb3Struct( cfg );
}


// Create a normal (non-readonly) copy of the web3 struct.
function copyWeb3Struct( cfg )
{
    regecks = /^\d+$/;
    nuStruct = {};

    for( const [key, value] of Object.entries( cfg ) ) {
        if( !regecks.test( key ) )
            nuStruct[ key ] = value;
    }

    return nuStruct;
}

// Table-ify the web3 struct.
function priv_tableifyWeb3Struct( cfg )
{
    regecks = /^\d+$/;
    tabcfg = [];

    for( const [key, value] of Object.entries( cfg ) ) {
        if( !regecks.test( key ) ) 
            tabcfg.push( { "Param": key, "Value": value } );
    }

    // Return the table.
    return buildHtmlTable( tabcfg );
}


// JS Table Generator
// https://stackoverflow.com/questions/5180382/convert-json-data-to-a-html-table

var _table_ = document.createElement('table'),
    _tr_    = document.createElement('tr'),
    _th_    = document.createElement('th'),
    _td_    = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable( arr )
{
    var table = _table_.cloneNode(false),
        columns = addAllColumnHeaders(arr, table);
    for (var i = 0, maxi = arr.length; i < maxi; ++i) {
        var tr = _tr_.cloneNode(false);
        for (var j = 0, maxj = columns.length; j < maxj; ++j) {
            var td = _td_.cloneNode(false);
            cellValue = arr[i][columns[j]];
            td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders( arr, table )
{
    var columnSet = [],
        tr = _tr_.cloneNode(false);
    for (var i = 0, l = arr.length; i < l; i++) {
        for (var key in arr[i]) {
            if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
                columnSet.push(key);
                var th = _th_.cloneNode(false);
                th.appendChild(document.createTextNode(key));
                tr.appendChild(th);
            }
        }
    }
    table.appendChild(tr);
    return columnSet;
}



