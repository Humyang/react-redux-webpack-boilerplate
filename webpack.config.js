var webpack = require('webpack');
var path = require('path');

// var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


/*监听css文件的变更*/
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var postcssImport = require('postcss-import');


var deps = [
    // 'react/dist/react.min.js',
    // 'react-router/dist/react-router.min.js',
    // 'moment/min/moment.min.js',
    // 'underscore/underscore-min.js',
    // 'react-dom/dist/react-dom.min.js',
];

var config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index:'./js/index.js'
    },
    resolve: {
        alias: {},
        extensions:["", ".webpack.js", ".web.js", ".js",".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "www"),
        filename: "js/[name].js",
        publicPath:'/'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                cacheDirectory: true,
                presets: process.env.NODE_ENV === 'production'?['es2015', 'stage-0', 'react']:['es2015', 'stage-0', 'react','react-hmre'],
                plugins: ['transform-object-assign']
            }
        },
        {
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")
            loader: "style-loader!css-loader?sourceMap!postcss-loader"
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }
    ]

    },
    // devtool: "source-map",
    postcss: function (webpack) {
        return [postcssImport({addDependencyTo: webpack}),require('autoprefixer'), require('precss')];
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.CommonsChunkPlugin('commons', 'js/commons.js'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin(),
                new OpenBrowserPlugin({ url: 'http://localhost:8080' })
        ]:[

        // new webpack.optimize.CommonsChunkPlugin('commons', 'js/commons.js'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
}

deps.forEach(function(dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
