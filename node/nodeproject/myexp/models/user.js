const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  ID:                   { type: String },    //用户id
  Name:                   { type: String },    //姓名
  Age:                   { type: Number },    //年龄
})

const UserModel = mongoose.model('User', UserSchema);
UserModel.createIndexes({ Name: "text" });
