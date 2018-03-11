const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'resource/[name].[ext]',
                        limit: 2000
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            node_modules: path.join(__dirname, '/node_modules'),
            util: path.join(__dirname, '/src/util'),
            component: path.join(__dirname, '/src/component'),
            service: path.join(__dirname, '/src/service'),
            page: path.join(__dirname, '/src/page')
        }
    },
    devServer: {
        port: '8088', //设置端口号
                      // 路径的配置
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy: {
            '/manage': {
                target: 'http://test.happymmall.com/',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://test.happymmall.com/',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './favicon.ico'
        }),
        new ExtractTextPlugin("css/[name].css")
    ]
};