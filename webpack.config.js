var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webm|mp4)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    resolve: {
        // Allows us to do absolute imports from "src"
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: ["*", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development Mode",
            template: path.join(__dirname, "public/template.html"),
            favicon: path.join(__dirname, "public/icon.svg")
        })
    ]
};
