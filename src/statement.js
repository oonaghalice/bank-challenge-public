/* File includes the statement class containing a single method to print out
an array of transactions stored in the account class */

class Statement {

    printStatement(transactions) {
        console.log("date       || credit  || debit  || balance");
        for (let i = transactions.length - 1; i >= 0; i--) {
            if (transactions[i].getCredit() == 0) {
                console.log(transactions[i].getDate() + " || " + "       " + " || " + transactions[i].getDebit() + ".00" + " || " + transactions[i].getBalance() + ".00");
            }
            if (transactions[i].getDebit() == 0) {
                console.log(transactions[i].getDate() + " || " + transactions[i].getCredit() + ".00" + " ||" + "      " + "  || " + transactions[i].getBalance() + ".00");
            }
            //console.log(transactions[i].getDate() + "  || " + transactions[i].getCredit() + ".00" + " ||" + transactions[i].getDebit() + ".00" + "  || " + transactions[i].getBalance() + ".00")
        }
    }

}

export default Statement;