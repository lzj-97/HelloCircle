const user = require('../proxy/user');

exports.addUser = async function (req, res, next) {
  try {
    const query = req.query;
    await user.addNew(query);
    res.json({success: 1, error: 0});
  } catch (err) {
    throw new Error(err);
  }
}

exports.findByName = async function (req, res, next) {
  try {
    const name = req.query.name;
    console.log(req.query);
    let result = await user.find({ Name: name });
    res.json({ success: 1, result });
  } catch (err) {
    throw new Error(err);
  }
}

exports.updateAge = async function (req, res, next) {
  try {
    const { id, age } = req.query;
    const result = await user.updateOne({ ID: id }, { Age: age });
    res.json({ success: 1, result });
  } catch (err) {
    throw new Error(err);
  }
}

exports.deleteOneById = async function (req, res, next) {
  try {
    const { id } = req.query;
    const result = await user.deleteOne({ ID: id });
    res.json(result);
  } catch (err) {
    throw new Error(err);
  }
}

exports.findAll = async function (req, res, next) {
  try {
    const result = await user.findAll();
    res.json(result);
  } catch (err) {
    throw new Error(err);
  }
}