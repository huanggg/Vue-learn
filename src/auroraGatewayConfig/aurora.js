

var target = process.env.VUE_APP_BUILD_TARGET || 'dev'
var config = require('./aurora.' + ((target === 'card' || !target) ? 'dev' : target))

module.exports = config
