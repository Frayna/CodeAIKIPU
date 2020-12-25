var fs = require('fs');
var path = require('path');
function log(message) {
    var now = new Date();
    var full_message = "[" + now.toISOString() + "] " + message;
    var filePath = path.join("D:/Users/Max/Documents/AdventureLand/Logs/", CHARACTER_NAME + ".upgrade.log");
    fs.appendFile(filePath, full_message + "\n", (err) => {});
    game_log("U: " + message);
};