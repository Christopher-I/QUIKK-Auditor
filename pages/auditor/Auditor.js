    for (let index=0; index<dataArray.length; index++) {


        //Store action Lines
                // Audit payable transaction restrictions
        if ((dataArray[index].includes(searchFunction) && dataArray[index].includes('(')) || 
        (dataArray[index].includes('contract') && dataArray[index].includes('(')) ||
        (dataArray[index].includes('constructor') && dataArray[index].includes('(')) ){ //find function calls
            actionLines.push(index);

        };