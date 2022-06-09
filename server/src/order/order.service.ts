import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
export interface OrderDto {
  name: string;
  phone: string;
  email: string;
  basket: object[];
}
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}
  async create(dto: OrderDto) {
    const order = new this.orderModel(dto);
    await order.save();
    return order;
  }
  async findAll() {
    return await this.orderModel.find();
  }
  async edit(id: string) {
    const order = await this.orderModel.findById(id);

    await this.orderModel.findByIdAndUpdate(id, { edit: true });

    return order;
  }
  async destroy(id: string) {
    return await this.orderModel.findByIdAndDelete(id);
  }
}
