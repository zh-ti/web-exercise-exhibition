const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 添加 ICO 文件的 loader 规则
    config.module
      .rule('ico')
      .test(/\.ico$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]', // 输出的文件名和扩展名保持不变
      })
  },
})
