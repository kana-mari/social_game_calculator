// 開発用設定ファイル
module.exports = {
	// モードの設定
	mode: 'development',
	// エントリーポイント
	entry: './src/index.js',

	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/src`,
		// 出力ファイル名
		filename: 'bundle.js'
	}
};