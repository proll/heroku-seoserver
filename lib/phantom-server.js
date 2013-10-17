var system = require('system');
var page = require('webpage').create();
page.settings.loadImages = false;
page.settings.localToRemoteUrlAccessEnabled = true;
// mask request as Googlebot to make YandexMetrika know that it is just a Bot - not an ordinary user
// page.settings.userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
page.viewportSize = { width: 1440, height: 1200 };


page.onCallback = function() {
	console.log(page.content);
	phantom.exit();
};
// page.onConsoleMessage = function(msg, lineNum, sourceId) {
// 	console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
// };
page.onInitialized = function() {
  page.evaluate(function() {
		document.addEventListener('__htmlReady__', function() {
			window.callPhantom();
		}, false);
		setTimeout(function() {
			window.callPhantom();
		}, 10000);
	});
};
page.open(system.args[1], function () {

});

