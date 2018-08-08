const webpack = require("webpack");
module.exports = {
    mode: "development",
    entry: {
        main:"./src/js/index.js",
        minijq: "./src/js/jquery-3.3.1.min.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: '/out',
        publicPath: "/out"
    },
    module:{
        rules:[
            { test: /\.(css|less)$/, use: ["style-loader",'css-loader',"less-loader"] },
            {test: /\.js$/, use: ["babel-loader"]},
            {test: /\.(jpg|png)$/, use: ["url-loader?limit=10&name=/[name].[ext]"]}
        ]
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })]

}