const path = require('path');

module.exports = {
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
            }
        ]
    },
    mode: 'none' // 개발, 서비스 구별을 위한 필드
};
