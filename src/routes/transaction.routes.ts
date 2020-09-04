import { Router } from 'express';

 import TransactionsRepository from '../repositories/TransactionsRepository';
 import CreateTransactionService from '../services/CreateTransactionService';
 import GetTransactionService from '../services/GetTransactionService';

import Transaction from '../models/Transaction';

const transactionRouter = Router();

 const transactionsRepository = new TransactionsRepository();
 
transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const transactions =  transactionsRepository.all();
    const balance =  transactionsRepository.getBalance();
    
    response.json({transactions, balance});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const {title,value, type } = request.body;

    const createTransactionService = new CreateTransactionService(transactionsRepository);
    const trasaction = new Transaction({title, value, type});
    const result = createTransactionService.execute(trasaction);

    return response.json(result);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
