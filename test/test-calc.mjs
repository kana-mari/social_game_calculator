const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import calc from "./../src/module/calc.mjs";

/**
* Red
* # テストすべき項目
* ## 正常系
* - Mapを渡す→返り値がMap
* - Mapを渡す→返り値のMap.valuesがnumber型(Infinity、NaN不可)
* - Map.size===3のMapを渡す→Map.size===2のMapを返す
* - Map.size===4のMapを渡す→Map.size===4のMapを返す
* - 正しいMap(size=3)を渡す→Map.keys=['remain', 'dailyGoal']を持ったMapを返す
* - 正しいMap(size=4)を渡す→Map.keys=['remain', 'dailyGoal', 'remainBattle', 'dailyBattle']を持ったMapを返す
* 
* ## 例外系
* - Map以外を渡す→例外を返す
* - Map.size !== 3||4 になるMapを渡す→例外を返す
* - Map.valuesが数値でないMapを渡す→例外を返す
* - Map.keys!==['span', 'goal', 'total'] || ['span', 'goal', 'total', 'approx']のMapを渡す→例外を返す
**/

describe('正常系', () => {
	// テスト用変数
	const testMap3 = new Map([['span', 7], ['goal', 1000], ['total', 100]]);
	const testMap4 = new Map(testMap3);
	testMap4.set('approx', 100);
	const calc3 = calc(testMap3);
	const calc4 = calc(testMap4);
	console.log(calc3);
	console.log(calc4);

	// テスト内容
	it('Mapを渡す→Mapを返す', () => {
		assert.instanceOf(calc3, Map);
	});
	it('Map.size=3を渡す→返り値のMap.size=2', () => {
		assert.strictEqual(calc3.size, 2);
	});
	it('Map.size=4を渡す→返り値のMap.size=4', () => {
		assert.strictEqual(calc4.size, 4);
	});
	it('Map.size=3を渡す→返り値のMap.valuesが全て正の整数', () => {
		const result = Array.from(calc3.values());
		for (const i of result) {
			assert.isNumber(i);
			assert.isAtLeast(i, 1);
			assert.isTrue(Number.isInteger(i));
		}
	});
	it('Map.size=4を渡す→返り値のMap.valuesが全て正の整数', () => {
		const result = Array.from(calc4.values());
		for (const i of result) {
			assert.isNumber(i);
			assert.isAtLeast(i, 1);
			assert.isTrue(Number.isInteger(i));
		}
	});
	it('正しいMap(size=3)を渡す→Map.keys=[remain, dailyGoal]のMapを返す', () => {
		assert.strictEqual(Array.form(calc3.keys()), ['remain', 'dailyGoal']);
	});
	it('正しいMap(size=4)を渡す→Map.keys=[remain, dailyGoal, remainBattle, dailyBattle]のMapを返す', () => {
		assert.strictEqual(Array.form(calc4.keys()), ['remain', 'dailyGoal', 'remainBattle', 'dailyBattle']);
	});
});

describe('例外系', () => {
	// Map以外を渡す
	it('真偽値を渡す→例外を返す', () => {
		assert.throws(() => { calc(true) }, TypeError);
	});
	it('nullを渡す→例外を返す', () => {
		assert.throws(() => { calc(null) }, TypeError);
	});
	it('undefinedを渡す→例外を返す', () => {
		assert.throws(() => { calc(undefined) }, TypeError);
	});
	it('Numberを渡す→例外を返す', () => {
		assert.throws(() => { calc(1000) }, TypeError);
	});
	it('Stringを渡す→例外を返す', () => {
		assert.throws(() => { calc('hogehoge') }, TypeError);
	});
	it('Objectを渡す→例外を返す', () => {
		assert.throws(() => { calc({ 'span': 1, 'goal': 2, 'total': 100 }) }, TypeError);
	});
	it('Arrayを渡す→例外を返す', () => {
		assert.throws(() => { calc([1, 2, 3, 4]) }, TypeError);
	});

	// Map.size===3||4
	it('Map.size=1のMapを渡す→例外を返す', () => {
		assert.throws(() => { calc(new Map([['span', 1]])) }, RangeError);
	});
	it('Map.size=5のMapを渡す→例外を返す', () => {
		assert.throws(() => { calc(new Map([['span', 1], ['goal', 2], ['total', 100], ['approx', 100], ['hogehoge', 100]])) }, RangeError);
	});

	// Map.valuesが数値でない
	it('valuesが数値でないMapを渡す→例外を返す', () => {
		assert.throws(() => { calc(new Map([['span', '1'], ['goal', null], ['total', undefined], ['approx', true]])) }, TypeError);
	});

	it('keysが正しくないMapを渡す→例外を返す', () => {
		const m = new Map([
			['piyopiyo1', 1234],
			['piyopiyo2', 1234],
			['piyopiyo3', 1234],
			['piyopiyo4', 1234]
		]);
		assert.throws(() => { calc(m) }, Error);
	});
});