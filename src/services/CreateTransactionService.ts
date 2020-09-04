import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(transacion: Transaction): Transaction {
    // TODO
    const {total} = this.transactionsRepository.getBalance();
    if(transacion.type == 'outcome' && transacion.value > total)
      throw Error('Operation deny'); ;
       
    const result =  this.transactionsRepository.create(transacion);

    return result;
  }
}

export default CreateTransactionService;
