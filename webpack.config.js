module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  watch: true,
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2018 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}],
                // React の JSX を解釈
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};
