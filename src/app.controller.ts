import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import type { InputData } from './dto/app.dto';

/**
 * Controller responsible for handling HTTP requests related to the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Retrieves the add and update count of a specific resource identified by its ID.
   * @param id - The ID of the resource.
   * @returns The count of the resource.
   */
  @Get('/:id/count')
  getCount(@Param('id') id: string) {
    return this.appService.getCount(id);
  }

  /**
   * Creates a new input resource.
   * @param body - The data for the input resource.
   * @returns { message: Operation Successfull or not }.
   */
  @Post('/')
  createInput(@Body() body: InputData) {
    console.log(body);
    return this.appService.createInput(body);
  }

  /**
   * Updates an existing input resource identified by its ID.
   * @param id - The ID of the input resource to update.
   * @param body - The updated data for the input resource.
   * @returns { message: Operation Successfull or not }.
   */
  @Put('/:id')
  updateInput(@Param('id') id: string, @Body() body: InputData) {
    return this.appService.updateInput(id, body);
  }
}
