// File to run to create the exact output for the bank challenge

//--------------------------------------

//Import all the necessary classes
import Account from "./account.js";
import Statement from "./statement.js";
import Transaction from "./transaction.js";

//--------------------------------------

//Create Transactions
const transaction1 = new Transaction((new Date(2012, 0, 10)), 1000.00, 0, 0);
const transaction2 = new Transaction((new Date(2012, 0, 13)), 2000.00, 0, 0);
const transaction3 = new Transaction((new Date(2012, 0, 14)), 0, 500.00, 0);

//--------------------------------------

//Create Account and add the transactions with the calculated balance
const account = new Account();
account.addBalance(transaction1);
account.addBalance(transaction2);
account.addBalance(transaction3);

//--------------------------------------

//Print the account statement
const statement = new Statement();
statement.printStatement(account.getTransactions());
