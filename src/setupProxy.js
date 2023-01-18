const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/baserow',
    createProxyMiddleware({
      target: 'https://api.baserow.io/api',
      changeOrigin: true,
      headers: {
        'Authorization':
          `Token ${process.env.REACT_APP_BASEROW_KEY}`,
      },
      pathRewrite: {
        '^/api/baserow/': '/',
      },
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        // proxyReq.setHeader()
      },
      onProxyRes: (proxyRes, req, res) => {
        // log original request and proxied request info
        const exchange = `[${req.method}] [${proxyRes.statusCode}] ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}`;
        console.log(exchange); // [GET] [200] / -> http://www.example.com
      },
    })
  );
};