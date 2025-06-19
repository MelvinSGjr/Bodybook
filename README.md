# Bodybook

**Bodybook** is a modern social network with multilingual support, adaptive interface, and clean branding.

## Project Structure

```
Bodybook/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── profile.html
│   │   ├── login.html
│   │   └── styles/
│   │       ├── main.css
│   │       └── auth.css
│   └── src/
│       ├── scripts/
│       │   ├── api.js
│       │   ├── auth.js
│       │   └── posts.js
│       └── assets/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
├── package.json
└── README.md
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Multilingual interface (10+ languages)
- Modern adaptive design
- News feed, profile, authentication
- REST API (Express)
- Easy integration with any database

## Technologies
- Frontend: HTML, CSS, JavaScript (modular scripts)
- Backend: Node.js, Express
- API: RESTful endpoints

---

## Deployment on Debian

1. **Install Node.js and npm:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm git
   ```
2. **Clone the repository:**
   ```bash
   git clone https://github.com/MelvinSGjr/bodybook.git
   cd bodybook
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm run dev
   # or for production
   npm start
   ```
5. **(Optional) Use PM2 for background process:**
   ```bash
   sudo npm install -g pm2
   pm2 start server/app.js --name bodybook
   pm2 save
   pm2 startup
   ```
6. **Open in browser:**
   ```
   http://your-server-ip:3000
   ```
7. **(Optional) Docker deployment:**
   ```bash
   docker build -t bodybook .
   docker run -d -p 3000:3000 bodybook
   ```
8. **(Optional) Set up Nginx as a reverse proxy for port 80/443.**

---

**Bodybook** — your new home for communication!

# Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"] 
