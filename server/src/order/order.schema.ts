import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop()
  email: string;
  @Prop({ default: false })
  edit: boolean;
  @Prop({ type: Array })
  basket: object[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
