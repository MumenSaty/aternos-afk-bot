const mineflayer = require('mineflayer');
const http = require('http');

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.SERVER_HOST || 'servername.aternos.me',
    port: parseInt(process.env.SERVER_PORT) || 20540,
    username: process.env.BOT_USERNAME || 'VanirMC',
    auth: 'offline',
    version: false // auto-detect
  });

  bot.once('spawn', () => {
    console.log('✅ Bot joined the server.');

    // Move forward endlessly to avoid AFK kick
    bot.setControlState('forward', true);
  });

  bot.on('end', () => {
    console.warn('⚠️ Disconnected, reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.error('❌ Bot error:', err.message);
    // reconnect on common network errors
    if (['ECONNRESET', 'ECONNREFUSED', 'ETIMEDOUT'].includes(err.code)) {
      console.log('🔁 Retrying connection in 15 seconds...');
      setTimeout(startBot, 15000);
    }
  });

  bot.on('kicked', (reason) => {
    console.warn('❌ Kicked from server:', reason);
    // reconnect after kick
    setTimeout(startBot, 15000);
  });
}

// Start bot for first time
startBot();

// HTTP server to keep Render free tier alive
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AFK Bot is running\n');
}).listen(process.env.PORT || 3000, () => {
  console.log(`🌐 HTTP server running on port ${process.env.PORT || 3000}`);
});
