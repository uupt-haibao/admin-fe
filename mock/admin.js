'use strict'
/**
 * @description mock admin API
 * @author 双越
 */
Object.defineProperty(exports, '__esModule', { value: true })
exports.default = {
    'GET /api/admin/getUserInfo': {
        errno: 0,
        data: {
            username: 'sqxy',
        },
        // errno: 1,
        // message: '未登录',
    },
    'POST /api/admin/login': {
        errno: 0,
        data: {
            token: 'xxxxxx',
        },
    },
}
//# sourceMappingURL=admin.js.map
