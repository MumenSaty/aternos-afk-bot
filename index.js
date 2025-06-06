require('dotenv').config();
const mineflayer = require('mineflayer');
const http = require('http');

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT, 10),
    username: process.env.BOT_USERNAME,
    auth: 'offline',
    version: false // auto-detect server version
  });

  bot.once('spawn', () => {
    console.log(`✅ ${process.env.BOT_USERNAME} joined and is AFK.`);

    // Keep walking forward and swinging arm to prevent AFK kick
    bot.setControlState('forward', true);
    setInterval(() => {
      bot.swingArm();
    }, 2000);
  });

  bot.on('end', () => {
    console.warn('⚠️ Disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('kicked', (reason) => {
    console.warn('❌ Kicked:', reason);
  });

  bot.on('error', (err) => {
    console.error('❌ Error:', err.message);
  });
}

startBot();

// Keep Render.com web service alive
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AFK bot is active.\n');
}).listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Web server running on port ${process.env.PORT || 3000}`);
});
