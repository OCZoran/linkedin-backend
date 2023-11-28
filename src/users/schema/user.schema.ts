import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { now } from 'mongoose';
import { Gender } from 'src/users/enum/gender.enum';
import { Place } from 'src/users/enum/place.enum';
import { Region } from 'src/users/enum/region.enum';

// OLX SHOP REGISTRATION CAN COME LATER
// Research about mappers
// Relations

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: Gender;

  @Prop({ required: true })
  region: Region;

  @Prop({ required: true })
  place: Place;

  @Prop({ default: now() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
