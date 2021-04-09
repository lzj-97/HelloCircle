const UserModel = require('../models').UserModel;

exports.addNew = async function ({ id, name, age }) {
  try {
    let user = await new UserModel({
    ID: id,
    Name: name,
    Age: age
    })
    return await user.save();
  } catch (err) {
    throw new Error(err);
  }
}

exports.find = async function (query) {
  try {
    return await UserModel.find(query);
  } catch (err) {
    throw new Error(err);
  }
}

exports.update = async function (query) {
  try {
      return await UserModel.updateMany(query, newVal);
  } catch (err) {
    throw new Error(err);
  }
}

exports.updateOne = async function (query, newVal) {
  try {
      return await UserModel.updateOne(query, newVal);
  } catch (err) {
    throw new Error(err);
  }
}

exports.deleteOne = async function (query) {
  try {
      return await UserModel.deleteOne(query);
  } catch (err) {
    throw new Error(err);
  }
}


exports.findAll = async function () {
  try {
      return await UserModel.find({});
  } catch (err) {
    throw new Error(err);
  }
}