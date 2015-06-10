/**
 * Created by yuyangyang on 2015/4/29.
 */
module.exports = {
    resCode: {
        COMMON: 0,
        NOT_FOUND: 10000,
        EXCEPTION: 10001,
        VALIDATOR_ERROR: 10002
    },
    regexp: {
        USERNAME: /^[0-9a-zA-Z]{6,15}$/,
        PASSWORD: /^[0-9a-zA-Z_]{6,15}$/,
        REALNAME: /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/,
        TELEPHONE: /^[0-9]{1,11}$/,
        MOBILE: /^[0-9]{11}$/,
        EMAIL: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        PRICE: /^[0-9]*\.?[0-9]+$/
    }
};