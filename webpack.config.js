/*Created by SmallFour on 2018/5/16*/
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/build', // 打包后文件存放地方
        filename: 'bundle-[hash].js' // hash缓存
    },
    devServer: {
        contentBase: './build', // 服务器指向的目录
        historyApiFallback: true,
        inline: true,
        hot: true
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
                            minimize: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('smallFour所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname
        })

    ]
}