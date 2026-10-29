import { cp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const sourceDirectory = path.join(projectRoot, 'cloudflare-static');
const outputDirectory = path.join(projectRoot, 'dist');
const originalBundleName = 'index-residential-care.js';
const deployedBundleName = 'index-residential-care-2e40fb1.js';
const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';

await rm(outputDirectory, { recursive: true, force: true });
await cp(sourceDirectory, outputDirectory, { recursive: true });

if (!isGitHubPagesBuild) {
  const htmlFiles = ['index.html', '404.html'];

  for (const fileName of htmlFiles) {
    const filePath = path.join(outputDirectory, fileName);
    const originalHtml = await readFile(filePath, 'utf8');
    const deployedHtml = originalHtml
      .replace('<base href="/CareHomeWebsite/" />', '<base href="/" />')
      .replace(
        `./assets/${originalBundleName}`,
        `./assets/${deployedBundleName}`,
      );

    if (deployedHtml === originalHtml) {
      throw new Error(`Expected Cloudflare path markers were not found in ${fileName}`);
    }

    await writeFile(filePath, deployedHtml, 'utf8');
  }

  const originalBundlePath = path.join(outputDirectory, 'assets', originalBundleName);
  const deployedBundlePath = path.join(outputDirectory, 'assets', deployedBundleName);
  const originalBundle = await readFile(originalBundlePath, 'utf8');
  const deployedBundle = originalBundle.replace(
    'basename:"/CareHomeWebsite"',
    'basename:"/"',
  );

  if (deployedBundle === originalBundle) {
    throw new Error('Expected React Router basename was not found in the production bundle');
  }

  await writeFile(originalBundlePath, deployedBundle, 'utf8');
  await rename(originalBundlePath, deployedBundlePath);
}

console.log(
  `[build-cloudflare-static] Copied the approved gh-pages artifact to dist (${isGitHubPagesBuild ? 'GitHub Pages paths' : 'Cloudflare root paths'}).`,
);
