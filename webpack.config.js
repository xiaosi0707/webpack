/*Created by SmallFour on 2018/5/16*/
module.exports = {
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/public', // 打包后文件存放地方
        filename: 'bundle.js'
    }
}