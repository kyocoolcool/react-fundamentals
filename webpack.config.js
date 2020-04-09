const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //導入在內存中自動生成index頁面插件

//創建一個插件實例對象
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html'
});

//向外暴露一個打包的配置對象，因為webpack是基於node構建的，所以webpack支持所有node API和語法。
//Webpack默認只能打包js後綴名類型的文件，像.png  .vue 無法主動處理，所以要配置第三方的loader。
module.exports = {
    mode: "development",
    plugins: [
        htmlWebpackPlugin
    ],
    module: { //所有第三方模塊的配置規則
        rules: [ //第三方匹配規則
            {test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/}
        ]
    }
};

