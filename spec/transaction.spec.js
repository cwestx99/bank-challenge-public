import Transaction from "../src/transaction.js";

describe(`transaction tests`, () => {

    describe(`transaction tests`, () => {

        it(`transactions should have an attached date`, () => {
            let testTransaction = new Transaction(new Date(2022, 9, 14))
            expect(testTransaction.getDate()).toEqual(`14/10/2022`);
        });

        it(`transactions should have an attached amount`, () => {
            let testTransaction = new Transaction(new Date(2022, 10, 14), 100)
            expect(testTransaction.getAmount()).toEqual(100);
        });

        it(`transactions should have an attached type of deposit`, () => {
            let testTransaction = new Transaction(new Date(2022, 10, 14), 100, 0)
            expect(testTransaction.getTypeOfTransaction()).toEqual(`deposit`);
        });

        it(`transactions should have an attached type of withdraw`, () => {
            let testTransaction = new Transaction(new Date(2022, 10, 14), 0, 100)
            expect(testTransaction.getTypeOfTransaction()).toEqual(`withdraw`);
        });

    });
});