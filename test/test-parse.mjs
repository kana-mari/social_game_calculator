// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import { parse, parseAllowBlank } from "./../src/module/parse.mjs";

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

describe('関数parseAllowBlankのテスト(例外を返す)', () => {
	it('数値にパース出来ない文字列', () => {
		assert.throws(() => { parseAllowBlank('hogehoge') }, Error);
	});
	it('オブジェクト', () => {
		assert.throws(() => { parseAllowBlank({ key: '100' }) }, Error);
	});
	it('配列', () => {
		assert.throws(() => { parseAllowBlank(['1000']) }, Error);
	});
	it('NaN', () => {
		assert.throws(() => { parseAllowBlank(NaN) }, Error);
	});
	it('Number', () => {
		assert.throws(() => { parseAllowBlank(100) }, Error);
	});
	it('null', () => {
		assert.throws(() => { parseAllowBlank(null) }, Error);
	});
	it('undefined', () => {
		assert.throws(() => { parseAllowBlank(undefined) }, Error);
	});
});

describe('関数parseAllowBlankのテスト(OK)', () => {
	it('length0の文字列を渡す→nullを返す', () => {
		assert.isNull(parseAllowBlank(''));
	});
	it('数値にパース出来る文字列を渡す→パースした数値を返す', () => {
		assert.strictEqual(parse('1234'), 1234);
	});
});