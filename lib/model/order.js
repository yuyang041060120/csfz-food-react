var mongoose = require('./mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
    food: {
        type: Schema.Types.ObjectId,
        ref: 'FoodModel'
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreModel'
    },
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    count: String,
    active: {
        type: Boolean,
        default: true
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

module.exports = mongoose.model('OrderModel', OrderSchema);
