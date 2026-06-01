import fs from 'fs/promises';
import path from 'path';

const root = path.resolve('dist');
const clientDir = path.join(root, 'client');
const serverDir = path.join(root, 'server');
const pagesDir = path.join(root, 'pages');

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  await fs.rm(pagesDir, { recursive: true, force: true });
  await copyDir(clientDir, pagesDir);
  await copyDir(path.join(serverDir, 'assets'), path.join(pagesDir, 'assets'));
  await fs.copyFile(path.join(serverDir, 'index.js'), path.join(pagesDir, '_worker.js'));
  console.log(`Generated ${pagesDir} for Cloudflare Pages deploy`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
