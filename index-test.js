{// 入力系
	// ユーザーからの入力を受け取る
	const getDOM = {
		span: document.getElementById('js-input_span'),
		goal: document.getElementById('js-input_goal'),
		total: document.getElementById('js-input_total'),
		approx: document.getElementById('js-input_approx')
	};
	// 入力した値を受け取る→空欄・非数チェックをして整数を返す
	const checkInput = (arg) => {
		if (arg !== "" && !isNaN(parseInt(arg, 10))) { return parseInt(arg, 10); }
		else { return console.log('整数を入力してね'); }
	};
	// Todo: オブジェクトのプロパティを列挙して繰り返しcheckInput関数に渡す
}
{
	// testオブジェクトのプロパティを列挙する
	const test = { 1: 'hogehoge', 2: 'piyopiyo', 3: 'foo' };
	console.log(Object.keys(test));
	Object.keys(test).forEach(key => {
		const value = test[key];
		console.log(value);
	});
}
{// test.html用
	const testDate = document.getElementById('test-date');
	console.log(testDate.value);
}