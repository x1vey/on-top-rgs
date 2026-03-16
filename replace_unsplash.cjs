const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

const imageMap = [
  { regex: /https:\/\/images\.unsplash\.com\/photo-1584622650111-993a426fbf0a[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-36.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1620626011761-996317b8d101[^\s"']*/g, replacement: 'https://kenhall.imgix.net/Adelaide-Bathroom-Renovation-Gallery-22.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1541888086425-d81bb19240f5[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-81.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1542013936693-884638332954[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-36.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1540324155970-1c3aa4e772f9[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-64.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1581578731548-c64695cc6952[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-59.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1560518883-ce09059eeffa[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-22.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1541888081628-9121c81dc97f[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-36.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1632759145351-1d592919f522[^\s"']*/g, replacement: 'https://kenhall.imgix.net/23-10-2018-72.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1542451542907-6cf80ff362d6[^\s"']*/g, replacement: 'https://kenhall.imgix.net/KH-Day-1-108.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com\/photo-1574786198875-49f5ed231942[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-81.jpg?auto=format&w=1000' },
  { regex: /https:\/\/images\.unsplash\.com[^\s"']*/g, replacement: 'https://kenhall.imgix.net/July-2019-36.jpg?auto=format&w=1000' } // Fallback for any others
];

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  imageMap.forEach(mapping => {
    content = content.replace(mapping.regex, mapping.replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${file}`);
  }
});
