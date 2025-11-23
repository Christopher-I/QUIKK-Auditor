

export default(dataArray, compilerVersion = 'v0.4.24')=>{

        // Preprocessing: Clean comments and string literals to reduce false positives
        let cleanedArray = dataArray.map(line => {
            let cleaned = line;
            // Remove single-line comments
            cleaned = cleaned.replace(/\/\/.*$/, '');
            // Remove multi-line comment markers (basic approach)
            cleaned = cleaned.replace(/\/\*.*?\*\//g, '');
            // Remove string literals
            cleaned = cleaned.replace(/"[^"]*"/g, '""');
            cleaned = cleaned.replace(/'[^']*'/g, "''");
            return cleaned;
        });

        // Context awareness: Detect security patterns already in use
        let hasSafeMath = dataArray.some(line =>
            line.includes('SafeMath') || (line.includes('using') && line.includes('for uint256'))
        );
        let hasReentrancyGuard = dataArray.some(line =>
            line.includes('ReentrancyGuard') || line.includes('nonReentrant')
        );

        //let dataArray = contractCode.split("\n");
        let actionLines = new Array();
        let warn={key:"Fiat", warn:"500"};
        let warnings=[];
        let  searchFunction= 'function'; // we are looking for a line, contains, key word 'user1' in the file
        let searchExternalCall = '.call()';
        let dangerousCalls1 = '.call.value()';
        let searchCurlyBrace = '()';
        let lastIndex = -1; // let say, we have not found the keyword
        let key;

        let laws = 0;
        let EIPE20Check = 0;


 for (let index=0; index<dataArray.length; index++) {

 //Store action Lines
                // Audit payable transaction restrictions
        if ((cleanedArray[index].includes(searchFunction) && cleanedArray[index].includes('(')) ||
        (cleanedArray[index].includes('contract') && cleanedArray[index].includes('{')) ||
        (cleanedArray[index].includes('constructor') && cleanedArray[index].includes('(')) ){ //find function calls
            actionLines.push(index);

        };

        // Audit payable transaction restrictions
        if ((cleanedArray[index].includes(searchFunction)) && cleanedArray[index].includes('(')) { //find function calls
            if (cleanedArray[index].includes('payable')){ //check if contract is payable
                if (!cleanedArray[index].includes('internal') && !cleanedArray[index].includes('restricted')){ //check if contract is payable
                warn = {key:(index+1), severity: "HIGH", value:"Use caution when making external calls on payable function, ensure you mark trusted contracts/address. "};

                warnings.push(warn);
            }
        }
        }

    //Audting state changes after external calls
        if (cleanedArray[index].includes(searchExternalCall)) { //find external calls
            warn = {key:(index+1), severity: "HIGH", value:"Avoid state changes after external calls."};
                warnings.push(warn);

        }

        //Be aware of the tradeoffs between send(), transfer(), and call.value()()
        if (cleanedArray[index].includes(dangerousCalls1)) { //find external calls
            warn = {key:(index+1), severity: "CRITICAL", value:"Be aware that using '.call.value()', it is susceptible to re-entry attacks, if possible use send() or transfer(). Also do not forget to set your new account balance before the transfer "};
                warnings.push(warn);

        }

        //Handle errors in external calls
                if (cleanedArray[index].includes('.callcode(') || cleanedArray[index].includes('.call(')||cleanedArray[index].includes('call(') || cleanedArray[index].includes('.delegatecall(') || cleanedArray[index].includes('.send(')) {
                    //find external calls
                    if (!cleanedArray[index].includes('if') && !cleanedArray[index].includes('require')){
                    warn = {key:(index+1), severity: "HIGH", value:"Handle errors in external calls warning: make sure to handle the possibility that the call will fail, by checking the return value."};
                    warnings.push(warn);
            }
        }

// Favor pull over push for external calls - FIXED LOGIC
        if (cleanedArray[index].includes(searchFunction) && cleanedArray[index].includes('(')) { //find function calls
            if (cleanedArray[index].includes('payable')){ //check if contract is payable
                // Only warn if function contains direct transfer and is payable
                if (cleanedArray[index].includes('.transfer(') || cleanedArray[index].includes('.send(')) {

                warn = {key:(index+1), severity: "MEDIUM", value:"Favor pull over push for external calls. External/Internal Calls can fail accidentally or deliberately. To minimize the damage caused by such failures, it is often better to set up manual transfers rather than automate them. This is especially relevant for payments, where it is better to let users withdraw funds rather than push funds to them automatically. (This also reduces the chance of problems with the gas limit.)"};
                warnings.push(warn);
            }
        }
        };


        //Don't delegatecall to untrusted code
        if (((cleanedArray[index].includes('.delegatecall')) && (cleanedArray[index].includes('(')))) { //find external calls
            warn={key:(index+1), severity: "CRITICAL", value:"Ensure that the address being used in this delegate call is a trusted address and cannot be changed or supplied by a user, as the result can alter the state of your contract "};
                warnings.push(warn);

        }

        //Audit function visibility
        if ((cleanedArray[index].includes(searchFunction)) && cleanedArray[index].includes('(') && (!cleanedArray[index].includes('internal')) &&
        ((!cleanedArray[index].includes('external'))) && ((!cleanedArray[index].includes('private'))) && ((!cleanedArray[index].includes('public'))) ) {
            warn = {key:(index+1), severity: "MEDIUM", value:"Explicitly label the visibility of functions and state variables. Functions can be specified as being external, public, internal or private. "};
            warnings.push(warn);

        }

            //Lock Pragma on specific solidity version
        if ((cleanedArray[index].includes('pragma solidity')) && ((cleanedArray[index].includes('>')) || (cleanedArray[index].includes('<')) || (cleanedArray[index].includes('^'))) ) { //find external calls
                warnings.push({key:(index+1), severity: "MEDIUM", value: "Lock pragmas to specific compiler version. Locking the pragma helps ensure that contracts do not accidentally get deployed using, for example, the latest compiler which may have higher risks of undiscovered bugs."});

        }

            //Avoid using tx.origin - improved to skip comments
        if (cleanedArray[index].includes('tx.origin')) { //find external calls
            warn = {key:(index+1), severity: "HIGH", value:"Avoid using tx.origin as it is unsafe, we recommend you should use msg.sender for authorization." };
                warnings.push(warn);

        }

         if (cleanedArray[index].includes('block.timestamp')) { //find external calls
            warn = {key:(index+1), severity: "MEDIUM", value:"Be aware that the timestamp of the block maybe inaccurate as it can be manipulated by a miner and other factors."};
                warnings.push(warn);

        }

        if (cleanedArray[index].includes('block.number')) { //find external calls
            warn = {key:(index+1), severity: "LOW", value:"It is possible to estimate a time delta using the block.number property and average block time, however this is not future proof as block times may change."};

                warnings.push(warn);

        }

        //Use interface type instead of the address for type safety
        if ((cleanedArray[index].includes(searchFunction)) && cleanedArray[index].includes('(') && cleanedArray[index].includes('address') ) { //find function calls
                warn = {key:(index+1), severity: "LOW", value:"When a function takes a contract address as an argument, it is better to pass an interface or contract type rather than raw address. If the function is called elsewhere within the source code, the compiler it will provide additional type safety guarantees "};
                warnings.push(warn);

        }

        // Improved extcodesize check for specific context
        if (cleanedArray[index].includes('extcodesize') && cleanedArray[index].includes('isContract')) { //find external calls
            warn = {key:(index+1), severity: "MEDIUM", value:"Avoid using extcodesize to check for Externally Owned Accounts."};
                warnings.push(warn);

        }

        if ((cleanedArray[index].includes('EIP-20')) || (cleanedArray[index].includes('approve(')) ){
             EIPE20Check ++;

            if (EIPE20Check >= 2){
                warn = {key:(index+1), severity: "HIGH", value:"The EIP-20 token's approve() function creates the potential for an approved spender to spend more than the intended amount. A front running attack can be used, enabling an approved spender to call transferFrom() both before and after the call to approve() is processed."} ;
                warnings.push(warn);
            }
        }


        //Prevent transferring tokens to the 0x0 address
        if ((cleanedArray[index].includes(searchFunction)) && cleanedArray[index].includes('(') && (cleanedArray[index].includes('transferFrom') || cleanedArray[index].includes('transfer')) ) { //find function calls

                warn = {key:(index+1), severity: "HIGH", value:"Prevent transferring tokens to the 0x0 address and prevent transferring tokens to the same contract address. -" +
                "After your function declaration, you could the modifier:" +
                "modifier validDestination( address to ) {" +
                "require(to != address(0x0));" +
                "require(to != address(this) );" +
                "};" +
                " line "} ;
                warnings.push(warn);
        }


        //Safemath preventions - with context awareness and version check
        if ((cleanedArray[index].includes('uint256')) && (cleanedArray[index].includes('=')) && ((cleanedArray[index].includes('*')) ||
        (cleanedArray[index].includes('-')) || (cleanedArray[index].includes('+')) || (cleanedArray[index].includes('/')) ) ) { //find external calls
            // Only warn if SafeMath not detected AND using older Solidity version
            if (!hasSafeMath && !compilerVersion.startsWith('v0.8')) {
                warn = {key:(index+1), severity: "HIGH", value:"Be aware that doing math functions on uint256 can cause overflows and underflows. We recommend you implement OpenZeppelin SafeMath"};
                warnings.push(warn);
            } else if (compilerVersion.startsWith('v0.8')) {
                // For Solidity 0.8+, overflow protection is built-in, so this is just informational
                warn = {key:(index+1), severity: "LOW", value:"Solidity 0.8+ has built-in overflow protection. If you need unchecked math for gas optimization, use 'unchecked' blocks."};
                warnings.push(warn);
            }

        }



        //Prevent transferring tokens to the 0x0 address
        if ((cleanedArray[index].includes(searchFunction)) && (cleanedArray[index].includes('(')) && ((cleanedArray[index].includes('transferFrom')) ||
        (cleanedArray[index].includes('transfer')) || (cleanedArray[index].includes('withdraw'))) && (!cleanedArray[index].includes('onlyPayloadSize')))  { //find function calls
                warn = {key:(index+1), severity: "MEDIUM", value:"Prevent Short address attack by introducing onlyPayloadSize modifier"};
                warnings.push(warn);
        }


}



    let transferCount =0;
    let setRequireStatementForIndividualBalanceNotZeroValve = false;
    let setRequireStatementForAccountBalanceValve = false;
    let setAccountBalanceValve = false;

    for (let k = 0; k<actionLines.length; k++){

    for (let i=actionLines[k]; i<actionLines[k+1]; i++) {

        //Audit for multiple transfers within 1 function
        if ((cleanedArray[i].includes('.transfer('))|| (cleanedArray[i].includes('.send(')) || (cleanedArray[i].includes('.call.value('))) {
            transferCount++;
            if(transferCount >=2){
                warn = {key:(i+1), severity: "HIGH", value:"Avoid multiple transfers within a single function. line"} ;
                warnings.push(warn);

            }
        }

        //check if there is require statement for individuals balance - IMPROVED LOGIC
        if (((cleanedArray[i].includes('require('))) &&
            ((cleanedArray[i].includes('balances[')) || (cleanedArray[i].includes('.balance'))) &&
            ((cleanedArray[i].includes('!=')) && (cleanedArray[i].includes('0'))) ) {
                setRequireStatementForIndividualBalanceNotZeroValve = true;
        }


        //check if there is require statement that sets smart contract account balance to 0
        if (((cleanedArray[i].includes('require('))) && ((cleanedArray[i].includes('this.balance'))) ) {
                setRequireStatementForAccountBalanceValve = true;
        }


        //check if users account balance has been set to zero
        if (((cleanedArray[i].includes('balances['))) && ((cleanedArray[i].includes('='))) && ((cleanedArray[i].includes('0'))) ) {
                setAccountBalanceValve = true;
        }


        //Audting for using .send() - Apply reentrancy guard context awareness
        if ((cleanedArray[i].includes('.send(')) && !hasReentrancyGuard) {

        if(!setRequireStatementForIndividualBalanceNotZeroValve){
                warn = {key:(i+1), severity: "CRITICAL", value:"Be aware of reentrancy attack. Before withdraw or transfers, use a require statement to ensure user has available fund. Example require(UserBalance != 0)"} ;
                warnings.push(warn);
            }

        if(!setRequireStatementForAccountBalanceValve){
                warn = {key:(i+1), severity: "CRITICAL", value:"Be aware of reentrancy attack. Before withdraw or transfers, use a require statement to ensure smart contract has available fund. require(this.balance >= payment)"} ;
                warnings.push(warn);
            }

        if(!setAccountBalanceValve){
                warn = {key:(i+1), severity: "CRITICAL", value:"Be aware of reentrancy attack. Set post-withdrawal balance before sending."} ;
                warnings.push(warn);
            }

        }

    }
    transferCount = 0;//reset transfer count
    setRequireStatementForIndividualBalanceNotZeroValve = false;
    setRequireStatementForAccountBalanceValve = false;
    setAccountBalanceValve = false;
};
    //console.log("warning are " + warnings[1][0]);

    return warnings;

}


   
