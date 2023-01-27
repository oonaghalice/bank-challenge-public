/* File containing my account class which stores a series of transactions, calculates
and adds the new balance of the account*/

class Account {

    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
        this.transactions = [];
    }

    getAccountBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.transactions;
    }

    calculateBalance(accountCredit, accountDebit) {
        this.#balance += (accountCredit ? accountCredit : -accountDebit);
    }

    addBalance(transaction) {
        this.calculateBalance(transaction.getCredit(), transaction.getDebit());
        transaction.setTransactionBalance(this.getAccountBalance());
        return this.transactions.push(transaction);
    }

}

export default Account;