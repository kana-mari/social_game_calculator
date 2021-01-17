module.exports = {
	// モードの設定
	mode: 'production',
	// エントリーポイント
	entry: './src/index.js',

	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/src`,
		// 出力ファイル名
		filename: "index.min.js"
	}
};