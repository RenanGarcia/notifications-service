import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { randomUUID } from 'node:crypto';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/notifications (GET)', () => {
    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        recipientId: randomUUID(),
        content: 'Você tem uma nova notificação',
        category: 'social',
      })
      .expect(201);
  });
});
