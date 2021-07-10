// 開発・本番共通の設定ファイル

const webpack = require('webpack');

module.exports = {
	// エントリーポイント
	entry: './src/index.js',

	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/src`,
	}
};