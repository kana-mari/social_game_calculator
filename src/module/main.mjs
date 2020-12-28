/**
 * @file 各モジュールを統合
 * @todo バンドラーでまとめる
 * @todo クラスにまとめる
 */

// モジュールをインポート
import Input from "./input.mjs";
import calc from "./calc.mjs";
import Output from "./outputHtml.mjs";
import domParse from "./domParse.mjs";

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

		// エラー表示をリセット
		// エラーブロック非表示
		outputError.classList.add('error--invisible');
		// エラー表示ブロックの中身をすべて削除
		while (outputError.firstChild) {
			outputError.removeChild(outputError.firstChild);
		}

		/**
		 * 入力内容 メーター表示に使い回すため変数に格納
		 * @type {Map<string, number>}
		 */
		const input = new Input();

		/**
		 * 計算結果 メーター表示に使い回すため変数に格納
		 * @type {Map<string, number>}
		 */
		const result = calc(input);

		new Output(result);
	} catch (error) {
		// コンソールにエラー表示
		console.error(error);
		// エラーブロック可視化
		outputError.classList.remove('error--invisible');
		// DOMをパースしてoutputErrorの子要素
		outputError.appendChild(domParse(`<h1 class="error__title">！エラーが発生しました。</h1>`));
		outputError.appendChild(domParse(`<p>入力内容を確認してください。<br>半角数字のみ入力できます。</p>`));
	}
});

// export default main;