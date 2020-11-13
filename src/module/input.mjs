import { } from "./validate.mjs";
import { parse, parseNullable } from "./parse.mjs";

/**
 * 
 */
const input = function getInputAndParse() {
	/**
	 * mapのkeyをまとめた配列
	 * @type {Array}
	 */
	const keyArray = [span, goal, total, approx];
	// getElementを繰り返す
	const span = document.getElementById(`js-input_${keyArray[0]}`);
	const goal = document.getElementById(`js-input_${keyArray[1]}`);
	const total = document.getElementById(`js-input_${keyArray[2]}`);
	const approx = document.getElementById(`js-input_${keyArray[3]}`);W

	if (approx以外がOKな値か) {
		/**
		 * input要素のvalueをまとめたマップ
		 * @type {map}
		 */
		const inputValues = new Map;
		inputValues.set(hogehoge, document.getElementById(`js-input_${hogehoge}`).value);

		if (approxの有無とOKな値か) {
			// mapにapproxをset
		}
		return inputValues;

	} else {
		// approx以外がNGな値の場合、例外を投げる
		throw new Error('input要素の値が正しくない');
	}
};

export default input;