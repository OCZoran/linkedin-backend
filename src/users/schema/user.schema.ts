import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { now, Document } from 'mongoose';

// OLX SHOP REGISTRATION CAN COME LATER
// Research about mappers
// Relations

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  // @Prop({ type: mongoose.Types.ObjectId })
  // _id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  // enum
  @Prop({ required: true })
  gender: string;

  // enum
  @Prop({ required: true })
  region: string;

  // for verification and email also ( think which one )
  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ default: now(), required: true })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
