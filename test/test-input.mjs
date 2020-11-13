// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import input from "./../src/module/input.mjs";

// Red
/*
- 特に何も渡さなくてもinputのvalueをまとめたmapを返す関数
- valueがダメな値だったら例外を返す
	- OK => string && 数字で構成された文字列
	- ダメな値 => string型以外
- mapは2パターン approxの有無で分ける
*/

describe('input系のテスト 正常系', () => {
	it('inputのvalueが数字で構成された文字列→Mapを返す', () => {
		assert.instanceOf(input(), Map);
	});
	it('approxに記入した場合、Map.sizeが4を返す', () => {
		assert.strictEqual(input().size, 4);
	});
	it('approxが空欄の場合、Map.sizeが3を返す', () => {
		assert.strictEqual(input().size, 3);
	});
});

describe('input系のテスト 例外系', () => {
	it('input要素のvalueに数値にパース出来ない文字を入力', () => {
		assert.throws(() => { input() }, Error);
	});
});