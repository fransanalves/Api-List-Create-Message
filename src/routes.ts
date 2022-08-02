import { Router, Request, Response } from 'express';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListMessageController } from './controllers/ListMessageController';

const router = Router();
const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
router.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Bem vindo a API Dio Shopping' });
});
router.get('/messages', listMessageController.listMessages);
router.post('/messages', createMessageController.createMessage);
export { router };
