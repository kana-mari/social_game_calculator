// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

// 対象モジュールをインポート
import Validate from "./../src/module/validate.mjs";
const validate = new Validate();

describe('isBlankプロパティのテスト', () => {
	// true
	it('空の文字列を渡す→trueを返す', () => {
		assert.isTrue(validate.isBlank.test(''));
	});
	// false
	it('1文字以上の文字列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test('hogehoge'));
	});
	it('オブジェクトを渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test({ 'test': '' }));
	});
	it('配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test(['']));
	});
	it('数値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test(1));
	});
	it('nullを渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test(null));
	});
	it('真偽値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test(true));
	});
	it('undefinedを渡す→Falseを返す', () => {
		assert.isFalse(validate.isBlank.test(undefined));
	});
});

// describe('isNotBlankプロパティのテスト', () => {
// 	it('', () => {
// 		assert();
// 	});
// });

// describe('v8nCommonRuleプロパティのテスト', () => {
// 	it('', () => {
// 		assert();
// 	});
// });

// describe('isPosiIntプロパティのテスト', () => {
// 	it('', () => {
// 		assert();
// 	});
// });

// describe('isPosiIntAnd0プロパティのテスト', () => {
// 	it('', () => {
// 		assert();
// 	});
// });