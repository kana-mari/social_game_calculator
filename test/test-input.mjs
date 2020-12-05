// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import { InputMap, checkMap } from "./../src/module/input.mjs";
import Input from "./../src/module/input.mjs";
import { describe } from "mocha";
// Green

// インスタンスの初期化
const inputMap = new InputMap();
const input = new Input();
console.log(input);

describe('InputMapのテスト（正常系）', () => {
	it('Mapかどうかチェック', () => {
		assert.instanceOf(inputMap, Map);
	});
	it('値がnumber型か', () => {
		for (const i of inputMap.values()) {
			assert.isNumber(i);
		}
	});
	it('入力済みinput要素が3つ→Map.size=3', () => {
		assert.strictEqual(inputMap.size, 3);
	});
	it('入力済みinput要素が4つ→Map.size=4', () => {
		assert.strictEqual(inputMap.size, 4);
	});
});
/**
 * @todo InputMapの例外系テスト
 */

// CheckMapテスト用Map
const testMapSize3True = new Map([['span', 7], ['goal', 1000], ['total', 100]]);
const testMapSize4True = new Map(testMapSize3True);
testMapSize4True.set('approx', 100);

const testMapSize3False = new Map([['span', NaN], ['goal', ''], ['total', null]]);
const testMapSize4False = new Map(testMapSize3False);
testMapSize4False.set('approx', '1000');

describe('CheckMapのテスト（正常系）', () => {
	it('size=3のMap(values=number)を渡す→trueを返す', () => {
		assert.isTrue(checkMap(testMapSize3True));
	});
	it('size=4のMap(values=number)を渡す→trueを返す', () => {
		assert.isTrue(checkMap(testMapSize4True));
	});
	it('size=3のMap(values!=number)を渡す→falseを返す', () => {
		assert.isFalse(checkMap(testMapSize3False));
	});
	it('size=4のMap(values!=number)を渡す→falseを返す', () => {
		assert.isFalse(checkMap(testMapSize4False));
	});
});

describe('CheckMapのテスト（例外系）', () => {
	/** 
	 * Map.size !== 3 || 4
	 * typeof value !== number
	 * value === NaN || infinity
	 * keyが変
	 **/

	const testMapSize3hoge = new Map([
		['hogehoge', 1],
		['hogehoge2', 2],
		['hogehoge3', 3]]);
	const testMapSize4hoge = new Map(testMapSize3hoge);
	testMapSize4hoge.set('hogehoge4', 4);

	it('sizeが3・4でないMapを渡す→例外を返す', () => {
		assert.throws(() => {
			checkMap(new Map([['span', 7]])), RangeError
		});
	});
	it('keyにspan, goal, totalを含まないMap(size=3)を渡す', () => {
		assert.isFalse(checkMap(testMapSize3hoge));
	});
	it('keyにspan, goal, total, approxを含まないMap(size=4)を渡す', () => {
		assert.isFalse(checkMap(testMapSize4hoge));
	});
});

describe('Inputのテスト（正常系）', () => {
	it('Mapを返す', () => {
		assert.instanceOf(input, Map);
	});
	it('返り値のMap.sizeが3 or 4', () => {
		assert.strictEqual(input.size, 3 || 4);
	});
});

describe('Inputのテスト（例外系）', () => {
	it('input要素が全部空欄→例外を投げる', () => {
		assert.throws(input, RangeError);
	});
	// it('', () => {
	// 	assert.throws(() => { }, Error);
	// });
	// it('', () => {
	// 	assert.throws(() => { }, Error);
	// });
});