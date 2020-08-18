// 計算ボタン押下時関数を実行
document.getElementById('js-button').addEventListener('click', () => {
	// 関数 フォームへの入力内容を取得→整数にパース→計算→html上で表示する
	// 入力内容を取得、数値に変換
	const getInput = {
		span: parseInt(document.getElementById('js-input_span').value, 10), // イベント日数
		goal: parseInt(document.getElementById('js-input_goal').value, 10), // 目標pt.
		total: parseInt(document.getElementById('js-input_total').value, 10), // 獲得済みpt.
		approx: parseInt(document.getElementById('js-input_approx').value, 10) // 1周回あたりの平均獲得pt.
	};
	// span, goal, totalの入力内容をバリデーション
	// バリデーションの共通ルール 数値・整数
	const validateForm = v8n()
		.numeric()
		.integer();
	if (validateForm
		.greaterThanOrEqual(1)
		.test(getInput.span, getInput.goal)
		&&
		validateForm
			.greaterThanOrEqual(0)
			.test(getInput.total)) {
		// 数値の場合、計算
		const calcRemain = getInput.goal - getInput.total, // 目標までのポイント数
			calcDailyGoal = Math.round(calcRemain / getInput.span); // 1日当たりの目標ポイント
		// htmlに出力
		// 出力先DOM取得
		const outputRemain = document.getElementById('js-output_remain'),
			outputDailyGoal = document.getElementById('js-output_dailyGoal'),
			outputRemainBattle = document.getElementById('js-output_remainBattle'),
			outputDailyBattle = document.getElementById('js-output_dailyBattle');
		// 計算結果を出力
		outputRemain.textContent = `${calcRemain.toLocaleString()}pt.`;
		outputDailyGoal.textContent = `${calcDailyGoal.toLocaleString()}pt.`;

		// approxが空欄ではなく、数値が入力されている場合、周回回数系を計算して出力
		if (validateForm
			.greaterThanOrEqual(1)
			.test(getInput.approx)) {
			// 残り戦闘回数を計算して出力
			outputRemainBattle.textContent = `${Math.ceil(calcRemain / getInput.approx).toLocaleString()}回`;
			// 1日当たりの必要出撃回数を計算して出力
			outputDailyBattle.textContent = `${Math.ceil(calcDailyGoal / getInput.approx).toLocaleString()}回`;
		} else {
			// 空の内容を出力
			outputRemainBattle.textContent = "";
			outputDailyBattle.textContent = "";
		}
	} else { // span,goal,totalの入力内容が数値でない場合
		alert('整数を入力してください。');
	}
});

// 権利表示
/* v8n v1.3.3
Copyright (c) 2018 Bruno C. Couto
https://github.com/imbrn/v8n/blob/master/LICENSE */