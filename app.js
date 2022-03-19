const express = require('express');
const geoIp = require('geoip-lite');
const cors = require('cors')


const app = express();
const port = '3000';



app.use(cors({
    origin: [
        'http://localhost:8080',
    ],
}));

app.get('/test', (req, res) => {
    res.send('hello')
})

app.get('/api/get-geo-by-ip', (req, res) => {
    const { ip } = req.query
    console.log(req.params)
    console.log(req.query)
    console.log(ip)
    try {
        const geo = geoIp.lookup(ip);
        if (geo) {
            console.log(geo)
            return res.status(200).json(geo)
        }
        return res.status(401).json("Enter a vaild ip address");

    } catch (error) {
        return res.status(500).json(error)
    }

})

app.listen(port, () => {
    console.log(`Running on ${port}`);
})