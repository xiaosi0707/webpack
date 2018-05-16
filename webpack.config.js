/*Created by SmallFour on 2018/5/16*/
const webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/public', // 打包后文件存放地方
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public', // 服务器指向的目录
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('smallFour所有，翻版必究')
    ]
}