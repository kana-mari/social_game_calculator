// DOM取得
// ユーザーからの入力を受け取る部分
const getForm = document.getElementById('js-form');
const getSpan = document.getElementById('js-input_span');
const getGoal = document.getElementById('js-input_goal');
const getTotal = document.getElementById('js-input_total');
const getApprox = document.getElementById('js-input_approx');
// 計算した結果を出力する部分
const getRemain = document.getElementById('js-output-remain');
const getDailyGoal = document.getElementById('js-output-dailyGoal');
const getRemainBattle = document.getElementById('js-output-remainBattle');
const getDailyBattle = document.getElementById('js-output-dailyBattle');

// 計算ボタン押下時以下の内容を実行
getForm.addEventListener('submit', () => {
	// 基本情報取得
	const gameEvent = {
		span: Number.parseInt(getSpan.value, 10), // イベント日数
		goal: Number.parseInt(getGoal.value, 10), // 目標pt.
		total: Number.parseInt(getTotal.value, 10), // 獲得済みpt.
		approx: Number.parseInt(getApprox.value, 10) // 1回出撃あたりの平均獲得pt.
	};

	// NaN判定
	if (!isNaN(gameEvent.goal && gameEvent.goal && gameEvent.total && gameEvent.approx)) {
		// 目標までのポイント数
		const remain = gameEvent.goal - gameEvent.total;
		// 1日当たりの目標ポイント
		const dailyGoal = Math.round(remain / gameEvent.span);
		// 残り戦闘回数
		const remainBattle = Math.ceil(remain / gameEvent.approx);
		// 1日当たりの必要出撃回数
		const dailyBattle = Math.ceil(dailyGoal / gameEvent.approx);

		// 表示@DOM
		getRemain.textContent = `${remain.toLocaleString()}pt.`;
		getDailyGoal.textContent = `${dailyGoal.toLocaleString()}pt.`;
		// approxが空欄の場合は戦闘回数系を表示しない
		if (getApprox.value !== "") {
			// 1回出撃あたりの平均獲得pt.が入力されてる場合
			getRemainBattle.textContent = `${remainBattle.toLocaleString()}回`;
			getDailyBattle.textContent = `${dailyBattle.toLocaleString()}回`;
		}
	} else { console.log('入力値のいずれかがNaN') }

	return false;
});