const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/ts/main.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/main.js',
    },
    stats: {
        children: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sc|sa|c)ss/,
                use: [
                    { loader: MiniCssExtractPlugin.loader }, {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
}