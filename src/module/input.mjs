// モジュールインポート
import { isPosiInt, isPosiIntAnd0 } from "./validate.mjs";
import Parse from "./parse.mjs";

/**
 * 
 */
const parse = new Parse();

// マップ関連まとめたい
const Hogehoge = class makeParsedValueMap { };

/**
 * Mapのキーになる値をまとめた配列
 * @type {Array}
 */
const keysArray = ['span', 'goal', 'total', 'approx'];

/**
 * パースした値をまとめたMap
 * @type {Map<string, number | null>}
 */
const parsedValueMap = new Map;
// span, goal, totalをパースした値をset
for (let i = 0; i <= 2; i++) {
	parsedValueMap.set(keysArray[i], parse.parseInput(document.getElementById(`js-input_${keysArray[i]}`).value));
}
// approxはparse.allowBlankしてset
parsedValueMap.set(keysArray[3], parse.allowBlank(document.getElementById(`js-input_${keysArray[3]}`).value));

/**
 * Mapの内容が正しいかチェックする関数
 * @param map {Map} - 入力内容をまとめたMap
 */
const input = function getInputAndParse(map) {
	// span, goal, totalが正しいかどうかチェック
	if (isPosiInt.test([map.get('span'), map.get('goal')]) && isPosiIntAnd0.test(map.get('total'))) {
		// approxがnullならapproxを削除
		if (map.get('approx') === null) {
			map.delete('approx');
		}
		return map;
	} else {
		// approx以外がNGな値の場合、例外を投げる
		throw new Error('入力値が正しくない');
	}
};

// テスト用のエクスポート
export { keysArray, parsedValueMap };

// 本番用のエクスポート
export default input;