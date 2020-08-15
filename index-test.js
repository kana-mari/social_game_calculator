import v8n from "./lib/v8n/v8n.js";
const validationRule = v8n().numeric().integer();
console.log(validationRule.test([1, 2, 3]));
v8n()
	.numeric()
	.integer()
	.greaterThanOrEqual(1)
	.test(1, 2);