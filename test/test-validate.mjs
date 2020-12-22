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

describe('isNotBlankプロパティのテスト', () => {
	// true
	it('1文字以上の文字列を渡す→Trueを返す', () => {
		assert.isTrue(validate.isNotBlank.test('hogehoge'));
	});
	// false
	it('空の文字列を渡す→falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(''));
	});
	it('オブジェクトを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test({ 'test': '' }));
	});
	it('配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(['']));
	});
	it('数値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(1));
	});
	it('nullを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(null));
	});
	it('真偽値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(true));
	});
	it('undefinedを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNotBlank.test(undefined));
	});
});

describe('isPosiIntプロパティのテスト', () => {
	// true
	it('1以上の正の整数を渡す→Trueを返す', () => {
		assert.isTrue(validate.isPosiInt.test(1));
		assert.isTrue(validate.isPosiInt.test(10));
		assert.isTrue(validate.isPosiInt.test(100000));
	});
	// false
	it('0を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(0));
	});
	it('NaNを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(NaN));
	});
	it('Infinityを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(Infinity));
	});
	it('正の実数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(1.1));
		assert.isFalse(validate.isPosiInt.test(10.01));
	});
	it('負の整数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(-1));
		assert.isFalse(validate.isPosiInt.test(-10));
	});
	it('負の実数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(-0.1));
		assert.isFalse(validate.isPosiInt.test(-100.01));
	});
	it('0を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(0));
	});
	it('nullを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(null));
	});
	it('undefinedを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(undefined));
	});
	it('文字列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test('1'));
	});
	it('真偽値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test(true));
	});
	it('配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test([1]));
	});
	it('オブジェクトを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiInt.test({ 'test': 1 }));
	});
});

describe('isPosiIntAnd0プロパティのテスト', () => {
	// true
	it('1以上の正の整数を渡す→Trueを返す', () => {
		assert.isTrue(validate.isPosiIntAnd0.test(1));
		assert.isTrue(validate.isPosiIntAnd0.test(10));
		assert.isTrue(validate.isPosiIntAnd0.test(100000));
	});
	it('0を渡す→Trueを返す', () => {
		assert.isTrue(validate.isPosiIntAnd0.test(0));
	});
	// false
	it('NaNを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(NaN));
	});
	it('Infinityを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(Infinity));
	});
	it('正の実数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(1.1));
		assert.isFalse(validate.isPosiIntAnd0.test(10.01));
	});
	it('負の整数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(-1));
		assert.isFalse(validate.isPosiIntAnd0.test(-10));
	});
	it('負の実数を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(-0.1));
		assert.isFalse(validate.isPosiIntAnd0.test(-100.01));
	});
	it('nullを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(null));
	});
	it('undefinedを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(undefined));
	});
	it('文字列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test('1'));
	});
	it('真偽値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test(true));
	});
	it('配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test([1]));
	});
	it('オブジェクトを渡す→Falseを返す', () => {
		assert.isFalse(validate.isPosiIntAnd0.test({ 'test': 1 }));
	});
});

describe('isNumericStrプロパティのテスト', () => {
	// true
	it('数字列を渡す', () => {
		assert.isTrue(validate.isNumericStr.test('123456'));
	});
	// false
	it('数字とそのほかの文字が混在した文字列を渡す→Falseを返す', () => {
		assert(validate.isNumericStr.test('1000%'));
		assert(validate.isNumericStr.test('-1000'));
	});
	it('空文字を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(''));
	});
	it('オブジェクトを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test({ 'test': '' }));
	});
	it('配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(['']));
	});
	it('数値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(1));
	});
	it('nullを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(null));
	});
	it('真偽値を渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(true));
	});
	it('undefinedを渡す→Falseを返す', () => {
		assert.isFalse(validate.isNumericStr.test(undefined));
	});
});

// テスト用変数
const testMap3 = new Map([['span', 7], ['goal', 1000], ['total', 100]]);
const testMap4 = new Map(testMap3);
testMap4.set('approx', 100);

describe('hasMapKeysメソッドのテスト', () => {
	it('Mapと配列を渡す→真偽値を返す', () => {
		assert.isBoolean(validate.hasMapKeys(new Map(), []));
	});
	it('Mapと配列以外を渡す→例外を返す', () => {
		assert.throws(() => { validate.hasMapKeys('hogehoge', { 'hogehoge': 0 }) }, TypeError);
	});
	it('マッチしないMapと配列を渡す→Falseを返す', () => {
		assert.isFalse(validate.hasMapKeys(new Map([
			['piyopiyo1', 1234],
			['piyopiyo2', 1234],
			['piyopiyo3', 1234],
			['piyopiyo4', 1234]]), ['hogehoge1', 'hogehoge2', 'hogehoge3']));
	});
	it('正しいMapを渡す→Trueを返す', () => {
		assert.isTrue(validate.hasMapKeys(testMap3, ['span', 'goal', 'total']));
		assert.isTrue(validate.hasMapKeys(testMap4, ['span', 'goal', 'total', 'approx']));
	});
});

describe('isValuesPosiIntメソッドのテスト', () => {
	it('Mapを渡す→真偽値を返す', () => {
		assert.isBoolean(validate.isValuesPosiInt(new Map()));
	});
	it('Map以外を渡す→例外を返す', () => {
		assert.throws(() => { validate.isValuesPosiInt('hogehoge') }, Error);
	});
	it('正しくないMapを渡す→Falseを返す', () => {
		assert.isFalse(validate.isValuesPosiInt(new Map([
			['1', NaN],
			['2', Infinity],
			['3', '1234'],
			['4', true]])));
	});
	it('正しいMapを渡す→Trueを返す', () => {
		assert.isTrue(validate.isValuesPosiInt(testMap3));
		assert.isTrue(validate.isValuesPosiInt(testMap4));
	});
});