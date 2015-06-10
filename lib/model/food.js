var mongoose = require('./mongoose');
var Schema = mongoose.Schema;


var FoodSchema = new Schema({
    name: String,
    price: String,
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreModel'
    },
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    updater: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    addTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('FoodModel', FoodSchema);
