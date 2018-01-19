const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    entry:{
        app:path.join(__dirname,'../client/index.js')
    },
    output:{
        filename:'[name].[hash].js',
        path: path.join(__dirname,'../dist'),
        publicPath:'/public/'
    },
    module:{
        rules:[
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude:[
                    path.join(__dirname,'../node_modules')
                ]
            }
        ]
    },
    plugins:[
        new HTMLPlugin({
            template: path.join(__dirname, '../client/index.template.html')
        })
    ]
}


//localhost:
if(isDev){
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname,'../client/index.js')
        ]
    }
    config.devServer = {
        host:'0.0.0.0',//访问方式
        port:'3030',//访问端口
        contentBase: path.join(__dirname,'../dist'),//项目生成目录
        hot: true,//热更新
        overlay:{
            error: true
        },
        publicPath: '/public',
        historyApiFallback:{
            index:'/public/index.html'
        }
    },
    config.plugins.push(new webpack.HotModuleReplacementPlugin)
}

module.exports = config