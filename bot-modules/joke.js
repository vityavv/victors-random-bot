var https = require("https");
module.exports = function(message) {
	https.get({
		hostname: "icanhazdadjoke.com",
		headers: {"Accept": "text/plain"},
		protocol: "https:"
	}, function(response, error) {
		var body = "";
		response.on("data", data => {body += data});
		response.on("end", () => {message.channel.send(body + "\n\nAnswers from https://icanhazdadjoke.com")});
	});
}
