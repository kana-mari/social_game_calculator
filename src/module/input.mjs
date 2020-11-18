import { v8nCommonRule, isPosiInt, isPosiIntAnd0, inputRule } from "./validate.mjs";
import { parse, parseNullable } from "./parse.mjs";

/**
 * mapのキーになる値をまとめた配列
 * @type {Array}
 */
const keysArray = ['span', 'goal', 'total', 'approx'];

/**
 * input要素の入力内容をまとめたMap
 * @type {map<string, string>}
 */
const inputValueMap = new Map;
for (const i of keysArray) {
	inputValueMap.set(i, document.getElementById(`js-input_${i}`).value);
}

/**
 * パースした値をまとめたMap
 * @type {map<string, number>}
 */
const parsedValueMap = new Map;
inputValueMap.array.forEach((value, key) => {
	parsedValueMap.set(key, parse(value));
});

/**
 * Mapの内容が正しいかチェックする関数
 * @param map {Map} - 入力内容をまとめたMap
 */
const input = function getInputAndParse(map) {
	// span, goal, totalが正しいかどうかチェック
	if (isPosiInt.test(map.get('span')) && isPosiInt.test(map.get('goal')) && isPosiIntAnd0.test(map.get('total'))) {
		// approxがNaNならapproxを削除
		if (Number.isNaN(map.get('approx'))) {
			map.delete('approx');
		}
		return map;

	} else {
		// approx以外がNGな値の場合、例外を投げる
		throw new Error('入力値が正しくない');
	}
};
// テスト用のエクスポート
export { };
export default input;