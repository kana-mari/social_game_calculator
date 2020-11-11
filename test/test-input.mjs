// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import { } from "./../src/module/input.mjs";

// Red
/*
- 特に何も渡さなくてもinputのvalueをまとめたmapを返す関数
- valueがダメな値だったら例外を返す
	└ ダメな値→string型以外
- mapは2パターン approxの有無で分ける
- テストランナーにテスト用input作る
*/

describe('input系のテスト 正常系', () => {
	it('', () => {
		assert();
	})
});

describe('input系のテスト 例外系', () => {
	it('', () => {
		assert.throws(() => { }, Error);
	})
});