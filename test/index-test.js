// submitイベントしてページ遷移をさせたくない
document.getElementById('form').addEventListener('submit', () => {
	console.log(document.getElementById('input-text').value);
	event.preventDefault();
});