// submitイベントしてページ遷移をさせたくない
{
	document.getElementById('form').addEventListener('submit', () => {
		console.log(document.getElementById('input-text').value);
		event.preventDefault();
	})
}

document.getElementById('js-test-button').addEventListener('click', () => {
	console.log('test');
	// ボタンをクリックすると#js-testが表示されてアニメーション
	const test = document.getElementById('js-test');
	test.style.display = 'block';
	test.classList.add('animate__animated', 'animate__flip');
})

// ボタンをクリックするとtableが表示される
console.log('tableアニメーション');
const table = document.getElementById('js-table');
table.classList.remove('table--invisible', 'animate__animated', 'animate__fadeIn');
table.classList.add('table', 'animate__animated', 'animate__fadeIn');