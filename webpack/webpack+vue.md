一, 初始化自己的项目

(1). 初始化npm

    npm init 
    <!--一路回车，会生成package.json文件-->
(2).
    在根目录下新建src， build 文件夹，新建index.html作为html模版

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Vue-webpack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>
(3). 安装依赖

由于webpack4及以后的版本中webpack和webpack-cli是配套的，所以两个必须同时安装，webpack-cli设计思路是命令式的帮助配置webpack，免于写webpack配置文件，但并未完善，并没有感觉多快。

    npm i webpack webpack-cli -D
二, 配置webpack

在build目录下新建一下三个文件：

    webpack.base.config.js
    webpack.dev.config.js
    webpack.prod.config.js
分别应用于基础公用配置编写，开发环境配置编写，生产环境配置编写

(1). webpack.base.config.js配置

    
    const path = require('path')
    module.exports = {
        entry: {
            app: '../src/index.js'
        },
        output: {
            // __dirname是node中的一个全局变量
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[hash:5].js'
        },
        module: {
            rules: []
        },
        plugins: []
    }
(2). webpack.dev.config.js配置

    const merge = require('webpack-merge')
    const path = require('path')
    const baseConf = require('./webpack.base.config')
    
    // 通过merge合并development和base的配置
    module.exports = merge(baseConf, {
        // webpack4中必须指定开发环境，也可以在npm script脚本中指定
        mode: 'development',
        devtool: 'souce-map',
        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),
            port: 3000
        }
    })
    
(3). webpack.prod.config.js配置

    const merge = require('webpack-merge')
    
    const path = require('path')
    const baseConf = require('./webpack.base.config')
    
    module.exports =merge(baseConf, {
        mode: 'production',
        devtool: 'source-map',
        module: {
            rules: []
        },
        plugins: []
    })
    
(4). 配置基本插件

    npm i webpack clean-webpack-plugin html-webpack-plugin -D
    
由于html-webpack-plugin插件prod和dev环境都用的贷，所以放在base下

    const htmlWebpackPlugin = require('html-webpack-plugin');
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        })
    ]
clean-webpack-plugin插件放在prod环境下，打包前清除dist目录下的文件

    const cleanWebpackPlugin = require('clean-webpack-plugin')
     plugins: [
        // 新版本的插件只接受一个对象配置作为参数
        new cleanWebpackPlugin({
            root: path.resolve(__dirname, '../dist/')
        }),
    ]

(5). npm script脚本配置

    "build": "webpack --config build/webpack.prod.config.js",
    "dev": "webpack-dev-server --progress --config build/webpack.dev.config.js"
在src/index.js下写

    alert('hello world')
分别运行 

    npm run dev 
    npm run build
查看打包成功与否

三, 配置plugins和loader
(1). 配置babel来转换ES6语法

    npm i  @babel/runtime  @babel/core  @babel/plugin-transform-runtime @babel/preset-env  babel-loader -D
在根目录下新建.babelrc文件并配置：

    {
        "presets": [
            [
                "@babel/preset-env", {
                    "targets": {
                        "browsers": ["> 1%", "last 2 versions"]
                    },
                    // 用来treeshaking，不要将es6模块转换为common.js
                    "modules": false,
                    "useBuiltIns": "usage"
                }
            ]
        ],
    }
在webpack.base.config.js的module下：

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {}
                }]
            }
            
现在可以在index.js中写es6语法

(2). 处理样式

在这里我个人比较喜欢原生css + css-module

    npm i postcss-loader css-loader style-loader autoprefixer -D
在webpack.base.config.js的module下：

    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },{
                loader: 'css-loader',
                options: {
                    /* 是否压缩 */
                    minimize: true,
                    /* 启用 css-modules */
                    modules: true,
                    /* 定义编译出来的名称 */
                    localIdentName: '[path][name]_[local]_[hash:base64:5]'
                }
            },
            {
                /* 将css3属性添加上厂商前缀 */
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        /* 根据.browserlist加 css 各浏览器前缀 */
                        require('autoprefixer')({
                            browsers: ['last 2 versions'] 
                        })
                    ]
                }
            }
        ]
    }
(3). 处理file文件 

    // 各种loader 按自己需求配置就行
    npm i file-loader url-loader img-loader -D
    
(4). .vue文件

.vue的单文件写法给了开发很大的便利，采用vue-loader编译template模版编。其中vue-loader 和 vue-template-compiler必须一起安装，我们也可以用vue-style-loader替换style-loader将样式插入模版中
    
    npm i vue-loader  vue-style-loader vue-template-compiler -D
    npm i vue -S
在webpack.base.config.js的module下：

    const vueLoaderPlugin = require('vue-loader/lib/plugin')
    module: {
        rules: [ 
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
    plugins: [
        new vueLoaderPlugin()
    ]
vueLoaderPlugin插件是必须的，它可以将之前定义过的module规则（比如说处理es6语法等等）应用到.vue相应的代码块中。
现在可以在src文件下写vue代码了：
    
    // index.js
    import Vue from 'vue'
    import App from './App.vue'
    
    new Vue({
        el: '#app',
        render: h => h(App)
    })
    // App.vue 利用css-module
    <template>
        <div :class="$style.page">
            <div :class="$style.left">back</div>
            <div :class="$style.right">for</div>
        </div>
    </template>
    <script>
    export default {
    }
    </script>
    <style module>
        .div {
            font-size: 15px;
            cursor: pointer;
            border: 1px solid black;
            height: 30px;
            line-height: 30px;
            vertical-align: middle;
            border-radius: 5px;
            margin:0 2px;
            text-align: center;
            box-shadow: 1px 1px gray
        }
        .page {
            /* composes: div; */
            display: flex;
        }
        .left {
            composes: div;
            width: 45px;
        }
        .right {
            composes: div;
            width: 45px;
        }
    </style>

三, 优化
(1). 配置resolve

webpack.base.config.js下：

    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['*', '.js', '.json', '.vue'],
    },
    
(2) 开启热更新

webpack4配置热更新较为简单

    1) 设置devServer.hot = true
    2) 开启 webpack.HotModuleReplacementPlugin插件
vue-style-loader内置了style-loader，css热更新开箱即用。js热更新需要在入口js文件面加入一句判断：
    
    if (module.hot) {
        module.hot.accept();
    }
    
(3) 配置happypack

    happyloader将任务分解成多个子进程去并发执行，子进行处理完之后将结果发送给
    主进程。例如因为babel-loader要分析将代码转化成ast，引入响应的polyfill，是一个很耗时的工作。
    利用happyloader去处理babel-loader，所有需要经过babel-loader处理的文件都先
    交给了happypack/loader去处理。每通过new HappyPack()实例就是告诉happyPack核心调度器
    如何通过一系列Loader去转换一类文件，并且可以制定如何为这类转换器分配子进程
安装：

    npm i happypack 
配置：

    const happyPack = require('happypack')
    const happyThreadPool = happyPack.ThreadPool({size: os.cpus().length})
    {
            test: /\.js$/,
            // exclude: /node_modules/,
            use: [{
                loader: 'happypack/loader?id=happybabel'
            }]
    },
    plugins: [
        new happyPack({
            id: 'happybabel',
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true',
            }],
            verbose: true,
            // 共享进程池
            threadPool: happyThreadPool
        })
    ]
(4). 提取runtime 代码

webpack4新增的 optimization.runtimeChunk 和 optimization.splitChunks用来替代 webpack3 中 commonsChunkPlugin 进行代码分割
    
    optimize: {
        runtimeChunk: {
            name: 'manifest'
        }
    },
    //剩余拆分第三方代码可以利用 optimization.splitChunks 配置

(5). 动态链接库DLL

第三方代码 比如react vue vue-router等除了版本更迭，剩下不会有太大变化，所以可以将其放到 dll 动态链接库中，优化打包速率。
    
    1). build目录下新建 webpack.dll.config.js 并配置
        const webpack = require('webpack')
        const path = require('path')
        const CleanWebpackPlugin = require("clean-webpack-plugin");

        module.exports = {
            entry: {
                vendors: ['vue']
            },
            output: {
                filename: '[name].[hash:5].dll.js',
                // 存放dll库
                path: path.resolve(__dirname, "../src/assets/dll"),
                // 动态链接库全局变量名称
                library: "_dll_[name]"
            },
            plugins: [
                new CleanWebpackPlugin({
                    root: path.resolve(__dirname, "../src/assets/dll.js")
                }),
                new webpack.DllPlugin({
                    //需要和动态链接库全局变量名称相同，因为通过全局变量名称找到相对应的第三方库
                    name: '_dll_[name]',
                    path: path.resolve(__dirname,'[name].dll.manifest.json')
                })
            ]
        }
    2). 在webpack.dev.config.js下
        new webpack.DllReferencePlugin({
            manifest: require('./vendors.dll.manifest.json')
        }),
    3) npm scrip中：
        "dll": "webpack --mode production --config build/webpack.dll.config.js"
先npm run dll 再进行npm run build打包，明显可以看出打包的代码小的多。

(5) 提取css

webpack4利用 mini-css-extract-plugin 插件

安装并引用插件即可


总结：
    
    webpack更新版本太快，webpack5好像出来了，一切以官方文档为准