import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto, OrderService } from './order.service';

@Controller('api/order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post('/')
  create(@Body() dto: OrderDto) {
    return this.orderService.create(dto);
  }
  @Get('/')
  findAll() {
    return this.orderService.findAll();
  }
  @Get('/edit/:id')
  async edit(@Param('id') id: string) {
    return await this.orderService.edit(id);
  }
  @Get('/destroy/:id')
  destroy(@Param('id') id: string) {
    return this.orderService.destroy(id);
  }
}
