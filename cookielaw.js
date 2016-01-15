$(function() {
	$.getScript('https://cdn.rawgit.com/delboy1978uk/jquery.cookiebar/master/jquery.cookiebar.js', function() {
		$.cookieBar({
			message: 'We use cookies to store login data and preferences.',
			fixed: true,
			bottom: true,
			acceptText: "I understand",
			policyButton: true,
			policyURL: 'index.php?a=page&b=privacy'
		});
	});
});
