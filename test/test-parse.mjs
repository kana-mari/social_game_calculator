// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import { parse, parseNullable } from "./../src/module/parse.mjs";

describe('関数parseのテスト(例外を返す)', () => {
	it('数値にパース出来ない文字列', () => {
		assert.throws(() => { parse('hogehoge') }, Error);
	});
	it('オブジェクト', () => {
		assert.throws(() => { parse({ key: '100' }) }, Error);
	});
	it('配列', () => {
		assert.throws(() => { parse(['1000']) }, Error);
	});
	it('NaN', () => {
		assert.throws(() => { parse(NaN) }, Error);
	});
	it('Number', () => {
		assert.throws(() => { parse(100) }, Error);
	});
	it('null', () => {
		assert.throws(() => { parse(null) }, Error);
	});
	it('undefined', () => {
		assert.throws(() => { parse(undefined) }, Error);
	});
});

describe('関数parseのテスト', () => {
	it('数値にパース出来る文字列を渡す→パースした数値を返す', () => {
		assert.strictEqual(parse('1234'), 1234);
	});
});

// describe('関数parseNullableのテスト(例外を返す)', () => {
// 	it('数値にパース出来ない文字列', () => {
// 		assert.(parse('hogehoge'));
// 	});
	// オブジェクト
	// 配列
	// NaN
	// 数値
	// undefined

	// パース結果の数値を返す
	// null
	// パース出来る文字列
// });