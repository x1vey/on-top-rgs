const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace heavy completely blacking out gradients and extreme overlays that butcher branding.
  // Switch to simpler RGBA combinations natively looking closer to the live site.
  content = content.replace(/background: linear-gradient\(rgba\(0,0,0,0\.6\),\s*rgba\(0,71,79,0\.95\)\),/g, "background: linear-gradient(rgba(0,71,79,0.3), rgba(0,71,79,0.7)),");
  content = content.replace(/background: linear-gradient\(90deg,\s*rgba\(0,71,79,0\.95\)\s*0%,\s*rgba\(0,71,79,0\.5\)\s*50%,\s*rgba\(0,0,0,0\.2\)\s*100%\);/g, "background: linear-gradient(90deg, rgba(0,71,79,0.8) 0%, rgba(0,71,79,0.2) 100%);");
  content = content.replace(/background: linear-gradient\(rgba\(0,71,79,0\.85\),\s*rgba\(0,71,79,0\.95\)\),/g, "background: linear-gradient(rgba(0,71,79,0.4), rgba(0,71,79,0.8)),");
  content = content.replace(/background: linear-gradient\(rgba\(0,71,79,0\.9\),\s*rgba\(0,71,79,0\.95\)\),/g, "background: linear-gradient(rgba(0,71,79,0.4), rgba(0,71,79,0.8)),");

  // Remove the `reveal-up` class which was dictating page transitions on HTML side 
  // to be fully certain no ugly transitions occur.
  content = content.replace(/reveal-up/g, "");
  // Remove staggers
  content = content.replace(/stagger-[1-3]/g, "");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed animations & lightened gradients in ${file}`);
  }
});
