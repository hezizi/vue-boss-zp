module.exports = {
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