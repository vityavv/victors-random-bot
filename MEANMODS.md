# Are your mods mean?
The mods of *my* discord server are super-duper-shmooper mean, so I could not include this in the bot. However, if you have nice, fun-loving mods, you may add this code inside the `parsemessage` function in `app.js`.

```javascript
if (message.content.substring(0, 3).toLowerCase() == "im ") {
	message.channel.send("Hi, " + message.content.substring(3) + ", I'm Victor's Random Bot!");
}
if (message.content.substring(0, 4).toLowerCase() == "i'm ") {
	message.channel.send("Hi, " + message.content.substring(4) + ", I'm Victor's Random Bot!");
}
if (message.content.substring(0, 5).toLowerCase() == "i am " ) {
	message.channel.send("Hi, " + message.content.substring(5) + ", I'm Victor's Random Bot!");
}```
