/**
 * @fileoverview バリデーション系のモジュール
 * @todo バラバラの変数をオブジェクトにまとめる
 */

import v8n from "https://unpkg.com/v8n/dist/v8n.esm.js";

/**
 * v8nでのバリデート条件をまとめたクラス getterで書く
 * @type {class}
 */
const Validate = class v8nValidate {
	constructor() { }
	get isNotBlank() {
		return (
			v8n()
				.string()
				.minLength(1)
		);
	}
	get isBlank() {
		return (
			v8n()
				.string()
				.length(0, 0)
		);
	}
	get v8nCommonRule() {
		return (
			v8n()
				.numeric()
				.integer()
		);
	}
	get isPosiInt() {
		return this.v8nCommonRule.greaterThanOrEqual(1);
	}
	get isPosiIntAnd0() {
		return this.v8nCommonRule.greaterThanOrEqual(0);
	}
};

// パース前の入力内容チェック
/**
 * inputが空欄かどうか
 */
const isBlank = v8n()
	.string()
	.length(0, 0);

// inputパースチェック
/**
 * v8n共通ルール 数値(NaN不可) && 整数
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

// エクスポート
export { v8nCommonRule, isPosiInt, isPosiIntAnd0, isBlank, Validate };