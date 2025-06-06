
# 🚀 Vanir Aternos AFK Bot

Keep your Minecraft server active 24/7 with this simple AFK bot!  
Deploy it on **Render.com** for free always-online hosting and connect it to your **Aternos Paper server**.

---

## 🌑 Dark Mode Ready — Powered by Mineflayer

---

## 🔧 Step 1: Prepare Your Aternos Server

1. **Create or use an existing Aternos Minecraft server.**  
   - Must be a **Paper** (Java Edition) server, version compatible with the bot (1.21.5 recommended).  
2. **Enable Geyser and Floodgate plugins if you want Bedrock support.**  
   - Configure Floodgate properly to avoid username conflicts.  
3. **Find your server’s IP and port:**  
   - Typically something like `servername.aternos.me` and a port like `19132`.  
4. **Disable or relax AFK kick plugins/settings.**  
   - The bot needs to move or act to avoid getting kicked for inactivity.  
5. Optionally, give your bot **operator permissions** or put it in **creative/spectator mode** to avoid mob kills.

---

## ⚙️ Step 2: Fork This Repository

- Fork this repo to your GitHub account so you can connect it to Render.

---

## ☁️ Step 3: Deploy on Render.com

1. Sign up or log in at [Render.com](https://render.com).  
2. Click **New → Web Service**.  
3. Connect your GitHub and select your forked repo.  
4. Configure:  
   - **Name:** `afk-bot` (or your choice)  
   - **Region:** Closest to your location  
   - **Branch:** `main` (or default branch)  
5. Set the commands:  
   - **Build Command:** `npm install`  
   - **Start Command:** `node index.js`  
6. Add environment variables exactly as below:  

```bash
# Your Aternos server host (no "https://" or slashes)
SERVER_HOST=servername.aternos.me

# Your server port (default for Java: 25565, use correct one if different)
SERVER_PORT=

# Bot username (must not match your real player name)
BOT_USERNAME=

# Web port for Render (do not change)
PORT=3000
```

7. Click Create Web Service.


8. Wait for Render to build and start your bot.




---

🟢 Step 4: Verify & Monitor

Check Render’s Logs tab to see your bot’s connection status.

The bot will automatically reconnect if disconnected.

It will move continuously to prevent AFK kicks.



---

🛠️ Tips & Troubleshooting

Double-check your Aternos server IP and port.

If the bot disconnects frequently, review server logs.

Use operator or creative mode to keep your bot safe from mobs.
The HTTP server on port 3000 keeps Render from sleeping your bot.

Adjust Floodgate config if Bedrock players have issues joining.



---


## 💬 Support & Community - Join the Vanir Discord!

Need help with setup or want to chat? Join our friendly Discord server!


[![Join Discord](https://img.shields.io/discord/1352670524395880549?label=Join%20Vanir%20Support%20Discord%20&style=for-the-badge)](https://discord.gg/W4HBMCRFPF)

or

[👉 **Join the Vanir Discord Server!**](https://discord.gg/vanir)




---

Made with ❤️ by Vanir Team
Keep your Minecraft world alive, one bot at a time.

