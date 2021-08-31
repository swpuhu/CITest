const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: '[name]bundle.js',
        path: __dirname + '/dist',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9001,
    },
    module: {
        rules: [
            // Place this *before* the `ts-loader`.
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|obj|png|gif|svg|jpeg|ttf|bmp|mtl)$/, use: ['file-loader'] },
        ],
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tutorial',
        }),
        new CleanWebpackPlugin(),
    ],
};
