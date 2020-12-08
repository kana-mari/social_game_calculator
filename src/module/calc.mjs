/**
 * 計算する関数
 * @param map {Map<string, number>}
 * @returns {Map<string, number>}
 */
const calc = function calcNumber(map) {
	// map型かつsizeが3か4
	if (map instanceof Map && (map.size === 3 || map.size === 4)) {
		/**
		 * 目標までの残りpt.
		 * @type {number}
		 */
		const remain = map.get('goal') - map.get('total');
		/**
		 * 1日当たりの目標pt.
		 * @type {number}
		 */
		const dailyGoal = Math.ceil(remain / map.get('span'));
		/**
		 * 目標pt.までに必要な周回回数
		 * @type {number}
		 */
		const remainBattle = Math.ceil(dailyGoal / map.get('approx'));
		/**
		 * 目標pt.までに必要な1日当たりの周回回数
		 * @type {number}
		 */
		const dailyBattle = Math.ceil(remainBattle / map.get('span'));
		/**
		 * 獲得済÷目標 小数点第二位で四捨五入
		 * @type {number}
		 */
		const percentage = Math.round(map.get('total') / map.get('goal') * 100) / 100;

		/**
		 * 関数の返り値
		 * @type {Map<string, number>}
		 */
		const result = new Map([
			['remain', remain],
			['dailyGoal', dailyGoal],
			['remainBattle', remainBattle],
			['dailyBattle', dailyBattle],
			['percentage', percentage]
		]);

		return result;
	} else {
		// ダメな場合、例外を投げる
		throw new Error('引数が正しくない');
	}
};

export default calc;