/**
 * @file 各モジュールを統合
 * @todo バンドラーでまとめる
 */

// モジュールをインポート
import Input from "./module/input.mjs";
import calc from "./module/calc.mjs";
import Output from "./module/outputHtml.mjs";

/**
 * エラー表示用のoutput要素 #js-output_error
 * @type {HTMLElement}
 */
const outputError = document.getElementById('js-output_error');

// 各モジュールを統合
try {
	document.getElementById('js-form').addEventListener('submit', (event) => {
		// form要素のデフォルト動作をキャンセル
		event.preventDefault();

		// エラー表示output要素のテキストをクリア
		outputError.textContent = null;

		/**
		 * 計算結果 メーター表示に使いまわすため変数に格納
		 * @type {Map<string, number>}
		 */
		const result = calc(new Input());
		console.log(result); // Todo:後で消す
		new Output(result);
	});
} catch (error) {
	// エラー表示
	console.error(error);
	outputError.textContent = 'エラーが発生しました。入力内容をご確認ください。';
}