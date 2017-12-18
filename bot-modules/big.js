var figlet = require("figlet");

var fonts = figlet.fontsSync();

module.exports.big = function(message, substring) {
	var fontToUse = "Standard";
	var messageContent = message.content;
	if (message.content.substring(0, substring+1).toLowerCase() == "~big /") {
		messageContent = messageContent.split("/");
		fontToUse = messageContent[1];
		if (fontToUse == "r") fontToUse = fonts[Math.floor(Math.random()*fonts.length)];
		if (!fonts.includes(fontToUse)) fontToUse = "Standard";
		messageContent.splice(0, 2);
		messageContent = messageContent.join("/");
	} else {
		messageContent = messageContent.substring(substring);
	}
	if (messageContent.length < 100) {
		figlet(messageContent, {font: fontToUse}, function (error, data) {
			if (error) throw error;
			if (data.length > 2000) {
				parseMessage(message);
			} else {
				message.channel.send("```" + data + "```");
			}
		});
	} else {
		message.channel.send("That message is so big, not even *I* can make it bigger. And I'm the king of making things big! (Try something with less than 100 characters.)");
	}
}
module.exports.fonts = function(message) {
	var fontmessage1 = fonts;
	var fontmessage2 = fontmessage1.splice(0, Math.floor(fontmessage1.length/2));
	message.channel.send(fontmessage2.join("`||`"));
	message.channel.send(fontmessage1.join("`||`"));
}
