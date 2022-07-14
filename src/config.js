var mqtt = require('mqtt/dist/mqtt')

const client = mqtt.connect('ws://47.254.82.226:9001',  {
    //open connection with your broker in AWS via websocket
    username: "root", //authenticate your broker with username and password
    password: "root",
})

module.exports = {mqtt, client}