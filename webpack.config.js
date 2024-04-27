import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    main: './src/scripts/screens/index.js',
    strategyRoom: './src/scripts/screens/strategy-room.js',
    battle: './src/scripts/screens/battle.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[name].[hash][ext]',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/audio/[name][ext]',
        },
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship | Main Menu',
      filename: 'index.html',
      template: './src/html/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      title: 'Battleship | Strategy Room',
      filename: 'strategy-room.html',
      template: './src/html/strategy-room.html',
      chunks: ['strategyRoom']
    }),
    new HtmlWebpackPlugin({
      title: 'Battleship | Battle',
      filename: 'battle.html',
      template: './src/html/battle.html',
      chunks: ['battle']
    }),
  ]
}