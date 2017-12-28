module.exports = function(message, substring) {
	var text = message.content.substring(substring);
	text = text.split("");
	for (var i = 0; i < text.length; i++) {
		if (Math.random() > .5) {
			text[i] = text[i].toUpperCase();
		} else {
			text[i] = text[i].toLowerCase();
		}
	}
	message.channel.send(text.join(""));
	if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
		message.delete().catch(console.error);
	}
}
