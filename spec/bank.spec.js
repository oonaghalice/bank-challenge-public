// File containing all the tests written for the bank challenge

//--------------------------------------

// Import necessary modules and define all objects needed
import Account from "../src/account.js";
import Statement from "../src/statement.js";
import Transaction from "../src/transaction.js";

let transaction;
let transaction2;
let account;
let statement;
let result;

//--------------------------------------

describe("Bank Challenge Testing Suite", () => {

    //User Story 1
    it("Test 1- Make a deposit", () => {
        //Arrange
        transaction = new Transaction();

        //Act
        transaction.addCredit(1000.00);
        result = transaction.getCredit();

        //Assert
        expect(result).toBe(1000.00);

    });

    //User Story 2
    it("Test 2- Add the date", () => {
        //Arrange
        transaction = new Transaction();

        //Act
        transaction.addDate(new Date(2012, 0, 10));
        result = transaction.getDate();

        //Assert
        expect(result).toMatch("10/01/2012");
    });

    //User Story 3
    it("Test 3- Make a withdrawl", () => {
        //Arrange
        transaction = new Transaction();

        //Act
        transaction.addDebit(500.00);
        result = transaction.getDebit();

        //Assert
        expect(result).toBe(500.00);
    });

    //User Story 4
    it("Test 4- Calculate the account balance and add it to the transaction", () => {
        //Arrange
        transaction = new Transaction((new Date(2012, 0, 10)), 2000.00, 0, 0);
        transaction2 = new Transaction((new Date(2012, 0, 10)), 0, 500.00, 0);
        account = new Account();

        //Act
        account.addBalance(transaction);
        account.addBalance(transaction2);
        result = account.getAccountBalance();

        //Assert
        expect(result).toBe(1500.00);

    });

    //User Story 5
    it("Test 5- Print the account statement", () => {
        //Arrange
        transaction = new Transaction((new Date(2000, 4, 10)), 2000000.00, 0, 0);
        transaction2 = new Transaction((new Date(2000, 4, 15)), 0, 50.00, 0);
        account = new Account();
        statement = new Statement();

        //Act
        account.addBalance(transaction);
        account.addBalance(transaction2);
        const mySpy = spyOn(statement, "printStatement");
        statement.printStatement(account.getTransactions());

        //Assert
        expect(mySpy).toHaveBeenCalled();

    });

});