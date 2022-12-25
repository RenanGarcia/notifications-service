import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PostMarkMailService } from './mail/postmark-mail.service';

describe('AppController', () => {
  let appController: AppController;

  describe('SMTPMailService', () => {
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [
          {
            provide: MailService,
            useClass: SMTPMailService,
          },
        ],
      }).compile();

      appController = app.get<AppController>(AppController);
    });

    it('should return "SMTP mail"', () => {
      expect(appController.getHello()).toBe('SMTP mail');
    });
  });

  describe('PostMarkMailService', () => {
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [
          {
            provide: MailService,
            useClass: PostMarkMailService,
          },
        ],
      }).compile();

      appController = app.get<AppController>(AppController);
    });

    it('should return "PostMark mail"', () => {
      expect(appController.getHello()).toBe('PostMark mail');
    });
  });
});
