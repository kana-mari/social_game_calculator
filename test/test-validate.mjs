// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

// 対象モジュールをインポート
import { v8nCommonRule } from "./../src/module/validate.mjs";

describe('バリデーションのテスト 1.falseを返す', () => {
	it('null', () => {
		assert.isFalse(v8nCommonRule.test(null));
	});
	it('文字列', () => {
		assert.isFalse(v8nCommonRule.test('hogehoge'));
	});
	it('実数', () => {
		assert.isFalse(v8nCommonRule.test(3.14));
	});
});
describe('バリデーションのテスト 2.trueを返す', () => {
	it('正の整数', () => {
		assert.isTrue(v8nCommonRule.test(812255));
	});
	it('負の整数', () => {
		assert.isTrue(v8nCommonRule.test(-159));
	});
	it('0', () => {
		assert.isTrue(v8nCommonRule.test(0));
	});
});