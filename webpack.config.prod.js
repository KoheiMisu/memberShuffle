var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ビルドに含めるファイルを格納するディレクトリ
    entry: './src/index.js',

    // ビルドしたファイルを格納するディレクトリと、ファイル名
    output: {
        path: './docs/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                loader: 'style!css'
            }
        ]
    },

    plugins: [
        // 生成するHTMLの設定
        new HtmlwebpackPlugin({
            title: 'shuffle'
        })
    ]
};