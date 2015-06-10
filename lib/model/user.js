var mongoose = require('./mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: String,
    password: String,
    realname: String,
    mobile: String,
    email: String,
    manage: {
        type: Boolean,
        default: false
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserModel', UserSchema);
