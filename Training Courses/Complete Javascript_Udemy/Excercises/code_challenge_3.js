/************
 * Wes solution
 
// Array containg the bills.
let bills = [124, 48, 268];

let tips = [];
let billTotals = [];

//Calculate the tips.
function calcBill(billAmt) {        

        if(billAmt < 50) {
            tipAmt = billAmt*0.2;
            tips[tips.push()] = tipAmt;
            
            billTotal = billAmt + tipAmt; 
            billTotals[billTotals.push()] = billTotal;            

        }else if(billAmt >= 50 && billAmt <= 200)  {
            tipAmt = billAmt*0.15;
            tips[tips.push()] = tipAmt;

            billTotal = billAmt + tipAmt;
            billTotals[billTotals.push()] = billTotal;
          
        } else {
            tipAmt = billAmt*0.1;
            tips[tips.push()] = tipAmt;

            billTotal = billAmt + tipAmt;
            billTotals[billTotals.push()] = billTotal;
    
        };
        
};
calcBill(bills[0]);
calcBill(bills[1]);
calcBill(bills[2]);
console.log(tips);
console.log(billTotals);
*/

// Alternate solution 1

function tipCalc(bill) {
    let perc;
    if (bill < 50) {
        perc = 0.2 * bill;
    }else if (bill > 50 && bill < 200) {
        perc = 0.15 * bill;
    }else {
        perc = 0.1 * bill;
    };

    return perc + bill;
};

let bill = [124, 48, 268];
let tips = [tipCalc(bill[0]),
            tipCalc(bill[1]),
            tipCalc(bill[2])];

let billTotal = [bill[0] + tips[0],
                bill[1] + tips[1],
                bill[2] + tips[2]];

console.log(tips);
console.log(billTotal);


