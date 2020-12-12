// モジュールインポート
import Validate from "./validate.mjs";
import Parse from "./parse.mjs";

/**
 * Validateをインスタンス化
 */
const validate = new Validate();

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
			// input要素が入力されていれば、mapにvalueをset
			if (validate.isNotBlank.test(document.getElementById(`js-input_${i}`).value)) {
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
			result = validate.isPosiInt.test(map.get('span'))
				&& validate.isPosiInt.test(map.get('goal'))
				&& validate.isPosiIntAnd0.test(map.get('total'));
			break;

		case 4:
			// Mapの各要素をチェック span, goal, total, approxがOKならtrue
			result = validate.isPosiInt.test(map.get('span'))
				&& validate.isPosiInt.test(map.get('goal'))
				&& validate.isPosiIntAnd0.test(map.get('total'))
				&& validate.isPosiInt.test(map.get('approx'));
			break;

		default:
			throw new RangeError('Map.sizeは3か4でなければならない');
	}
	return result;
};

/**
 * 上記モジュールをまとめたクラス
 */
const Input = class InputModule {
	constructor() {
		const inputMap = new InputMap();
		if (checkMap(inputMap)) {
			return inputMap;
		} else {
			throw new Error('入力内容が正しくない');
		}
	}
};

/**
 * テスト用のエクスポート
 * @exports
 * @deprecated
 */
export { InputMap, checkMap };

// 本番用エクスポート
export default Input;