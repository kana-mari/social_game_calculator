/**
 * @fileoverview バリデーション系のモジュール
 */

import v8n from "https://unpkg.com/v8n/dist/v8n.esm.js";

// input入力チェック
const inputRule = v8n()
.string();

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
export { v8nCommonRule, isPosiInt, isPosiIntAnd0 };