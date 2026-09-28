import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const targetDir = path.join(packageRoot, "dist", "cliplab");

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(path.join(packageRoot, "src", "cliplab", "LICENSE"), path.join(targetDir, "LICENSE"));
fs.copyFileSync(path.join(packageRoot, "src", "cliplab", "PROVENANCE.md"), path.join(targetDir, "PROVENANCE.md"));
