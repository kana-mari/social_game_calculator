/**
 * @todo mochaでテスト書く
 * @todo esモジュール化
 */

// 計算ボタン押下時関数を実行
document.getElementById('js-button').addEventListener('click', () => {
	// フォームへの入力内容を取得→整数にパース→計算→html上で表示する
	/**
	 * inputのIDを引数に指定→valueを取得して整数化して返す関数
	 * @param {String} id  - #id
	 * @return {Number}
	 */
	const parseInput = (id) => {
		return parseInt(document.getElementById(id).value, 10)
	};
	/**
	 * inputの内容をまとめた連想配列
	 * @type {Object}
	 * @todo Mapにする
	 */
	const getInput = {
		/**
		 * イベント日数
		 * @type {Number}
		 */
		span: parseInput('js-input_span'),
		/**
		 * 目標pt.
		 * @type {Number}
		 */
		goal: parseInput('js-input_goal'),
		/**
		 * 獲得済みpt.
		 * @type {Number}
		 */
		total: parseInput('js-input_total'),
		/**
		 * 1周回あたりの平均獲得pt.
		 * @type {Number}
		 */
		approx: parseInput('js-input_approx')
	};
	// バリデーションの共通ルール = 数値 & NaN不可 & 整数
	const validateForm = v8n()
		.numeric()
		.integer();
	// span, goal, totalの入力内容をバリデーション
	// 共通ルール + 1以上 & 0以上
	if (validateForm
		.greaterThanOrEqual(1)
		.test(getInput.span, getInput.goal)
		&&
		validateForm
			.greaterThanOrEqual(0)
			.test(getInput.total)) {
		// 条件を満たす場合、計算
		/**
		 * 目標までのポイント数
		 * @type {Number}
		 */
		const calcRemain = getInput.goal - getInput.total;
		/**
		 * 1日当たりの目標ポイント
		 * @type {Number}
		 */
		const calcDailyGoal = Math.round(calcRemain / getInput.span);
		// htmlに出力
		/**
		 * 出力先DOM取得→textContentに計算結果を代入
		 * @param id {String} 出力先要素のID
		 * @param result {Number} 計算結果
		 * @returns {String} 桁区切りされた計算結果
		 */
		const output = (id, result) => {
			return document.getElementById(id).textContent = result.toLocaleString();
		};
		// 計算結果を出力
		output('js-output_remain', calcRemain);
		output('js-output_dailyGoal', calcDailyGoal);
		{
			/**
			* tableを表示&アニメーション用クラスを付与
			* @type {HTMLElement}
			*/
			const table = document.getElementById('js-table');
			table.classList.remove('table--invisible', 'animate__animated', 'animate__fadeIn');
			table.classList.add('table', 'animate__animated', 'animate__fadeIn');
		}

		// approxが空欄ではなく、数値が入力されている場合→周回回数系を計算して出力
		if (validateForm
			.greaterThanOrEqual(1)
			.test(getInput.approx)) {
			// 残り戦闘回数を計算して出力
			output('js-output_remainBattle', Math.ceil(calcRemain / getInput.approx));
			// 1日当たりの必要出撃回数を計算して出力
			output('js-output_dailyBattle', Math.ceil(calcDailyGoal / getInput.approx));
		} else {
			// 空の内容を出力
			output('js-output_remainBattle', "");
			output('js-output_dailyBattle', "");
		}
	} else { // span,goal,totalの入力内容が数値でない場合
		alert('整数を入力してください。');
	}
});

// 権利表示
/* v8n v1.3.3
Copyright (c) 2018 Bruno C. Couto
https://github.com/imbrn/v8n/blob/master/LICENSE */