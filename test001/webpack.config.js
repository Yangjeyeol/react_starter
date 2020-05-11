const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 개발, 서비스 구별을 위한 필드
    entry: './src/index.js', // 시작파일
    output: {
        filename: 'bundle.[hash].js', // 결합파일 이름
        path: path.resolve(__dirname, 'build') // 결합파일 위치
    },
    module: { // 결합을 위한 컴파일 조건 설정
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            //camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html' })
    ],
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 4000,
        historyApiFallback: true
    }
};
