// DOM取得
// ユーザーからの入力を受け取る部分
const getForm = document.getElementById('js-form'),
	getSpan = document.getElementById('js-input_span'),
	getGoal = document.getElementById('js-input_goal'),
	getTotal = document.getElementById('js-input_total'),
	getApprox = document.getElementById('js-input_approx'),
	getButton = document.getElementById('js-button');

// 計算した結果を出力する部分
const getRemain = document.getElementById('js-output-remain'),
	getDailyGoal = document.getElementById('js-output-dailyGoal'),
	getRemainBattle = document.getElementById('js-output-remainBattle'),
	getDailyBattle = document.getElementById('js-output-dailyBattle');

// 関数
const calc = () => {
	// 基本情報取得
	const gameEvent = {
		span: Number.parseInt(getSpan.value, 10), // イベント日数
		goal: Number.parseInt(getGoal.value, 10), // 目標pt.
		total: Number.parseInt(getTotal.value, 10), // 獲得済みpt.
		approx: Number.parseInt(getApprox.value, 10) // 1回出撃あたりの平均獲得pt.
	};
	// NaN判定
	if (!isNaN(gameEvent.goal && gameEvent.goal && gameEvent.total && gameEvent.approx)) {
		// 数値の場合
		const result = {
			remain: gameEvent.goal - gameEvent.total, // 目標までのポイント数
			dailyGoal: Math.round(remain / gameEvent.span), // 1日当たりの目標ポイント
			remainBattle: Math.ceil(remain / gameEvent.approx), // 残り戦闘回数
			dailyBattle: Math.ceil(dailyGoal / gameEvent.approx)
		}; // 1日当たりの必要出撃回数

		// 表示@DOM
		getRemain.textContent = `${result.remain.toLocaleString()}pt.`;
		getDailyGoal.textContent = `${result.dailyGoal.toLocaleString()}pt.`;
		// approxが空欄の場合は戦闘回数系を表示しない
		if (getApprox.value !== "") {
			// 1回出撃あたりの平均獲得pt.が入力されてる場合
			getRemainBattle.textContent = `${result.remainBattle.toLocaleString()}回`;
			getDailyBattle.textContent = `${result.dailyBattle.toLocaleString()}回`;
		}
	} else { // 数値でない場合
		alert('数値を入力してください。')
	}
	return false;
};
// 計算ボタン押下時関数calcを実行
getButton.addEventListener('click', calc);