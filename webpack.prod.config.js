const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const uglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [
                            [
                                "import",
                                [
                                    {
                                        "libraryName": "antd",
                                        "style": true
                                    }
                                ]
                            ]
                        ]
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: {
                                '@icon-url': '"~antd-iconfont/iconfont"',
                            }
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[path][name].[ext]',
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
            page: path.join(__dirname, '/src/page'),
            styles: path.join(__dirname, '/src/styles'),
            images: path.join(__dirname, '/src/images'),
            reduxModel: path.join(__dirname, '/src/reduxModel')
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
            },
            '/react-api/*': {
                target: 'http://localhost:3000',
                secure: false
            },
            '/api/*': {
                target: 'http://localhost:12306',
                secure: false
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
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new UglifyJSPlugin({
            cache: true,
            parallel: 2
        }),
        new webpack.DefinePlugin({
            'process.dev.NODE_ENV': JSON.stringify('product')
        })
    ]
};