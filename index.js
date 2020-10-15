const discord = require('discord.js');
const client = new discord.Client();
const token = 'NzY1Nzg4Njk5MzkyNjA2MjM4.X4Z6TQ.vL251LkDiTo5EBs_Wn7BmrfALls';

client.on('ready', () => {
    console.log('on');
});

client.login(token);