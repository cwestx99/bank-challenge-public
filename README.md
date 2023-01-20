Bank Challenge
=================

```
         _._._                       _._._
        _|   |_                     _|   |_
        | ... |_._._._._._._._._._._| ... |
        | ||| |  o NATIONAL BANK o  | ||| |
        | """ |  """    """    """  | """ |
   ())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
  (())) |     |---------------------|     | (()))
 (())())| """ |  """    """    """  | """ |(())())
 (()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
 ()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
    ||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
 ~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
      ^~^~                                ~^~^

```      
The attached source code has been created in Javascript using Test Driven Development, to meet the requirements of the task at hand.
## About the project
---
### Why does this project exist?
This project was created to test my knowledge working with Javascript classes and functions to build software that meets the requirements of a client using encapsulation and keeping code loosely-coupled. 
The project also went on to test my knowledge working with domain modelling to plan and drive the code and was created at the start of my developer journey, 3 weeks into the Digital Futures academy.

## Built with
---
The source code was created following Test Driven Development, which was enforced by my own testing frameworks and it was written in Javascript.

## Getting started
---
Within the package.json file use the following in the terminal to install the dependencies:
```sh
$ npm install 
```
To test the code within all the classes, use the following in the terminal:
```sh
$ npm test
```

The source code for all classes are located within the ../bank-challenge/src/ folder.
The test code for the source codes are located within the ../bank-challenge/spec/ folder.
To see the code in action run the code within the ../bank-challenge/src/index.js file.


## Problem statements
---
### Task
We have a request from a client to write the software to open a Bank Account that allows a client to deposit and withdraw money. Every transaction needs to be timestamped and have a running balance attached to it. Finally a client must be able to print out a bank statement with a full transaction list attached with: date, amount and a running balance.

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
## User Story 1
```
As a user
So I can put money into my account
I want to credit my bank account
```
| Objects | Properties     | Messages                         | Output |
| :------ | :------------- | :------------------------------- | :----- |
| Account | balance@Number | @bankTransaction(amount, credit) | @Void  |
| amount  | @Number        | -                                | -      |

1. test the bank has added money to the balance via the bankTransaction function
2. test that the bankTransaction function is being called
---


## User Story 2
```
As a user
So I can use my money
I want to debit my bank account
```
| Objects | Properties     | Messages                       | Output |
| :------ | :------------- | :----------------------------- | :----- |
| Account | balance@Number | @bankTransaction(money, debit) | @Void  |
| amount  | @Number        | -                              | -      |

1. test the bank has taken money away from the balance via the bankTransaction function
2. test that the bankTransaction function is being called
---


## User Story 3
```
As a user
So I can track the activity of my money
I want to timestamp a transaction
```
| Objects     | Properties                                         | Messages                                                                                   | Output            |
| :---------- | :------------------------------------------------- | :----------------------------------------------------------------------------------------- | :---------------- |
| Transaction | @date(new Date) <br> @amount@int <br> @type@string | @getDate(Transaction) <br> @getAmount(Transaction) <br> @getTypeOfTransaction(Transaction) | @String <br> @int |
|             |                                                    | -                                                                                          | -                 |

1. test that every transaction has a date
2. test that every transaction has an amount
3. test that every transaction has a type of transaction
---


## User Story 4
```
As a user
So I can see all transactions associated with my account
I want to print a bank statement
```
| Objects     | Properties                                         | Messages                                      | Output |
| :---------- | :------------------------------------------------- | :-------------------------------------------- | :----- |
| Account     | transactionList@Array(@transactions)               | @getTransactionList                           | @Array |
| Transaction | @date(new Date) <br> @amount@int <br> @type@string |                                               | @Void  |
| Statement   |                                                    | @createStatement() <br> @printBankStatement() | @Array |


1. test that the account records all transactions
2. test that the statement prints an accounts bank statement
---

## Project Review and Roadmap
---
### Main takeaways from the project



### Directions for this project



## Acknowledgments

I found the following resources useful:
https://www.w3schools.com/js/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array