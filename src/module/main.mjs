/**
 * @file 各モジュールを統合
 * @todo バンドラーでまとめる
 * @todo エラーをDOMに表示
 */

// モジュールをインポート
import Input from "./input.mjs";
import calc from "./calc.mjs";
import Output from "./outputHtml.mjs";

/**
 * エラー表示用のoutput要素 #js-output_error
 * @type {HTMLElement}
 */
const outputError = document.getElementById('js-error');

// 各モジュールを統合
document.getElementById('js-form').addEventListener('submit', (event) => {
	try {
		// form要素のデフォルト動作をキャンセル
		event.preventDefault();

		// エラー表示ブロックを非表示
		outputError.classList.add('error--invisible');

		/**
		 * 計算結果 メーター表示に使い回すため変数に格納
		 * @type {Map<string, number>}
		 */
		const result = calc(new Input());
		new Output(result);
	} catch (error) {
		// エラー表示
		console.error(error);
		outputError.classList.remove('error--invisible');
	}
});

export default