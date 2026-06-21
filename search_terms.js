const fs = require('fs');
const path = require('path');

const searchTerms = ['FloatingCart', 'CartButton', 'ShoppingCart', 'BAG(0)'];
const searchDir = __dirname;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.astro' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const results = {};
searchTerms.forEach(term => results[term] = []);

walkDir(searchDir, (filePath) => {
  if (filePath.endsWith('.astro') || filePath.endsWith('.css') || filePath.endsWith('.js') || filePath.endsWith('.ts') || filePath.endsWith('.json')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      searchTerms.forEach(term => {
        if (line.includes(term)) {
          results[term].push({
            file: path.relative(searchDir, filePath),
            line: idx + 1,
            content: line.trim()
          });
        }
      });
    });
  }
});

console.log(JSON.stringify(results, null, 2));
