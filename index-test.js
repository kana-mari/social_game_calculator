{
	const test1 = 1;
	const test2 = 2;
	const test3 = 'hogehoge';
	if (!isNaN(test1 && test2 && test3)) {
		console.log('test1～3は数値');
	} else { console.log('test1～3のどれかは数値じゃない'); }
}