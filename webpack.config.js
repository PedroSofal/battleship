import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    main: './src/index.js',
    placeShips: './src/place-ships.js',
    battle: './src/battle.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name].[hash][ext]',
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
      template: './src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      title: 'Battleship | Place Ships',
      filename: 'place-ships.html',
      template: './src/place-ships.html',
      chunks: ['placeShips']
    }),
    new HtmlWebpackPlugin({
      title: 'Battleship | Battle',
      filename: 'battle.html',
      template: './src/battle.html',
      chunks: ['battle']
    }),
  ]
}