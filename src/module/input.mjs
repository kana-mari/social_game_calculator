import { isPosiInt, isPosiIntAnd0 } from "./validate.mjs";
import { parse, parseAllowBlank } from "./parse.mjs";

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
 * @type {map<string, number | null>}
 */
const parsedValueMap = new Map;
// span, goal, totalをパースした値をset
for (let i = 0; i <= 2; i++) {
	parsedValueMap.set(keysArray[i], parse(inputValueMap.get(keysArray[i])));
}
// approxはparseAllowBlankする
parsedValueMap.set(keysArray[3], parseAllowBlank(inputValueMap.get(keysArray[3])));

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
export { };
export default input;