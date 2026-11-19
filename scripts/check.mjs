// Vérifications automatiques de l'étape 1 : `npm run check`. Aucune dépendance.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, extname, relative } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let errors = 0;

function fail(msg) {
  console.error("❌", msg);
  errors++;
}
function ok(msg) {
  console.log("✅", msg);
}

// 1. Structure attendue
const required = [
  "frontend/index.html",
  "frontend/assets/css/tokens.css",
  "package.json",
  "README.md",
];
for (const p of required) {
  if (!existsSync(join(root, p))) fail(`Manquant : ${p}`);
  else ok(`Présent : ${p}`);
}

// 2. Pas de secret évident
const secretPatterns = [/sk_live_/, /service_role/, /AKIA[0-9A-Z]{16}/];
function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".git") scan(full);
    else if (entry.isFile() && /\.(js|mjs|html|md|json|yml)$/.test(entry.name)) {
      const text = readFileSync(full, "utf8");
      for (const re of secretPatterns) {
        if (re.test(text)) fail(`Possible secret dans ${relative(root, full)}`);
      }
    }
  }
}
scan(root);
ok("Scan secrets terminé");

if (errors) {
  console.error(`\n${errors} erreur(s)`);
  process.exit(1);
} else {
  console.log("\nTout est OK pour l'étape 1.");
}
