const fs = require('fs');
const path = require('path');

const exclude = [
    'invoices-tools', 'store-tools', 'products-tools', 'payments-tools',
    'location-tools', 'social-media-tools', 'survey-tools', 'blog-tools'
  ];

// Patch server files: comment out lines referencing excluded tools
const serverFiles = ['src/server.ts', 'src/http-server.ts'];
serverFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    const c = fs.readFileSync(f, 'utf8');
    const lines = c.split('\n');
    let count = 0;
    const patched = lines.map(line => {
          const lower = line.toLowerCase();
          const shouldExclude = exclude.some(ex =>
                  lower.includes(ex.replace(/-/g, '_')) ||
                  lower.includes(ex) ||
                  lower.includes(ex.replace('-tools', ''))
                                                 );
          if (shouldExclude) {
                  count++;
                  return '// EXCLUDED: ' + line;
          }
          return line;
    });
    fs.writeFileSync(f, patched.join('\n'));
    console.log('Patched ' + f + ': commented out ' + count + ' lines');
});

// Gut the excluded tool files
const toolsDir = 'src/tools';
if (fs.existsSync(toolsDir)) {
    fs.readdirSync(toolsDir).forEach(file => {
          const lower = file.toLowerCase().replace(/-/g, '').replace(/_/g, '');
          const match = exclude.some(e => lower.includes(e.replace(/-/g, '')));
          if (match) {
                  const p = path.join(toolsDir, file);
                  fs.writeFileSync(p, '// EXCLUDED\nexport function registerTools() {}\nexport default {};\n');
                  console.log('Gutted ' + p);
          }
    });
}

console.log('Patch complete');
