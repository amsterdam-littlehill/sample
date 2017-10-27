//同步加载
module.exports = file => () => import('@/views/' + file + '.vue')
