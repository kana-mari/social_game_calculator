/**
 * 計算する関数
 * @type {function}
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
		 * 関数の返り値
		 * @type {Map<string, number>}
		 */
		const result = new Map([
			['remain', remain],
			['dailyGoal', dailyGoal],
			['remainBattle', remainBattle],
			['dailyBattle', dailyBattle]
		]);

		return result;
	} else {
		// 条件に当てはまらない場合例外を投げる
		// Mapでないかどうか
		if (!(map instanceof Map)) {
			throw new TypeError('引数がMapでない')
			// Map.sizeが3か4でないかどうか
		} else if (map.size === 3 || map.size === 4) {
			throw new RangeError('Map.sizeが3か4でない');
		}
		// 上記に当てはまらない場合
		else {
			throw new Error('何かがダメ');
		}
	}
};

export default calc;