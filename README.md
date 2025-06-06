---

<p align="center">
  <pre style="font-family: monospace; font-size:14px; color:#79c0ff; background:#0d1117; padding:10px; border-radius:8px; display:inline-block; user-select:none;">
 __     __       _       _       
 \ \   / /__ _ _| |_ ___| |__ ___
  \ \ / / _ \ '_|  _/ _ \ / /(_-<
   \_/_/\___/_|  \__\___/_\_\/__/

      Vanir AFK Bot - Keep your Minecraft server online
  </pre>
</p>

<h1 align="center" style="color:#58a6ff;">Vanir AFK Bot for Minecraft Java Servers</h1>

---

## 🔥 What is Vanir AFK Bot?

Vanir AFK Bot is a lightweight, reliable Minecraft Java Edition bot designed to **keep your server online by preventing AFK kicks** and **avoiding server idle timeouts**.  

It’s perfect for servers hosted on platforms like **Aternos**, **Render.com**, or any other host that shuts down when no players are online.

---

## ⚙️ Features & Benefits

- **Auto reconnect:** If disconnected, the bot will try to reconnect automatically after 10 seconds  
- **Anti-AFK:** The bot continuously walks forward and swings its arm periodically to appear active  
- **Offline mode support:** Works with cracked or offline mode servers without Mojang authentication  
- **Version auto-detection:** No need to hardcode the Minecraft server version  
- **Light HTTP server:** Keeps your Render.com service alive to avoid automatic sleep  
- **Human-like username:** Use a custom name to blend in and avoid suspicion  
- **Minimal dependencies:** Only `mineflayer` and `dotenv` required

---

## 🛠️ Prerequisites

- Node.js **v16** or higher installed  
- Basic knowledge of terminal/command line  
- Access to your Minecraft server IP and port  
- Optional: A free [Render.com](https://render.com) account to host the bot 24/7  

---

## 📋 Setup Guide

### 1. Fork this repository on GitHub

Click the **Fork** button at the top right corner of this repo page to create your own copy.

### 2. Clone your forked repo locally or edit directly on GitHub Codespaces / your favorite IDE

### 3. Install dependencies:

```bash
npm install

4. Configure environment variables:

Create a .env file in the root directory with the following content:

SERVER_HOST=your_server_address_here
SERVER_PORT=25565
BOT_USERNAME=YourBotName
PORT=3000

Replace your_server_address_here with your server IP or domain (e.g. vanirmcpe.aternos.me)

Replace 25565 with your server port

Choose a BOT_USERNAME that looks human, e.g. Steve_01

Keep PORT=3000 unless you want to use a different port for the HTTP server


5. Run the bot locally:

npm start

You should see console logs confirming the bot joined your server and is walking forward to avoid AFK kicks.


---

🚀 Deploy on Render.com (Free Hosting)

Render.com provides a free tier that works well for hosting your bot 24/7.

Steps:

Create a new Web Service on Render

Connect your GitHub fork repo

Set Build Command: npm install

Set Start Command: node index.js

Add environment variables in the Render dashboard matching your .env file

Deploy and enjoy your bot staying online around the clock!



---

🔒 Important Notes

The bot only works on offline/cracked mode servers without Mojang authentication

To prevent bot death, consider setting it in creative or spectator mode if your server allows

Avoid using obvious bot usernames (e.g., AFK_Bot_01) to prevent being banned or kicked

Regularly check logs for errors and reconnect attempts



---

🧩 How the Bot Prevents AFK Kicks

The bot continuously:

Holds the forward key to simulate walking

Swings its arm every 2 seconds to mimic player activity

Auto-reconnects if disconnected or kicked


This behavior fools server anti-AFK plugins or built-in idle checks, keeping the bot — and thus your server — online.


---

🤝 Support & Community

Need help or want to chat? Join our Discord support server:

<p align="center">
  <a href="https://discord.gg/vanir" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Discord-Join%20Support%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join Discord Support Server"/>
  </a>
</p>
---

📄 License

MIT License — free to use and modify for your personal projects!


---

<p align="center" style="color:#8b949e; font-size:12px;">Vanir AFK Bot © 2025 — Keeping your Minecraft server online and active.</p>
```
---
