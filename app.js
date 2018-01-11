var Discord = require("discord.js");
var client = new Discord.Client();

var fucktext = require("./bot-modules/fuck.js");
var iogame = require("./bot-modules/iogame.js").iogame;
var allio = require("./bot-modules/iogame.js").allio;
var question = require("./bot-modules/question.js").question;
var shortq = require("./bot-modules/question.js").shortq;
var embiggen = require("./bot-modules/big.js").big;
var showfonts = require("./bot-modules/big.js").fonts;
var joke = require("./bot-modules/joke.js");
let config;
try {
	config = require("./config.json");
} catch(e) {
	config = process.env;
}

client.on("message", parseMessage);
client.login(config.TOKEN);

var embed = {
	"title": "Victor's Random Bot Help Guide",
	"description": "The help guide for Victor's Random Bot. Suggestions and bug fixes go to [the victors-random-bot GitHub](https://github.com/vityavv/victors-random-bot)",
	"color": 10014208,
	"footer": {
		"text": "Made by Victor Veytsman"
	},
	"fields": [
		{
			"name": "Useful commands",
			"value": `>> **~help**: This help menu!
>> **~question**: Ask any question imaginable and have [Wolfram|Alpha](https://www.wolframalpha.com/) answer it for you in image form! Example: \`~question what is the net worth of Bill Gates?\`
>> **~shortq**: Ask any question imaginable and have [Wolfram|Alpha](https://www.wolframalpha.com/) answer it for you in *sentence* form! Warning: the sentences are super short so this is not suggested for non-math questions. See example above. See example above.`
		},
		{
			"name": "Fun commands",
			"value": `>> **~fuck**: Fucks up whatever text you send it. Example: \`~fuck fuck my shit up\`
>> **~big**: Uses figlet to make your text big! Examples: \`~big big!\`, or with a specified font: \`~big /FONT/big\`, or with a random font: \`~big /r/big\`.
>> **~fonts**: Lists all figlet fonts (to use with **~big**). There are **287** fonts so you might want to do this in a spam channel or something. Example: \`~fonts\`
>> **~iogame**: Gives you a random *.io* game out of 150. Example: \`~iogame\`
>> **~allio**: Gives you a link to every single *.io* game I have. There are **150** of these so you might want to beware!`
		}
	]
};

var commandset = [
	"HELP MENU",
	"===============================================",
	">> **~help**: this help screen",
	">> **~fuck**: fucks up any text you send it (Usage: ~fuck blah blah)",
	">> **~iogame**: gives you a random io game out of 150",
	">> **~allio**: gives you a link to every singe io game in my database. WARNING: THERE ARE 150 OF THESE",
	">> **~question**: gives you the response to your question (ex. 5+1, how many ounces in a liter, etc.), courtesy of Wolfram|Alpha",
	">> **~shortq** (DEPRECIATED): gives you the short response to your question instead of the image (again, courtesy of Wolfram|Alpha",
	">> **~big**: makes all of the text you send it big (Usage: \"~big blah blah\" OR \"~big /font/blah blah\" where font is a figlet font or r for random)",
	">> **~fonts**: gives you all of the fonts. WARNING: THERE ARE 287 FONTS SO PUT THIS IN A SPAM CHANNEL OR SOMETHING"
];
function parseMessage(message) {
	if (message.content.toLowerCase().startsWith("~fuck ")) {
		fucktext(message, 6);
	} else if (message.content.substring(0, 7).toLowerCase() == "~iogame") {
		iogame(message);
	} else if (message.content.substring(0, 5).toLowerCase() == "~help") {
		message.channel.send({embed});
	} else if (message.content.substring(0, 10).toLowerCase() == "~question ") {
		question(message, 10);
	} else if (message.content.substring(0, 8).toLowerCase() == "~shortq ") {
		shortq(message, 8);
	} else if (message.content.substring(0, 5).toLowerCase() == "~big ") {
		embiggen(message, 5)
	} else if (message.content.substring(0, 6).toLowerCase() == "~fonts") {
		showfonts(message);
	} else if (message.content.substring(0, 6).toLowerCase() == "~allio") {
		allio(message);
	} else if (message.content.toLowerCase().startsWith("~joke")) {
		joke(message);
	}
}
