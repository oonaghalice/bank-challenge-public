# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!


#
## User Stories and Domain Modelling


### User Story 1
```
As a client
I want to record my deposits
So they can be printed on a statement
```
### Domain Model 1


| Objects      | Properties   | Messages | Ouputs |
| ------------ | ------------ | -------- | ------ |
| Transactions | deposit @int | credit() | @arr   |


#

### User Story 2
```
As a client
I want to record the dates of my transactions
So they can be printed on a statement
```
### Domain Model 2


| Objects      | Properties       | Messages  | Ouputs |
| ------------ | ---------------- | --------- | ------ |
| Transactions | accountDate @str | getDate() | @arr   |


#

### User Story 3
```
As a client
I want to make withdrawals
So they can be printed on a statement
```
### Domain Model 3


| Objects      | Properties      | Messages | Ouputs |
| ------------ | --------------- | -------- | ------ |
| Transactions | withdrawal @int | debit()  | @arr   |

#

### User Story 4
```
As a client
I want my account balance to be stored
So I can see how much money was in my account 
```
### Domain Model 4


| Objects | Properties   | Messages         | Ouputs |
| ------- | ------------ | ---------------- | ------ |
| Account | balance @int | accountBalance() | @arr   |

# 

### User Story 5
```
As a client
So I can see all my transactions
I want to be able to print my statement
```
### Domain Model 5


| Objects   | Properties                   | Messages         | Ouputs |
| --------- | ---------------------------- | ---------------- | ------ |
| Statement | date, credit, debit, balance | printStatement() | @str   |

#

## Running the code

The code has been configured so that running "npm start" in the terminal 
will print out the desired statement given in the specification.
# bank-challenge-public
