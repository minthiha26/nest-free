import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // business logic
  // db

  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'This is a test';
  }
}
