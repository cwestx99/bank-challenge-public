import Statement from "../src/statement.js"

describe(`statement tests`, () => {

    const mockTransaction1 = {
        amount: 100,
        date: new Date(2022, 14, 10),
        type: `deposit`,
        balance: 100,
        getAmount: function () { return this.amount; },
        getDate: function () { return this.date; },
        getTypeOfTransaction: function () { return this.type; },
        getBalance: function () { return this.balance; }
    }

    const mockTransaction2 = {
        amount: 50,
        date: new Date(2022, 16, 10),
        type: `withdraw`,
        balance: 50,
        getAmount: function () { return this.amount; },
        getDate: function () { return this.date; },
        getTypeOfTransaction: function () { return this.type; },
        getBalance: function () { return this.balance; }
    }

    const transactionList = [mockTransaction1, mockTransaction2];

    const mockAccount = {
        transactionList,
        getTransactionList: function () { return this.transactionList }
    };


    it('statement printStatement() should be called on', () => {
        const consoleLogSpy = spyOn(console, `log`);
        Statement.printStatement(mockAccount);
        expect(consoleLogSpy).toHaveBeenCalledTimes(transactionList.length + 1);
    })

});
