import mongoose, { Schema, PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { IUserModel } from '../../constants/interfaces';

const User: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

User.plugin(passportLocalMongoose);

export default mongoose.model<IUserModel>('users', User as PassportLocalSchema);
