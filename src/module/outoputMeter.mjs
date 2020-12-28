/**
 * @file Google Chart APIでメーターを描画する
 * @todo 動的にグラフを生成する
 * @todo index.htmlにグラフ描画DOMを追加
 */

const OutputMeter = class OutputGoogleChartsMeter {
	/**
	 * @param input {Map<string,number>} - 入力内容を格納したMap
	 * @param result {Map<string,number>} - 計算結果を格納したMap
	 */
	constructor(input, result) {
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
				['', input.get('total'), '#00c853', result.get('remain'), '#EEEEEE']
			]);

			/**
			 * オプション設定
			 */
			const options = {
				// アニメーション
				animation: {
					duration: 500,
					easing: 'out',
					startup: true
				},
				// グラフエリア
				chartArea: {
					backgroundColor: 'white',
					left: 0,
					top: 0,
					width: '100%'
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
				height: 100,
				// 凡例
				legend: {
					position: 'none'
				},
				// 積み上げグラフ
				isStacked: 'percent'
			};

			/**
			 * 描画エリア
			 */
			const chart = new google.visualization.BarChart(document.getElementById('barChart'));

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