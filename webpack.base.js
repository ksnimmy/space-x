module.exports = {
    //tell the webpack to run babel on every file it runs through
    module: {
        rules: [
            //Babel
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                //use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            },
            //ES lint
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    }
}