const express = require('express');
const PORT = 5000;
const app = express();

app.get((req, res) => {
	res.send('Hello!')
});

app.listen(PORT, () => {
	console.log(`Started listening on port ${PORT}`);
});

module.exports = app;
