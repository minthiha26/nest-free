import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // get post delete put patch

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // react => localhost://3000/test
  // react => localhost://3000/test

  @Get('test-nest')
  getTest(): string {
    return this.appService.getTest();
  }
}
