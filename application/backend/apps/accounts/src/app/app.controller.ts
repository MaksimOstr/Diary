import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  @Get('ping')
  ping(): { message: string } {
    return { message: 'Hello API' }
  }
}
