// Load environment variables
require('dotenv').config();

const mineflayer = require('mineflayer');
const express = require('express');
const axios = require('axios');

// 🌐 Express server to keep Render alive
const app = express();
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Express server running on port ${process.env.PORT || 3000}`);
});

// 🔁 Self-ping to prevent Render from sleeping
const pingUrl = 'https://adwadsdwa.onrender.com'; // Replace with your actual Render URL(make sure!)
setInterval(() => {
  axios.get(pingUrl)
    .then(() => console.log('🔁 Self-ping successful'))
    .catch(() => console.warn('⚠️ Self-ping failed'));
}, 300000); // Every 5 minutes

// 🤖 Start the AFK bot
function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.SERVER_HOST || 'servername.aternos.me',
    port: parseInt(process.env.SERVER_PORT) || 25565,
    username: process.env.BOT_USERNAME || 'VanirMC',
    auth: 'offline',
    version: false // auto-detect
  });

  bot.once('spawn', () => {
    console.log('✅ Bot joined the server');
    bot.setControlState('forward', true); // Move to avoid AFK kick
  });

  bot.on('end', () => {
    console.warn('⚠️ Bot disconnected, reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.error('❌ Bot error:', err.message);
    if (['ECONNRESET', 'ECONNREFUSED', 'ETIMEDOUT'].includes(err.code)) {
      console.log('🔁 Retrying connection in 15 seconds...');
      setTimeout(startBot, 15000);
    }
  });

  bot.on('kicked', (reason) => {
    console.warn('❌ Bot kicked:', reason);
    setTimeout(startBot, 150000);
  });
  bot.on('kicked', (reason) => {
  console.warn('❌ Kicked from server:', reason);
  });

}

startBot();
