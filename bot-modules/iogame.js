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
module.exports.iogame = function(message) {
	message.channel.send("http://" + iogames[Math.floor(Math.random()*iogames.length)] + ".io");
}
module.exports.allio = function(message) {
	var iomessage1 = iogames;
	var iomessage2 = iomessage1.splice(0, Math.floor(iomessage1.length/2));
	message.channel.send("http://"+iomessage2.join(".io | http://")+".io");
	message.channel.send("http://"+iomessage1.join(".io | http://")+".io");
}
