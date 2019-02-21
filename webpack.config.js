const path = require('path');

module.exports = {
    entry: './src/reducers/redux-full.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            // regex above
            exclude: /node_modules/
            // we exclude node_modules
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    // devtools sourcemaps [pokazuje linijki w plikach js]
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};