const path = require("path");
const Dotenv = require("dotenv-webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  plugins: [
    new Dotenv(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        src: path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader", 
        }, {
          loader: "less-loader", 
          options: {
            lessOptions: { 
              modifyVars: {
                "primary-color": "#366AEA",
                "link-color": "#366AEA",
                "font-size-base": "15px",
                "border-radius-base": "2px"
              },
              javascriptEnabled: true
            }
          }
        }]
      }
    ]
  }
}
