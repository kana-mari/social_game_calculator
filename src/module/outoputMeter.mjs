/**
 * @file Google Chart APIでメーターを描画する
 */

/**
 * グラフを描画するためのコールバック関数
 * @type {Function}
 */
const drawChart = function drawBarChart() {
	/**
	 * グラフ描画用データ
	 */
	const data = google.visualization.arrayToDataTable([
		['進捗', '獲得済み', { role: 'style' }, '残り', { role: 'style' }],
		['', 605098, '#00c853', 2500000 - 605098, '#EEEEEE']
	]);

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