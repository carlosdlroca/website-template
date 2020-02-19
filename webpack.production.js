var path = require("path"),
    TerserPlugin = require("terser-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: path.join(__dirname, "src/index.js")
    },
    output: {
        filename: "main-[contentHash].bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                title: "Production Mode",
                template: path.join(__dirname, "public/template.html"),
                favicon: path.join(__dirname, "public/icon.svg"),
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeTagWhitespace: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: ["*", ".js"]
    }
};
