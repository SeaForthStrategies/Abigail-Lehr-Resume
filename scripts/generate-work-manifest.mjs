import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');
const workDir = path.join(publicDir, 'work');

const allowedExt = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);
const folders = ['websites', 'photos', 'graphics', 'client logos'];

function readFolder(folder) {
  const dir = path.join(workDir, folder);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => allowedExt.has(path.extname(f)) && !f.startsWith('._'))
    .map((f) => ({ id: `${folder}-${f}`.replace(/\s+/g, '-'), title: f.replace(/\.[^.]+$/, ''), category: folder, src: `/work/${folder}/${f}` }));
}

const items = folders.flatMap(readFolder);

const manifest = { folders, items };

fs.writeFileSync(path.join(workDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Generated manifest with ${items.length} items.`);


