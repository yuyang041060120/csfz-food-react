/**
 * AES 加密模块
 */

var extend = require('extend');
var secretKey = "csfz-v2-ToW10JxVPVw1SPM6hX9";
var crypto = require('crypto');

var Crypto = function(secretKey, encoding) {
    this.encoding = encoding || 'hex';
};

extend(Crypto.prototype, {
    /**
     * 加密
     *
     * @param data
     * @returns {*}
     */
    encrypt: function(data) {
        var cipher = crypto.createCipher('aes-256-ecb', secretKey);
        return cipher.update(data, 'utf8', this.encoding) + cipher.final(this.encoding);
    },
    /**
     * 解密
     *
     * @param data
     * @returns {*}
     */
    decrypt: function(data) {
        var cipher = crypto.createDecipher('aes-256-ecb', secretKey);
        return cipher.update(data, this.encoding, 'utf8') + cipher.final('utf8');
    }
});

var instance = new Crypto(secretKey, 'base64');
module.exports = instance;