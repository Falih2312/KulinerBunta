const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let rawUrl = req.url.split('?')[0];
  
  if (rawUrl !== '/' && !path.extname(rawUrl) && !rawUrl.endsWith('/')) {
    const dirTest = path.join(PUBLIC_DIR, rawUrl);
    if (fs.existsSync(dirTest) && fs.statSync(dirTest).isDirectory()) {
      res.writeHead(301, { 'Location': rawUrl + '/' });
      res.end();
      return;
    }
  }

  let reqUrl = rawUrl;
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(PUBLIC_DIR, reqUrl);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #D62828;">404 Halaman Tidak Ditemukan</h1>
          <p>KulinerBunta.id Multi-App Platform (CEO: Djamaludin Musa, SKM)</p>
          <a href="/" style="display: inline-block; padding: 10px 20px; background: #D62828; color: white; border-radius: 10px; text-decoration: none; font-weight: bold;">Kembali ke Launcher Portal Utama</a>
        </div>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server preview KulinerBunta.id berjalan di http://localhost:${PORT}`);
});
