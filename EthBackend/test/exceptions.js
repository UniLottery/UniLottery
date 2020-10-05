// Library for conveniently catching and testing EVM exceptions.
// Enhanced version from this StackExchange answer:
// https://ethereum.stackexchange.com/questions/48627/how-to-catch-revert-error-in-truffle-test-javascript

const PREFIX = "VM Exception while processing transaction: ";

async function tryCatch( promise, message, testMsg ) {
    try {
        await promise;
        throw null;
    }
    catch (error) {
        assert( error, testMsg + " : Expected an error but did not get one" );
        assert( error.message.startsWith(PREFIX + message), testMsg + 
                " : Expected an error starting with '" + PREFIX + message + 
                "' but got '" + error.message + "' instead" );
    }
};

module.exports = {
    catchRevert            : async function(promise, testMsg) {
        await tryCatch(promise, "revert"           , testMsg);},

    catchOutOfGas          : async function(promise, testMsg) {
        await tryCatch(promise, "out of gas"       , testMsg);},

    catchInvalidJump       : async function(promise, testMsg) {
        await tryCatch(promise, "invalid JUMP"     , testMsg);},

    catchInvalidOpcode     : async function(promise, testMsg) {
        await tryCatch(promise, "invalid opcode"   , testMsg);},

    catchStackOverflow     : async function(promise, testMsg) {
        await tryCatch(promise, "stack overflow"   , testMsg);},

    catchStackUnderflow    : async function(promise, testMsg) {
        await tryCatch(promise, "stack underflow"  , testMsg);},

    catchStaticStateChange : async function(promise  , testMsg) {
        await tryCatch(promise, "static state change", testMsg);},
};



