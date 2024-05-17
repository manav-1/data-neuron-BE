import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import type { InputData } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id/count')
  getCount(@Param('id') id: string) {
    return this.appService.getCount(id);
  }

  @Post('/')
  createInput(@Body() body: InputData) {
    console.log(body);
    return this.appService.createInput(body);
  }

  @Put('/:id')
  updateInput(@Param('id') id: string, @Body() body: InputData) {
    return this.appService.updateInput(id, body);
  }
}
