// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import calc from "./../src/module/calc.mjs";

/**
 * # テストすべき項目
 * ## 正常系
 * - 返り値がMapか
 * - Mapのvaluesがnumber型か
 * ## 例外系
 * - Map以外を渡したときに例外を返すか
 **/

describe('正常系', () => {
	const testMap3True = new Map([['span', 7], ['goal', 1000], ['total', 100]]);
	const testMap4True = new Map(testMap3True);
	testMap4True.set('approx', 100);

	it('Mapを渡すとMapを返す', () => {
		assert.instanceOf();
	});
});

describe('例外系', () => {
	it('', () => {
		assert();
	});
});

describe('', () => {
	it('', () => {
		assert();
	});
});

describe('', () => {
	it('', () => {
		assert();
	});
});