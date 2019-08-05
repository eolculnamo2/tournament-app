import mongoose, { Schema, PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const User = new Schema({
  username: String,
  password: String,
  email: String,
});

User.plugin(passportLocalMongoose);

export default mongoose.model('users', User as PassportLocalSchema);
