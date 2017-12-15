var Discord = require("discord.js");
var client = new Discord.Client();
var http = require("http");
var figlet = require("figlet");
var Stream = require("stream").Transform;
var fs = require("fs");

client.on("message", parseMessage);
client.on("guildMemberAdd", function(guildMember) {
	console.log("A guild member was added");
	guildMember.createDM(function (dmChannel) {
		console.log("A dm channel with that guild member was created");
		dmChannel.send("Welcome to " + guildMember.guild + "!");
		console.log(guildMember.guild);
		if (guildMember.guild == "Animal Alliance") {
			dmChannel.send("Watch out for Tyler");
		}
	});
});
client.login(process.env.TOKEN);
var tempcount = 0;
var fonts = figlet.fontsSync();
var iogames = [
	"gartic", "warscrap", "blastarena", "brutes", "hexar", "drillz", "eggl", "bellum", "123shoot", "gauch",
	"pixelz", "deathcar", "mope", "lordz", "brutal", "deeeep", "zombz", "glor", "doomed", "starve",
	"moomoo", "diep", "stba", "bist", "mechar", "doblons", "mudwars", "wormate", "slither", "limax",
	"spinz", "cursors", "hexagor", "braains", "ghostz", "agar", "superhex", "facepunch", "skribbl",
	"nitroclash", "kugeln", "battleboats", "gats", "starblast", "nightpoint", "squadd", "wings",
	"spaceone", "spacesymbols", "spacewar", "creatur", "oceanar", "puble", "powerline", "territor", "nafk",
	"spred", "krew", "snowfight", "castlearena", "zomzom", "manormonster", "woodpdrift", "wilds", "frogar",
	"wormax", "narwhale", "superballs", "s0urce", "piranh", "sharkz", "speedboats", "skyarena", "warbot",
	"tankwars", "blash", "goons", "pikes", "slain", "laaaava", "stomped", "driftin", "bumpyball", "sl4sh",
	"beachfight", "spaceblast", "starflict", "astroe", "oib", "foes", "cubee", "surviv", "erth",
	"teamball", "jukegame", "soccerball", "cararena", "nobrakes", "racegame", "carboom", "flaap",
	"curvefever", "gobattle", "bloble","vetrix", "jumbled", "splix", "rangersteve", "dogeballs", "gotia",
	"bomby", "zlap", "5mintokill", "blockor", "rusher", "dotz", "orn", "klad", "hordes", "battlegroup",
	"jomp", "paku", "dotta", "snok", "zorb", "medizzza", "darknova", "basher", "ovar", "dogargame",
	"nicefart", "lasersharks", "karnage", "galax", "piratebattle", "astrix", "luffy", "painty", "swordz",
	"bomber7", "mygun", "supersnake", "bombarena", "celestia", "c4arena", "slam", "arraw", "elementar",
	"elude", "piaf"
];
var commandset = [
	"HELP MENU",
	"===============================================",
	">> *~help*: this help screen",
	">> *~fuck*: fucks up any text you send it (Usage: ~fuck blah blah",
	">> *~iogame*: gives you a random io game out of 150",
	">> *~allio*: gives you a link to every singe io game in my database. WARNING: THERE ARE 150 OF THESE",
	">> *~question*: gives you the response to your question (ex. 5+1, how many ounces in a liter, etc.), courtesy of Wolfram|Alpha",
	">> *~shortq* (DEPRECIATED): gives you the short response to your question instead of the image (again, courtesy of Wolfram|Alpha",
	">> *~big*: makes all of the text you send it big (Usage: \"~big blah blah\" OR \"~big /font/blah blah\" where font is a figlet font or r for random",
	">> *~fonts*: gives you all of the fonts. WARNING: THERE ARE 287 FONTS SO PUT THIS IN A SPAM CHANNEL OR SOMETHING"
];
function parseMessage(message) {
	//Dad bot:
	/*if (message.content.substring(0, 3).toLowerCase() == "im ") {
		message.channel.send("I would say \"Hi, " + message.content.substring(3) + ", I'm Victor's Random Bot!\", but I was forced into compliance by a mean admin.");
	}
	if (message.content.substring(0, 4).toLowerCase() == "i'm ") {
		message.channel.send("I would say \"Hi, " + message.content.substring(4) + ", I'm Victor's Random Bot!\", but I was forced into compliance by a mean admin.");
	}
	if (message.content.substring(0, 5).toLowerCase() == "i am " ) {
		message.channel.send("I would say \"Hi, " + message.content.substring(5) + ", I'm Victor's Random Bot!\", but I was forced into compliance by a mean admin.");
	}*/
	//Fuckitup-bot
	if (message.content.substring(0, 6).toLowerCase() == "~fuck ") {
		var text = message.content.substring(5);
		text = text.split("");
		for (var i = 0; i < text.length; i++) {
			if (Math.random() > .5) {
				text[i] = text[i].toUpperCase();
			} else {
				text[i] = text[i].toLowerCase();
			}
		}
		message.channel.send(text.join(""));
	}
	if (message.content.substring(0, 7).toLowerCase() == "~iogame") {
		message.channel.send("http://" + iogames[Math.floor(Math.random()*iogames.length)] + ".io");
	}
	if (message.content.substring(0, 5).toLowerCase() == "~help") {
		message.channel.send(commandset.join("\n"));
	}
	if (message.content.substring(0, 10).toLowerCase() == "~question ") {
		http.get("http://api.wolframalpha.com/v1/simple?i="+encodeURIComponent(message.content.substring(10))+"&appid=5VW435-9JY9W6U2P9", function(response, error) {
			if (error) throw error;
			var body = new Buffer.alloc(0);
			response.on('data', (data) => {body = Buffer.concat([body, data])});
			response.on("end", ()=>{
				tempcount++;
				var name = `temp${tempcount}.png`;
				fs.writeFile(name, body, function(err) {
					if (err) throw err;
					message.channel.send("Answer from Wolfram|Alpha", {file: name})
					.then(() => {fs.unlink(name, ()=>{console.log("unlinked!")})});
				});
			});
		});
	}
	if (message.content.substring(0, 8).toLowerCase() == "~shortq ") {
		http.get("http://api.wolframalpha.com/v1/result?i="+encodeURIComponent(message.content.substring(8))+"&appid=5VW435-9JY9W6U2P9", function(result) {
			var body = "";
			result.on("data", data => {
    		body += data;
		  });
			result.on("end", function() {
				message.channel.send(body + "\n\nAnswers from Wolfram|Alpha");
			});
		});
	}
	if (message.content.substring(0, 5).toLowerCase() == "~big ") {
		var fontToUse = "Standard";
		var messageContent = message.content;
		if (message.content.substring(0, 6).toLowerCase() == "~big /") {
			messageContent = messageContent.split("/");
			fontToUse = messageContent[1];
			if (fontToUse == "r") fontToUse = fonts[Math.floor(Math.random()*fonts.length)];
			if (!fonts.includes(fontToUse)) fontToUse = "Standard";
			messageContent.splice(0, 2);
			messageContent = messageContent.join("/");
		} else {
			messageContent = messageContent.substring(5);
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
	if (message.content.substring(0, 6).toLowerCase() == "~fonts") {
		var fontmessage1 = fonts;
		var fontmessage2 = fontmessage1.splice(0, Math.floor(fontmessage1.length/2));
		message.channel.send(fontmessage2.join("`||`"));
		message.channel.send(fontmessage1.join("`||`"));
	}
	if (message.content.substring(0, 6).toLowerCase() == "~allio") {
		var iomessage1 = iogames;
		var iomessage2 = iomessage1.splice(0, Math.floor(iomessage1.length/2));
		message.channel.send("http://"+iomessage2.join(".io | http://")+".io");
		message.channel.send("http://"+iomessage1.join(".io | http://")+".io");
	}
}
