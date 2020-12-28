const assert = chai.assert; // ←chaiはindex.htmlでグローバルに読み込む

import domParse from "./../src/module/domParse.mjs";

/**
 * domParseの結果
 */
const dom = domParse(`<main>
	<article>
		<section>
			<h1>テストだよ</h1>
			<p><a href="http://example.com" target="_blank" rel="noopener noreferrer">テストです。</a></p>
			<h2>テストですとも</h2>
			<figure>
				<figcaption>表のキャプション</figcaption>
				<table>
					<thead>
						<th scope="col">ライダー名</th>
						<th scope="col">変身者名</th>
						<th scope="col">ベルト名</th>
					</thead>
					<tbody>
						<tr>
							<th scope="row">仮面ライダーゼロワン</th>
							<td>飛電或人</td>
							<td>飛電ゼロワンドライバー</td>
						</tr>
						<tr>
							<th scope="row">仮面ライダーセイバー</th>
							<td>神山飛羽真</td>
							<td>聖剣ソードライバー</td>
						</tr>
					</tbody>
					<tfoot>
						<th scope="col">ライダー名</th>
						<th scope="col">変身者名</th>
						<th scope="col">ベルト名</th>
					</tfoot>
				</table>
			</figure>
		</section>
	</article>
</main>`);

// html上に表示
document.getElementById('js-output_table').appendChild(dom);

describe('domParse関数のテスト', () => {
	it('HTML文字列を渡す→HTMLElementを返す', () => {
		assert.instanceOf(dom, Element);
	});
});