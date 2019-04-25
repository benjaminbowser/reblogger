// Authenticate via OAuth
var tumblr = require('tumblr.js');

async function reblog(id, reblog_key) {
var client = tumblr.createClient({
  consumer_key: '',
  consumer_secret: '',
  token: '',
  token_secret: ''
});

await sleep(2000); // Pause between posts?

// Make the request
client.reblogPost(blogURL, { id: id, reblog_key: reblog_key }, function (err, data) {
    	if (err) {
		return console.log("Error reblogging post ID: " + id);
	} else {
		return console.log("New post ID: " + data.id);
	}
});
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Reblogger starting");
reblog('', '');
