const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.token;

client.on('ready', () => {
    console.log('on');
});

client.login(token);
