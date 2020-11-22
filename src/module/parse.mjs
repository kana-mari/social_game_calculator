/**
 * @fileoverview パースするモジュール
 */

import v8n from "https://unpkg.com/v8n/dist/v8n.esm.js";

/**
 * パースするオブジェクト
 * @param arg {string} - inputのvalue
 * @returns {number} - 引数をパースした数値
 */
const parse = {
	/**
	 * 10進数にパースするメソッド
	 * @param arg {string} - 数字からなる文字列
	 * @returns {number} - 10進数にパースしたnumber
	 */
	parseInput(arg) {
		if (v8n().string().pattern(/\d+/).test(arg)) {
			return parseInt(arg, 10);
		} else {
			throw new Error('引数が数値で構成された文字列でない');
		}
	},

	/**
	 * 空欄の場合nullを返すメソッド
	 * @param arg {string} - inputのvalue
	 * @returns {null | number} - null ornumber
	 */
	allowBlank(arg) {
		if (v8n().string().length(0, 0).test(arg)) {
			// 空欄ならnullを返す
			return null;
		} else {
			// 空欄でないならparseInputに渡す
			return this.parseInput(arg);
		}
	}
};

export default parse;