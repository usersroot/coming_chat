const proxy = require('http-proxy-middleware');
const BACK_URL = 'http://10.31.162.41:5000';

module.exports = function(app) {
  // 配置反向代理
  // app.use(proxy( 标识符，反向代理配置项))
  app.use(
    proxy('/api', {
      target: 'http://10.31.162.41:5000',
      changeOrigin: true
    })
  );
};
