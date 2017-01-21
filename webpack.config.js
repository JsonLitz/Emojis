module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime']
      }
    }
  ]
}
