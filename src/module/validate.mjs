/**
 * @file バリデーション系のモジュール
 */

import v8n from 'v8n';

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

	// Mapのチェック用
	/**
	 * 指定したkeyがMapにあるかどうかをチェックするメソッド
	 * @param map {Map} - keyをチェックしたいMap
	 * @param keys {array<any>} - 有無をチェックしたいkeyの配列
	 * @returns {boolean}
	 */
	hasMapKeys(map, keys) {
		if (map instanceof Map && Array.isArray(keys)) {
			return keys.every(element => map.has(element));
		} else {
			throw new TypeError('引数がMapとArrayでない');
		}
	}

	/**
 * Mapのvaluesが正の整数or0かチェックするメソッド
 * @param map {map} - Map
 * @returns {boolean}
 */
	isValuesPosiInt(map) {
		/**
		 * map.valuesの配列
		 * @type {Array<number>}
		 */
		const arr = Array.from(map.values());
		/**
		 * 配列の要素が正の整数(0含む)かチェックする Array.prototype.everyのコールバック関数
		 * @type {function}
		 * @param element - 配列の要素
		 * @returns {boolean}
		 */
		const validateArr = (element) => {
			return this.isPosiIntAnd0.test(element);
		};

		return arr.every(validateArr);
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