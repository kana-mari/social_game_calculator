// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import parse from "./../src/module/parse.mjs";

describe('parseInputメソッドのテスト(例外を返す)', () => {
	it('数値にパース出来ない文字列', () => {
		assert.throws(() => { parse.parseInput('hogehoge') }, Error);
	});
	it('オブジェクト', () => {
		assert.throws(() => { parse.parseInput({ key: '100' }) }, Error);
	});
	it('配列', () => {
		assert.throws(() => { parse.parseInput(['1000']) }, Error);
	});
	it('NaN', () => {
		assert.throws(() => { parse.parseInput(NaN) }, Error);
	});
	it('Number', () => {
		assert.throws(() => { parse.parseInput(100) }, Error);
	});
	it('null', () => {
		assert.throws(() => { parse.parseInput(null) }, Error);
	});
	it('undefined', () => {
		assert.throws(() => { parse.parseInput(undefined) }, Error);
	});
});

describe('parseInputメソッドのテスト（正常系）', () => {
	it('数値にパース出来る文字列を渡す→パースした数値を返す', () => {
		assert.strictEqual(parse.parseInput('1234'), 1234);
	});
});

describe('関数parseAllowBlankのテスト(例外系)', () => {
	it('数値にパース出来ない文字列', () => {
		assert.throws(() => { parse.allowBlank('hogehoge') }, Error);
	});
	it('オブジェクト', () => {
		assert.throws(() => { parse.allowBlank({ key: '100' }) }, Error);
	});
	it('配列', () => {
		assert.throws(() => { parse.allowBlank(['1000']) }, Error);
	});
	it('NaN', () => {
		assert.throws(() => { parse.allowBlank(NaN) }, Error);
	});
	it('Number', () => {
		assert.throws(() => { parse.allowBlank(100) }, Error);
	});
	it('null', () => {
		assert.throws(() => { parse.allowBlank(null) }, Error);
	});
	it('undefined', () => {
		assert.throws(() => { parse.allowBlank(undefined) }, Error);
	});
});

describe('AllowBlankメソッドのテスト(正常系)', () => {
	it('length0の文字列を渡す→nullを返す', () => {
		assert.isNull(parse.allowBlank(''));
	});
	it('数値にパース出来る文字列を渡す→パースした数値を返す', () => {
		assert.strictEqual(parse.allowBlank('1234'), 1234);
	});
});