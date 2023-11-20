import express from 'express';
import fetch from 'node-fetch';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

const PORT = 3001
const server = express();
server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Acces to any origin
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

server.get('/server', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

server.post("/clean-uri", (req, res) => {
    const cleanUriUrl = "https://cleanuri.com/api/v1/shorten";

    fetch(cleanUriUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    })
        .then((response) => response.json())
        .then((result) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.json(result);
        })
        .catch((error) => {
            console.error("Error requesting cleanuri.com:", error);
            res.status(500).json({ error: "Intermediate server error" });
        });
});

  
server.listen(PORT, () => {
  console.log('ready', PORT);
});
