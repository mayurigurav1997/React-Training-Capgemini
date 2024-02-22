//Q1. print account_type wise how many accounts are in dataset in following format
//sample output : {"SAVING":count, "CURRENT":count, "FD":count}

//Method-1
let countByAccType = { SAVING: 0, CURRENT: 0, FD: 0 };


for (var item of bank_app) {

    if (item.acctype == "SAVING") {
        countByAccType.SAVING += 1;
    }
    else if (item.acctype == "CURRENT") {
        countByAccType.CURRENT += 1;
    }
    else if (item.acctype == "FD") {
        countByAccType.FD += 1;
    }
}

console.log(countByAccType);

//Method-2
function _count(acc_type)
{
    return bank_app.filter(item=>item.acctype==acc_type).length;
}

countByAccType = { 
    SAVING:  _count("SAVING"),
    CURRENT: _count("CURRENT"),
    FD: _count("FD")
};

console.log(countByAccType);

//Q2. print how much amount withdraw and deposit by each bank account and print output in following format
//sample output: [{accname:"smith devid", transaction:{withdraw:total_of_withdraw, deposit:total_of_deposit}}, so on...]


//Method-1
let ans2 = [];
for(var item of bank_app)
{
    let totalw = 0;
    let totald = 0;

    for(var record of item.transaction)
    {    
        let _amount = Number(record.amount.split(" ")[1]);
        if(record.type=="WITHDRAW")
        {
            totalw += _amount;
        }
        else if(record.type=="DEPOSIT")
        {
            totald += _amount;
        }
    }


    ans2.push({accname:item.accname, transaction:{withdraw:"INR "+ totalw, deposit:"INR " + totald}})
}

// console.log(JSON.stringify(ans2,null,3));

//Method-2
ans2 = bank_app.map(item=>{
    let obj = {
        withdraw:"INR " + item.transaction
                .filter(r=>r.type=="WITHDRAW")
                .map(t=>Number(t.amount.split(" ")[1]))
                .reduce((p,c)=>p+c,0),

        deposit:"INR " + item.transaction
                .filter(r=>r.type=="DEPOSIT")
                .map(t=>Number(t.amount.split(" ")[1]))
                .reduce((p,c)=>p+c,0),
    }

    return {accname:item.accname, transaction:obj};
})

console.log(JSON.stringify(ans2,null,3));

//Q3. remove account from given dataset whose number of withdraw transactions are 0
let acc_to_remove = [];

for(var i=0;i<bank_app.length;i++)
{
    var wc = 0;
    for(var r of bank_app[i].transaction)
    {
        if(r.type=="WITHDRAW")
        {
            wc+=1;
        }
    }

    if(wc==0)
    {
        acc_to_remove.push(i);
    }
}

for(var position of acc_to_remove)
{
  console.log(position);
}

