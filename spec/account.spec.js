import Account from "../src/account.js";

describe(`account tests`, () => {

    let testAccount;

    beforeEach(() => {
        testAccount = new Account;
    });

    afterEach(() => {
        testAccount = undefined;
    });

    const mockDepositTransaction = {
        amount: 100,
        date: `14/10/2022`,
        type: `deposit`,
        getAmount: function () { return this.amount },
        getDate: function () { return this.date },
        getTypeOfTransaction: function () { return this.type },
        setBalance: function () { }
    };


    describe(`deposit tests`, () => {

        it(`deposit should add an amount to Account`, () => {
            testAccount.bankTransaction(mockDepositTransaction);
            expect(testAccount.getBalance()).toEqual(0 + mockDepositTransaction.amount);
        });

        it(`should call the Account deposit method`, () => {
            const depositSpy = spyOn(testAccount, `bankTransaction`);
            testAccount.bankTransaction();
            expect(depositSpy).toHaveBeenCalled();
        });
    });

    const mockWithdrawTransaction = {
        amount: 100,
        date: `14/10/2022`,
        type: `withdraw`,
        getAmount: function () { return this.amount },
        getDate: function () { return this.date },
        getTypeOfTransaction: function () { return this.type },
        setBalance: function () { }
    };

    describe(`withdraw tests`, () => {

        it(`withdraw should take an amount from Account`, () => {
            testAccount.bankTransaction(mockWithdrawTransaction);
            expect(testAccount.getBalance()).toEqual(0 - mockWithdrawTransaction.amount);
        });

        it(`should call the Account withdraw method`, () => {
            const withdrawSpy = spyOn(testAccount, `bankTransaction`);
            testAccount.bankTransaction();
            expect(withdrawSpy).toHaveBeenCalled();
        });
    });


    describe(`transactionList tests`, () => {

        it('transactionList should hold a transaction after a deposit', () => {
            testAccount.bankTransaction(mockDepositTransaction);
            expect(testAccount.getTransactionList()).toContain(mockDepositTransaction);
        });

        it('transactionList should hold a transaction after a withdraw', () => {
            testAccount.bankTransaction(mockWithdrawTransaction);
            expect(testAccount.getTransactionList()).toContain(mockWithdrawTransaction);
        });
    })
});

