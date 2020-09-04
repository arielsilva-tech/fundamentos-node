import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class GetTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[] {
    // TODO
    const result =  this.transactionsRepository.all();

    return result;
  }
}

export default GetTransactionService;