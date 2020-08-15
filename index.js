// v8nをインポート
import v8n from "v8n";
// 計算ボタン押下時関数を実行
document.getElementById('js-button').addEventListener('click', () => {
	// 関数 フォームへの入力内容を取得→整数にパース→計算→html上で表示する
	// 入力内容を取得
	const gameEvent = {
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
		.test(gameEvent.span, gameEvent.goal)
		&&
		validateForm
			.greaterThanOrEqual(0)
			.test(gameEvent.total)) {
		// 数値の場合、計算
		const remain = gameEvent.goal - gameEvent.total, // 目標までのポイント数
			dailyGoal = Math.round(remain / gameEvent.span); // 1日当たりの目標ポイント
		// htmlに出力
		// 出力先DOM取得
		const outputRemain = document.getElementById('js-output-remain'),
			outputDailyGoal = document.getElementById('js-output-dailyGoal'),
			outputRemainBattle = document.getElementById('js-output-remainBattle'),
			outputDailyBattle = document.getElementById('js-output-dailyBattle');
		// 計算結果を出力
		outputRemain.textContent = `${remain.toLocaleString()}pt.`;
		outputDailyGoal.textContent = `${dailyGoal.toLocaleString()}pt.`;

		// approxが空欄ではなく、数値が入力されている場合、周回回数系を計算して出力
		if (validateForm
			.greaterThanOrEqual(1)
			.test(gameEvent.approx)) {
			// htmlに出力
			// 残り戦闘回数
			outputRemainBattle.textContent = `${Math.ceil(remain / gameEvent.approx).toLocaleString()}回`;
			// 1日当たりの必要出撃回数
			outputDailyBattle.textContent = `${Math.ceil(dailyGoal / gameEvent.approx).toLocaleString()}回`;
		}
	} else { // フォームへの入力内容が数値でない場合
		alert('整数を入力してください。');
	}
});