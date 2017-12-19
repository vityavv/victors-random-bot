var http = require("http");
module.exports.question = function(message, substring) {
	http.get(`http://api.wolframalpha.com/v1/simple?i=${encodeURIComponent(message.content.substring(substring))}&appid=${process.env.APPID}`, function(response, error) {
		if (error) throw error;
		var body = new Buffer.alloc(0);
		response.on('data', (data) => {body = Buffer.concat([body, data])});
		response.on("end", ()=>{
			message.channel.send("Answer from Wolfram|Alpha", {file: body});
		});
	});
}
module.exports.shortq = function(message, substring) {
	http.get("http://api.wolframalpha.com/v1/result?i="+encodeURIComponent(message.content.substring(substring))+"&appid=5VW435-9JY9W6U2P9", function(result) {
		var body = "";
		result.on("data", data => {
			body += data;
		});
		result.on("end", function() {
			message.channel.send(body + "\n\nAnswers from Wolfram|Alpha");
		});
	});
}
