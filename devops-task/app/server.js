const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

app.get('/', function(req, res) {
    redisClient.get('numVisits', function(err, numVisits) {
        const clientIP = req.ip;
        const conIP = req.connection.remoteAddress;
        const sockIP = req.socket.remoteAddress;
        const hostname = os.hostname();
        const headers = JSON.stringify(req.headers);
        numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
        let r =`<pre>Hostname: ${hostname}\nNumber of visits: ${numVisitsToDisplay}\nClient IP Address: ${clientIP}\nConnection IP Address: ${conIP}\nSocket IP Address: ${sockIP}\nHeaders: ${headers}</pre>`;
        res.send(r);
        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});
