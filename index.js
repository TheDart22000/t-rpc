const express = require('express');
const PORT = 5000;
const app = express();

app.use((req, res, next) => {
    const reqData = {
	    method: req.method,
	    targetUrl: req.url,
	    clientIp: req.ip
    };

    console.log(`[Server/Middleware]: ${reqData.method} request recieved - recieved from: ${reqData.clientIp} - target: ${reqData.targetUrl}`);
    // Tell route to complete.
   next();
});

app.get('/', (req, res) => {
	res.send('Hello!')
});

app.listen(PORT, () => {
	console.log(`Started listening on port ${PORT}`);
});

module.exports = app;
