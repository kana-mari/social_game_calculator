/**
 * htmlを受け取ってDOM（body要素の最初の子要素のみ）を返す関数
 * @param html {string} - html
 * @returns {Element} - HTMLElement
 */
const domParse = function domParse(html) {
	const domParser = new DOMParser();
	const result = domParser.parseFromString(html, 'text/html');
	return result.body.firstElementChild;
};

export default domParse;