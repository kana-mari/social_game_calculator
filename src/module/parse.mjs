// パースするモジュール

/**
 * パースする関数
 * @param params {string} - inputのvalue
 * @returns 
 */
const parse = function parseInput(params) {
	if (typeof params === 'string') {
		return parseInt(params, 10);
	} else {
		throw new TypeError('引数がstring型でない');
	}
};

/**
 * nullを0にパースする
 * @todo 変数名・関数名考える
 * @param arg {string} - 
 */
const parseNullable = function parseNullable(arg) {
	if (arg === null) {
		return 0;
	} else {
		return parse(arg);
	}
};

export { parse, parseNullable };