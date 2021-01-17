// 本番用設定ファイル

// 共通設定
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
	// モードの設定
	mode: 'production',

	// ファイルの出力設定
	output: {
		// 出力ファイル名
		filename: "index.min.js"
	}
});