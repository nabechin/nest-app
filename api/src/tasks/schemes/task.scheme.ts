import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ default: () => uuid() })
  id: string;

  @Prop()
  title: string;
}

export const TaskScheme = SchemaFactory.createForClass(Task);
