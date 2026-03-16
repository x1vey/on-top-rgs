const fs = require('fs');
const path = require('path');

const newHeader = fs.readFileSync('new_header.html', 'utf8');
const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  files.forEach(function (file) {
    if (['about.html', 'join.html', 'membership.html'].includes(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      const regex = /<header class="site-header">[\s\S]*?<\/header>/;
      
      if (regex.test(content)) {
          content = content.replace(regex, newHeader);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Updated header in ${file}`);
      } else {
          console.log(`No header matching regex found in ${file}`);
      }
    }
  });
});
