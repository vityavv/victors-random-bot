var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", parseMessage);
client.login(process.env.TOKEN);

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
	"*help: this help screen",
	"*fuck: fucks up any text you send it",
	"*iogame: gives you a random io game out of 150",
];
function parseMessage(message) {
	//Dad bot:
	if (message.content.substring(0, 3).toLowerCase() == "im ") {
		message.channel.send("Hi, " + message.content.substring(3) + ", I'm Dad!");
	}
	if (message.content.substring(0, 4).toLowerCase() == "i'm ") {
		message.channel.send("Hi, " + message.content.substring(4) + ", I'm Dad!");
	}
	//Fuckitup-bot
	if (message.content.substring(0, 6).toLowerCase() == "*fuck ") {
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
	if (message.content.substring(0, 7).toLowerCase() == "*iogame") {
		message.channel.send("http://" + iogames[Math.floor(Math.random()*iogames.length)] + ".io");
	}
	if (message.content.substring(0, 5).toLowerCase() == "*help") {
		message.channel.send(commandset.join("\n"));
	}
}
