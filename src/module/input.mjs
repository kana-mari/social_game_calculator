// モジュールインポート
import { isPosiInt, isPosiIntAnd0, isBlank } from "./validate.mjs";
import Parse from "./parse.mjs";

/**
 * Parseをインスタンス化
 */
const parse = new Parse();

/**
 * input内容をまとめたMapを作成するクラス
 * @returns {Map<string, number>}
 */
const InputMap = class makeParsedValueMap {
	constructor() {
		/**
		* Mapのキーになる値をまとめた配列
		* @type {Array}
		*/
		const keys = ['span', 'goal', 'total', 'approx'];

		/**
		 * パースした値をまとめたMap
		 * @type {Map<string, number>}
		 */
		const map = new Map;

		// 値をset
		for (const i of keys) {
			// inputが入力されていればset
			if (!isBlank.test(document.getElementById(`js-input_${i}`).value)) {
				map.set(i, parse.parseInput(document.getElementById(`js-input_${i}`).value));
			}
		}
		return map;
	}
};

/**
 * Mapの内容が正しいかチェックする関数
 * @param map {Map<string, number>} - input内容をまとめたMap
 * @returns {boolean} - valueのチェック結果
 */
const checkMap = function checkInputMap(map) {
	/**
	 * validate結果を格納する変数 変更可能
	 * @type {boolean}
	 */
	let result = "";
	// map.sizeが3→3項目チェック、4→4項目チェック
	// sizeが3・4以外なら例外を投げる
	switch (map.size) {
		case 3:
			// Mapの各要素をチェック span, goal, totalがOKならtrue
			result = isPosiInt.test(map.get('span')) && isPosiInt.test(map.get('goal')) && isPosiIntAnd0.test(map.get('total'));
			break;

		case 4:
			// Mapの各要素をチェック span, goal, total, approxがOKならtrue
			result = isPosiInt.test(map.get('span')) && isPosiInt.test(map.get('goal')) && isPosiIntAnd0.test(map.get('total')) && isPosiInt.test(map.get('approx'));
			break;

		default:
			throw new RangeError('Map.sizeは3か4でなければならない');
	}
	return result;
};

// テスト用のエクスポート
export { InputMap, checkMap };