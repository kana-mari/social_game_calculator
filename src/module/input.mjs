// モジュールインポート
import { isPosiInt, isPosiIntAnd0, isBlank } from "./validate.mjs";
import Parse from "./parse.mjs";

/**
 * Parseをインスタンス化
 */
const parse = new Parse();

/**
 * input内容をまとめたMapを作成するクラス
 */
const MakeMap = class makeParsedValueMap {
	constructor() {
		/**
		* Mapのキーになる値をまとめた配列
		* @type {Array}
		*/
		const keys = ['span', 'goal', 'total', 'approx'];

		/**
		 * パースした値をまとめたMap
		 * @type {Map<string, number | null>}
		 */
		const parsedValueMap = new Map;

		// 値をset
		// span, goal, totalをパースした値をset
		for (let i = 0; i <= 2; i++) {
			parsedValueMap.set(keys[i], parse.parseInput(document.getElementById(`js-input_${keys[i]}`).value));
		}

		/**
		 * approxの入力内容をget
		 */
		const approx = document.getElementById('js-input_approx').value;
		// 空欄でなければapproxをset
		if (!isBlank.test(approx)) {
			parsedValueMap.set(keys[3], parse.parseInput(document.getElementById(`js-input_${keys[3]}`).value));
		}
		return parsedValueMap;
	}
};

/**
 * Mapの内容が正しいかチェックする
 * @param map {Map} - input内容をまとめたMap
 * @returns {Map} - 
 */
const validateInput = function validateInputMap(map) {
	// map.sizeが3なら3つチェック、4なら4つチェック
	// 3・4以外なら例外を投げる
	switch (map.size) {
		case 3:
			isPosiInt.test([map.get('span'), map.get('goal')]) && isPosiIntAnd0.test(map.get('total'));
			break;

		case 4:
			isPosiInt.test([map.get('span'), map.get('goal'), map.get('approx')]) && isPosiIntAnd0.test(map.get('total'));
			break;

		default:
			throw new Error('入力値が正しくない');
	}
};

// テスト用のエクスポート
export { MakeMap };

// 本番用のエクスポート