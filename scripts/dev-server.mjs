// Serveur de développement local sans dépendance.
// Lance : npm run dev
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "../frontend");
const port = process.env.PORT || 5173;

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

createServer((req, res) => {
  let path = req.url === "/" ? "/index.html" : req.url;
  path = path.split("?")[0];
  const file = join(root, path);
  if (!existsSync(file)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const ext = extname(file);
  res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
  res.end(readFileSync(file));
}).listen(port, () => {
  console.log(`CREWUP dev server: http://localhost:${port}`);
});
