const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.db_url, {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('连接数据库成功');
});

db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function() {
  console.log('数据库断开，重新连接数据库');
  mongoose.connect(config.db_url, {server:{auto_reconnect:true}});
});

require('./user.js');
exports.UserModel = mongoose.model('User');
