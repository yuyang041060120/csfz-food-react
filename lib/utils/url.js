/**
 * @author yuyangyang
 * @time 2015/2/5
 */
var query = require('./query');

module.exports = {
    /**
     * 首页
     */
    'index': '/',
    /**
     * 注册
     */
    'register': '/vo/register',
    /**
     * 登录
     */
    'login': '/vo/login',
    /**
     * 注销
     */
    'logout': '/vo/logout',
    /**
     * 店铺列表
     */
    'store': '/store/',
    /**
     * 店铺详情
     */
    'store.detail': function (params) {
        return '/store/' + params.storeId;
    },
    /**
     * vo首页
     */
    'vo.index': '/vo/',
    /**
     * vo基本信息
     */
    'vo.message': '/vo/message',
    /**
     * vo当前订单
     */
    'vo.order.now': '/vo/order/now',
    /**
     * vo历史订单
     */
    'vo.order.history': '/vo/order/history',
    /**
     * 管理店铺列表
     */
    'vo.manage.store': '/vo/manage/store/list',
    /**
     * 管理修改店铺
     */
    'vo.manage.store.edit': function (params) {
        return '/vo/manage/store/edit/' + params.storeId;
    },
    /**
     * 新增店铺
     */
    'vo.manage.store.new': '/vo/manage/store/new',
    /**
     * 更新店铺
     */
    'vo.manage.store.update': '/vo/manage/store/update',
    /**
     * 管理店铺套餐
     */
    'vo.manage.food.list': function (params) {
        return '/vo/manage/food/' + params.storeId + '/list';
    },
    /**
     * 管理修改套餐
     */
    'vo.manage.food.edit': function (params) {
        return '/vo/manage/food/' + params.storeId + '/edit/' + params.foodId;
    },
    /**
     * 新增套餐
     */
    'vo.manage.food.new': function (params) {
        return '/vo/manage/food/' + params.storeId + '/new';
    },
    /**
     * 更新套餐
     */
    'vo.manage.food.update': function (params) {
        return '/vo/manage/food/' + params.storeId + '/update'
    },
    /**
     * 通讯录
     */
    'vo.manage.user.list': '/vo/manage/user/list'
};