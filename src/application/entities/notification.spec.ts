import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Você recebe uma solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
