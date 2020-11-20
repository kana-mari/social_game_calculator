// eslint-disable-next-line no-undef
const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import input from "./../src/module/input.mjs";
import { keysArray, parsedValueMap } from "./../src/module/input.mjs";

// Green

describe('Mapのテスト（正常系）', () => {
	it('Mapかどうかチェック', () => {
		assert.instanceOf(parsedValueMap, Map);
	});
	it('Mapのvaluesがnumber型（approxのみnumberかnull）', () => {
		const array = Array.from(parsedValueMap.values());
		assert.isNumber(array[0]);
		assert.isNumber(array[1]);
		assert.isNumber(array[2]);
		assert.isNull(array[3]);
	});
});