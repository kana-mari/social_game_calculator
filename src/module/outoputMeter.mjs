/**
 * @file Google Chart APIでメーターを描画する
 */

const OutputMeter = class OutputGoogleChartsMeter {
	/**
	 * @param total {number} - 獲得済みpt.
	 * @param remain {number} - 目標までの残りpt.
	 */
	constructor(total, remain) {
		/**
		 * グラフを描画するためのコールバック関数
		 * @type {Function}
		 */
		const drawChart = function drawBarChart() {
			/**
			 * グラフ描画用データ
			 */
			const data = google.visualization.arrayToDataTable([
				['進捗', '獲得済', { role: 'style' }, '残り', { role: 'style' }],
				['', total, '#00c853', remain, '#EEEEEE']
			]);

			/**
			 * オプション設定
			 */
			const options = {
				// 軸タイトルの配置
				axisTitlesPosition: 'none',
				// グラフエリア
				chartArea: {
					backgroundColor: 'white',
					left: 0,
					top: 0,
					width: '100%',
					height: '100%'
				},
				// 横軸
				hAxis: {
					format: 'percent',
					maxValue: 1,
					minValue: 0,
					ticks: [],
					baselineColor: 'white'
				},
				// グラフの高さ
				height: 50,
				// 凡例
				legend: {
					position: 'none'
				},
				// 積み上げグラフ
				isStacked: 'percent'
			};

			/**
			 * 描画エリアを指定
			 */
			const chart = new google.visualization.BarChart(document.getElementById('js-output_meter'));

			chart.draw(data, options);
		};

		// timelineパッケージをロード
		google.charts.load('current', {
			packages: ['corechart', 'bar'],
			language: 'ja'
		});

		// ページレンダリング時にグラフを描画するためのコールバックをセット
		google.charts.setOnLoadCallback(drawChart);
	}
};

export default OutputMeter;