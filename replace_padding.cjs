const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Enhance spacing based on Air Conditioning reference
  content = content.replace(/padding:\s*6rem\s*0/g, 'padding: 10rem 0');
  content = content.replace(/padding:\s*8rem\s*0/g, 'padding: 10rem 0');
  content = content.replace(/padding:\s*12rem\s*0\s*6rem\s*0/g, 'padding: 16rem 0 10rem 0');
  content = content.replace(/padding:\s*14rem\s*0\s*8rem\s*0/g, 'padding: 16rem 0 10rem 0');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated spacing in ${file}`);
  }
});
