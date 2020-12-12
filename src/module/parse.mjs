/**
 * @file パースするモジュール
 */

import Validate from "./validate.mjs";
const validate = new Validate();

/**
 * パースするクラス
 * @param arg {string} - inputのvalue
 * @returns {number} - 引数をパースした数値
 */
const Parse = class Parse {
	/**
	 * 10進数にパースするメソッド
	 * @param arg {string} - 数字列
	 * @returns {number} - 10進数にパースしたnumber
	 */
	parseInput(arg) {
		if (validate.isNumericStr.test(arg)) {
			return parseInt(arg, 10);
		} else {
			throw new Error('引数が数値で構成された文字列でない');
		}
	}

	/**
	 * 空欄の場合nullを返すメソッド
	 * @param arg {string} - inputのvalue
	 * @returns {null | number} - null or number
	 */
	allowBlank(arg) {
		if (validate.isBlank.test(arg)) {
			// 空欄ならnullを返す
			return null;
		} else {
			// 空欄でないならparseInputに渡す
			return this.parseInput(arg);
		}
	}
};

export default Parse;