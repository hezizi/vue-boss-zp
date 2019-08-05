module.exports = {
  // outputDir: 'ui',
  // baseUrl: '/ui',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        ws: true,
        // pathRewrite: {
        //   '^/api': '/mock/52014/api/', // rewrite path
        // },
        changeOrigin: true
      }
    }
  }
}