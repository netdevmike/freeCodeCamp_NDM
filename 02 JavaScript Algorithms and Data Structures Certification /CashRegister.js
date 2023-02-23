function checkCashRegister(price, cash, cid) {
    let change = [];
    let changeDue = cash - price;
    const currency = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100
    };

    let incomingCid = [...cid].reverse().reduce((obj, curr) => {
        obj[curr[0]] = curr[1]
        return obj
    }, {});

    const status = {
        1: 'OPEN',
        0: 'CLOSED',
        '-1': 'INSUFFICIENT_FUNDS'
    };

    for (let key in incomingCid) {

        if(parseInt(changeDue / currency[key]) > 0){
            let particularValue = changeDue - incomingCid[key] <= 0? (parseInt((changeDue/currency[key]).toFixed(2))*currency[key]) : incomingCid[key]
            changeDue -= particularValue
            incomingCid[key] -= particularValue;
            change.push([key, particularValue])

        }
    }

    let amountPresentInCid = Object.values(incomingCid).every(val => val === 0)
    changeDue = changeDue.toFixed(2)
    if (changeDue == 0 && !amountPresentInCid){
        return { status: status[1], change }
    }
    else if(changeDue > 0){
        return { status: status[-1], change: []}
    }
    else{
        return { status: status[0], change: cid}
    }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);