// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import { MakeMap, checkMap } from "./../src/module/input.mjs";

// Green

// インスタンスの初期化
const inputMap = new MakeMap();

describe('MakeMapのテスト（正常系）', () => {
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
 * @todo MakeMapの例外系テスト
 */

// CheckMapテスト用Map
const testMapSize3True = new Map([['span', 7], ['goal', 1000], ['total', 100]]);
const testMapSize4True = new Map(testMapSize3True)
testMapSize4True.set('approx', 100);

const testMapSize3False = new Map([['span', NaN], ['goal', ''], ['total', null]]);
const testMapSize4False = testMapSize3False.
	testMapSize4False.set('approx', '1000');

describe('CheckMapのテスト（正常系）', () => {
	it('size=3のMap(values=number)を渡す→trueを返す', () => {
		assert.isTrue(checkMap(testMapSize3True));
	});
	it('size=4のMap(values=number)を渡す→真偽値を返す', () => {
		assert.isTrue(checkMap(testMapSize4True));
	});
	it('size=3のMap(values!=number)を渡す→真偽値を返す', () => {
		assert.isBoolean(checkMap(testMapSize3False));
	});
	it('size=4のMap(values!=number)を渡す→真偽値を返す', () => {
		assert.isBoolean(checkMap(testMapSize4False));
	});
});

describe('CheckMapのテスト（例外系）', () => {
	/** 
	 * Map.size !== 3 || 4
	 * typeof value !== number
	 * value === NaN
	 * value === infinity
	 * keyが変
	 **/
	it('sizeが3・4でないMapを渡す', () => {
		assert.throws(() => {
			checkMap(), RangeError
		});
	});
	it('', () => {
		assert.throws(() => {
			checkMap(), RangeError
		});
	});
	it('', () => {
		assert.throws(() => {
			checkMap(), RangeError
		});
	});
	it('', () => {
		assert.throws(() => {
			checkMap(), RangeError
		});
	});
});