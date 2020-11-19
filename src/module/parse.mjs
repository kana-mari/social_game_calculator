// パースするモジュール

import v8n from "https://unpkg.com/v8n/dist/v8n.esm.js";

/**
 * パースする関数
 * @param arg {string} - inputのvalue
 * @returns {number} - 引数をパースした数値
 */
const parse = function parseInput(arg) {
	if (v8n().string().pattern(/\d+/).test(arg)) {
		return parseInt(arg, 10);
	} else {
		throw new Error('引数が数値で構成された文字列でない');
	}
};

export { parse };