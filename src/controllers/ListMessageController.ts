import { Request, Response } from 'express';
import { ListMessagesService } from '../services/ListMessagesService';

class ListMessageController {
  async listMessages(request: Request, response: Response) {
    const listMessageService = new ListMessagesService();
    const allMessages = await listMessageService.listMessages();
    return response.json(allMessages);
  }
}
export { ListMessageController };
