const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')


module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    filename: 'audio-dance.min.js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './'),   //根目录
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader" // 转化需要的loader
          // options选项配置在: .babelrc
          // options: {
          //   ...
          // }
        }
      }
    ]
  }
}
