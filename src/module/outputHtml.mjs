/**
 * @file 計算結果をHTMLで表示するモジュール
 */

/**
 * 計算結果をHTMLで表示するクラス
 * @param map {Map}
 */
const Output = class OutputHtml {
	constructor(map) {
		// Mapかどうか&sizeが2・4かチェック
		if (map instanceof Map && (map.size === 2 || map.size === 4)) {
			// DOMを取得 & textContentに計算結果を代入
			const id = ['remain', 'dailyGoal'];
			for (const i of id) {
				document.getElementById(`js-output_${i}`).textContent = map.get(i).toLocaleString();
			}
			// map.size=4ならremainBattleとdailyBattleを表示
			if (map.size === 4) {
				const id = ['remainBattle', 'dailyBattle'];
				for (const i of id) {
					document.getElementById(`js-output_${i}`).textContent = map.get(i).toLocaleString();
				}
			}

		} else {
			// ダメなら例外を投げる
			throw new Error('引数はMap、かつsizeが2か4でなければならない');
		}
	}
};

export default Output;