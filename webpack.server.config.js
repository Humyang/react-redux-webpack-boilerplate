var webpack = require('webpack');

var fs = require('fs')
var path = require('path')

module.exports = {
    entry:path.resolve(__dirname,'server.js'),
    resolve: {
        alias: {},
        extensions:["", ".webpack.js", ".web.js", ".js",".jsx"]
    },
    output:{
        filename:'./server.bundle.js'
    },

    targer:'node',

    // keep node_module paths out of the bundle
    externals:fs.readdirSync(path.resolve(__dirname,'node_modules')).concat([
        'react-dom/server','react/addons',
    ]).reduce(function(ext,mod){
        ext[mod] = 'commonjs ' + mod
        return ext
    },{}),

    node:{
        __filename:true,
        __dirname:true
    },

    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-object-assign']
                }
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")
                loader: "ignore-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ]
}
