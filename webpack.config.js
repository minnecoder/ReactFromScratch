const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-inline-environment-variables'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                options: {
                    plugins: ['transform-inline-environment-variables'],
                },
                test: /\.(s)?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                options: {
                    plugins: ['transform-inline-environment-variables'],
                },
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader',
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
};
