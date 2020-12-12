/**
 * @file バリデーション系のモジュール
 */

import v8n from "https://unpkg.com/v8n/dist/v8n.esm.js";

/**
 * v8nでのバリデート条件をまとめたクラス
 * @type {class}
 */
const Validate = class v8nValidate {
	constructor() { }
	/**
	 * 入力内容が空欄かどうか確認するメソッド
	 */
	get isBlank() {
		return (
			v8n()
				.string()
				.empty()
		);
	}
	/**
	 * 入力内容が空欄でないかどうか確認するメソッド
	 */
	get isNotBlank() {
		return (
			v8n()
				.string()
				.minLength(1)
		);
	}
	/**
	 * 共通ルール 数値(Infinity・NaN不可) && 整数 && 正の数
	 */
	get commonRule() {
		return (
			v8n()
				.numeric()
				.integer()
				.positive()
		);
	}
	/**
	 * 共通ルール+1以上
	 */
	get isPosiInt() {
		return this.commonRule.greaterThanOrEqual(1);
	}
	/**
 * 共通ルール+0以上
 */
	get isPosiIntAnd0() {
		return this.commonRule;
	}

	/**
	 * 数字列かどうかチェックする
	 */
	get isNumericStr() {
		return (
			v8n()
				.string()
				.pattern(/\d+/)
		);
	}
};

/**
 * inputが空欄かどうか
 */
const isBlank = v8n()
	.string()
	.length(0, 0);

// inputパースチェック
/**
 * v8n共通ルール 数値(Infinity・NaN不可) && 整数
 */
const v8nCommonRule = v8n()
	.numeric()
	.integer();

/**
 * 共通ルール+1以上
 */
const isPosiInt = v8nCommonRule.greaterThanOrEqual(1);

/**
 * 共通ルール+0以上
 */
const isPosiIntAnd0 = v8nCommonRule.greaterThanOrEqual(0);

/**
 * 名前付きエクスポート
 * @deprecated 互換性のため一時的に残す
 * @todo テスト完了したら消す
 */
export { v8nCommonRule, isPosiInt, isPosiIntAnd0, isBlank };
/**
 * デフォルトエクスポート
 * @exports Validate
 */
export default Validate;