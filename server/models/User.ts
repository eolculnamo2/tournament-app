import mongoose, { Schema, PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { IUser } from '../../constants/interfaces';

const User: Schema = new Schema({
  username: { type: String, reuqired: true, unique: true },
  email: { type: String, required: true },
});

User.plugin(passportLocalMongoose);

export default mongoose.model<IUser>('users', User as PassportLocalSchema);
