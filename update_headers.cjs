const fs = require('fs');
const path = require('path');

const newHeader = fs.readFileSync('new_header.html', 'utf8');
const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  files.forEach(function (file) {
    if (file.endsWith('.html') && file !== 'new_header.html' && file !== 'kenhall.html') {
      let content = fs.readFileSync(file, 'utf8');
      
      const regex = /<!-- HEADER -->[\s\S]*?<\/header>/;
      
      if (regex.test(content)) {
          content = content.replace(regex, newHeader);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Updated header in ${file}`);
      } else {
          console.log(`No header found in ${file}`);
      }
    }
  });
});
