//LOADER
const http = require("http");
const express = require("express");
const app = express(); 

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received!");
    response.sendStatus(200);
});

// app.listen(process.env.PORT);
// setInterval(() => {
//     http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
// }, 280000);

//PACKAGES AND FILES
const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
let bot = new Discord.Client();
bot.commands = new Discord.Collection();
const prefix = "p@";

//ON BOOT
bot.on("ready", () => {
    console.log(`[${moment(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: System Booting up...\n[${moment.utc(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: All commands loaded.\n[${moment.utc(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: 4 events ready.`);

    setTimeout(() => {
        console.log(`${moment(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: Successfully booted.`);
    }, 2000)

    function botStatus(){
        let status = [
            `my default prefix ${prefix}.`,
            `with ${bot.users.size} players.`
        ];
    
        let rStatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rStatus], {type: "STREAMING"});
    };
    setInterval(botStatus, 20000);
});

//MESSAGE EVENT
bot.on("message", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    message.prefix = prefix;

    //COMMAND HANDLER
    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args)
        } catch (err) {
        console.log(`${err.stack}`);
    }
    console.log(`[${moment(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${message.author.tag}]: Command: "${cmd} [${message.guild.name}]`);
});

//AUTH
bot.login(process.env.TOKEN);











