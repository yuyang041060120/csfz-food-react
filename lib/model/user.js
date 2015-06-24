var mongoose = require('./mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: String,
    password: String,
    realname: String,
    dept: String,
    duty: String,
    telephone: String,
    mobile: String,
    email: String,
    manage: {
        type: Boolean,
        default: false
    },
    creater: {
        type: String,
        ref: 'UserModel'
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    },
    updater: {
        type: String,
        ref: 'UserModel'
    }
});

module.exports = mongoose.model('UserModel', UserSchema);
