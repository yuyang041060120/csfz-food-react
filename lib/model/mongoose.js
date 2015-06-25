/**
 * @author yuyangyang
 * @time 2015/3/11
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test8');

var db = mongoose.connection;
db.on('error', function (err) {
    console.error('Mongodb '+err);
});
db.once('open', function () {
    console.info('Mongodb has connected');
});

module.exports = mongoose;