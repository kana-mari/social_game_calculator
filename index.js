// DOM取得
// ユーザーからの入力を受け取る部分
const
	getSpan = document.getElementById('js-input_span'),
	getGoal = document.getElementById('js-input_goal'),
	getTotal = document.getElementById('js-input_total'),
	getApprox = document.getElementById('js-input_approx'),
	getButton = document.getElementById('js-button'),
	// 計算した結果を出力する部分
	getRemain = document.getElementById('js-output-remain'),
	getDailyGoal = document.getElementById('js-output-dailyGoal'),
	getRemainBattle = document.getElementById('js-output-remainBattle'),
	getDailyBattle = document.getElementById('js-output-dailyBattle');

// 関数 フォームへの入力内容を取得→整数にパース→計算→html上で表示する
const calc = () => {
	// 入力内容を取得
	const gameEvent = {
		span: Number.parseInt(getSpan.value, 10), // イベント日数
		goal: Number.parseInt(getGoal.value, 10), // 目標pt.
		total: Number.parseInt(getTotal.value, 10), // 獲得済みpt.
		approx: Number.parseInt(getApprox.value, 10) // 1周回あたりの平均獲得pt.
	};
	// input#span, goal, totalをNaN判定
	if (!Number.isNaN(gameEvent.goal && gameEvent.goal && gameEvent.total)) {
		// 数値の場合、計算
		const remain = gameEvent.goal - gameEvent.total, // 目標までのポイント数
			dailyGoal = Math.round(remain / gameEvent.span); // 1日当たりの目標ポイント
		// htmlに出力
		getRemain.textContent = `${remain.toLocaleString()}pt.`;
		getDailyGoal.textContent = `${dailyGoal.toLocaleString()}pt.`;

		// approxが空欄ではなく、数値が入力されている場合、周回回数系を計算して出力
		if (getApprox.value !== "" && !Number.isNaN(gameEvent.approx)) {
			const remainBattle = Math.ceil(remain / gameEvent.approx), // 残り周回回数
				dailyBattle = Math.ceil(dailyGoal / gameEvent.approx); // 1日当たりの必要出撃回数
			// htmlに出力
			getRemainBattle.textContent = `${remainBattle.toLocaleString()}回`;
			getDailyBattle.textContent = `${dailyBattle.toLocaleString()}回`;
		}
	} else { // フォームへの入力内容が数値でない場合
		alert('整数を入力してください。');
	}
};

// 計算ボタン押下時関数calcを実行
getButton.addEventListener('click', calc);