var mongoose = require('./mongoose');
var Schema = mongoose.Schema;


var HistorySchema = new Schema({
    content: String,
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    addTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('HistoryModel', HistorySchema);
