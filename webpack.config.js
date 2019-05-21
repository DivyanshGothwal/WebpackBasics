const path = require('path');
const autoPrefixer = require('autoprefixer');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',// it stores the indo to convert bundled code back to orignal code so that it can be debugged in web browser
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // at which place our bundles should be placed in folder dist,
        filename: 'bundle.js', // name of the file to be output
        chunkFilename: '[id].js',// this is generated 
        publicPath: ''
    },
    resolve: {
        // array of possible extentions
        extensions: ['.js', '.jsx'] // if webpack encounters a import without an extention then try one of these extention and find the file with one of these
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },// this will extract code from css and inject at top of HTML file to reduce file downloads
                    {
                        loader: 'css-loader',
                        options: {
                            //importLoaders: 1,
                            //modules: true,//  this  enables css modules
                            //localIdentName: '[name]__[local]__[hash:base64:5]' // how generated classes by css modules look like 
                        }
                    }, // this tells webpack what to do with .css files
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoPrefixer({
                                    browsers: [
                                        ">1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ],
                // loaders are executed from botton to up and order matters
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=800000&name=images/[name].[ext]'// [name].[ext] are the placeholders which will copy the files as it is in images folder of dist folder
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};