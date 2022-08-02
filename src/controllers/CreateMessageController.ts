import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async createMessage(request: Request, response: Response) {
    const { email, message } = request.body;
    const createMessageService = new CreateMessageService();
    const newMessage = await createMessageService.createMessage({
      email,
      message,
    });
    return response.json(newMessage);
  }
}
export { CreateMessageController };
