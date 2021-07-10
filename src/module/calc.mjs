// Validateモジュールをインポート&インスタンス化
import Validate from "./validate.mjs";
const validate = new Validate();

/**
 * 計算する関数
 * @type {function}
 * @param map {Map<string, number>}
 * @returns {Map<string, number>}
 */
const calc = function calcNumber(map) {
	// map型かつsizeが3か4、必須のkeyがあり、valuesが正の整数
	if (map instanceof Map
		&& (map.size === 3 || map.size === 4)
		&& validate.hasMapKeys(map, ['span', 'goal', 'total'])
		&& validate.isValuesPosiInt(map)) {
		// 必須項目を計算
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
		 * calc関数の返り値
		 * @type {Map<string, number>}
		 */
		const result = new Map([
			['remain', remain],
			['dailyGoal', dailyGoal],
		]);

		// map.size === 4の場合、remainBattleとdailyBattleを計算
		if (map.size === 4) {
			/**
			* 目標pt.までに必要な周回回数
			* @type {number}
			*/
			const remainBattle = Math.ceil(remain / map.get('approx'));
			/**
			 * 目標pt.までに必要な1日当たりの周回回数
			 * @type {number}
			 */
			const dailyBattle = Math.ceil(remainBattle / map.get('span'));

			result.set('remainBattle', remainBattle);
			result.set('dailyBattle', dailyBattle);
		}
		return result;

	} else { // 例外
		// Mapでないかどうか
		if (!(map instanceof Map)) {
			throw new TypeError('引数がMapでない');
			// Map.sizeが3か4でないかどうか
		} else if (map.size !== 3 || map.size !== 4) {
			throw new RangeError('Map.sizeが3か4でない');
		}
		// 上記に当てはまらない場合
		else {
			throw new Error('何かがダメ');
		}
	}
};

// 本番用エクスポート
export default calc;