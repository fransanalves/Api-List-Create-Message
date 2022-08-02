import { getCustomRepository } from 'typeorm';
import { MessagesRepository } from '../repository/MessagesRepository';

class ListMessagesService {
  async listMessages() {
    const messageRepository = getCustomRepository(MessagesRepository);
    const allMessages = await messageRepository.find();
    return allMessages;
  }
}
export { ListMessagesService };
