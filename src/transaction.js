/* File containing the transactions class, where single transactions of
deposits and withdrawals are recorded with their date */

class Transaction {

    #accountDate;
    #accountCredit;
    #accountDebit;
    #transactionBalance;

    constructor(accountDate, accountCredit, accountDebit, transactionBalance) {
        this.#accountDate = accountDate;
        this.#accountCredit = accountCredit;
        this.#accountDebit = accountDebit;
        this.#transactionBalance = transactionBalance;
    }

    getCredit() {
        return this.#accountCredit;
    }

    getDebit() {
        return this.#accountDebit;
    }

    getDate() {
        return this.#accountDate.toLocaleDateString();
    }

    getBalance() {
        return this.#transactionBalance;
    }

    addCredit(deposit) {
        return this.#accountCredit = deposit;
    }

    addDebit(withdrawal) {
        return this.#accountDebit = withdrawal;
    }

    addDate(day) {
        return this.#accountDate = day;
    }

    setTransactionBalance(balance) {
        return this.#transactionBalance = balance;
    }

}

export default Transaction;