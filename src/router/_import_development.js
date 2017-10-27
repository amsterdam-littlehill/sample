// vue-loader at least v13.0.0+
// 异步加载
module.exports = file => require('@/views/' + file + '.vue').default
