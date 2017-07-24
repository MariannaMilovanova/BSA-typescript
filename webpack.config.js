const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve('./src/js'),
    devtool: "source-map",
    entry: "./index.ts",
    output: {
        path: path.resolve('./dist'),
        // filename: '[name].bundle.js',
        // sourceMapFilename: '[name].map',
        path: __dirname + "/dist",
        filename: "bundle.js"
        // devtoolModuleFilenameTemplate: function (info) {
        //     return "file:///" + info.absoluteResourcePath;
        // }
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve('./src'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: "html" },
        ]
    },
    devServer: {
        inline:true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typescript Webpack Starter',
            template: '!!ejs-loader!index.html'
        })
    ]
}