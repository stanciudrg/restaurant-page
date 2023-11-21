const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: [
                    path.resolve(__dirname, 'src/inline-svg'),
                ],
                generator: {
                    filename: 'img/[contenthash][ext]',
                },
            },
            {
                test: /\.svg$/i,
                loader: 'svg-inline-loader',
                exclude: [
                    path.resolve(__dirname, 'src/img/hero.svg'),
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new HtmlWebpackInjectPreload({
            files: [
                {
                    match: /.*\.ttf$/,
                    attributes: { as: 'font', type: 'font/ttf', crossorigin: true },
                },
                {
                    match: /.*\.svg$/,
                    attributes: { as: 'image' },
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: [
                    {
                        implementation: ImageMinimizerPlugin.svgoMinify,
                        options: {
                            encodeOptions: {
                                multipass: true,
                                plugins: [
                                    "preset-default",
                                ],
                            },
                        },
                    },
                    {
                        implementation: ImageMinimizerPlugin.sharpMinify,
                        options: {
                            encodeOptions: {
                                png: {
                                    effort: 10,
                                    compressionLevel: 9,
                                    quality: 10,
                                },
                            },
                        },
                    }
                ],
            }),
        ],
    },
};