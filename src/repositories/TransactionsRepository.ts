import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance  {
    // TODO
    const {income, outcome} = this.transactions.reduce((acummulator: Balance, transaction: Transaction) => {
      if(transaction.type == 'income')
        acummulator.income += transaction.value;
      if(transaction.type == 'outcome')
      acummulator.outcome += transaction.value;

      return acummulator;

    },{income: 0, outcome: 0, total: 0});

    const total = income - outcome;
    
   return {income, outcome, total};
  }

  public create(transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
