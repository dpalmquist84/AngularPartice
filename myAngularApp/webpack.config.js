const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports= function () {
    return {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },

        reslove: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                { test: /\.ts$, loader: '@ngtools/webpack' }
            ]
        },

        plugins: [
            new CopyWebpackPlugin([
                 { from : 'src/assets', to: 'assets'}
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            })
        ]
    };
}