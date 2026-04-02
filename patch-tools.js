const fs = require('fs');
const path = require('path');

// Excluded tool file basenames (without .ts)
const excludeFiles = [
        'invoices-tools', 'store-tools', 'products-tools', 'payments-tools',
        'location-tools', 'social-media-tools', 'survey-tools', 'blog-tools'
    ];

// Class names that correspond to excluded tools
const excludeClasses = [
        'InvoicesTools', 'StoreTools', 'ProductsTools', 'PaymentsTools',
        'LocationTools', 'SocialMediaTools', 'SurveyTools', 'BlogTools'
    ];

// Module registration names used in addModule calls
const excludeModules = [
        'invoices', 'store', 'products', 'payments',
        'location', 'socialMedia', 'surveys', 'blog'
    ];

// ---- Step 1: Patch tool-registry.ts ----
const registryFile = 'src/tool-registry.ts';
if (fs.existsSync(registryFile)) {
        let content = fs.readFileSync(registryFile, 'utf8');
        const lines = content.split('\n');
        let count = 0;
        const patched = lines.map(line => {
                    const trimmed = line.trim();
                    // Skip already commented lines
                                          if (trimmed.startsWith('//')) return line;

                                          // Comment out import lines for excluded tool files
                                          if (trimmed.startsWith('import') && excludeFiles.some(f => line.includes(f))) {
                                                          count++;
                                                          return '// EXCLUDED: ' + line;
                                          }
                    // Comment out "const xxx = new ExcludedTools(ghl);" lines
                                          if (trimmed.startsWith('const') && excludeClasses.some(c => line.includes('new ' + c))) {
                                                          count++;
                                                          return '// EXCLUDED: ' + line;
                                          }
                    // Comment out "this.addModule('name', ...)" lines for excluded modules
                                          if (trimmed.startsWith('this.addModule') && excludeModules.some(m => line.includes("'" + m + "'"))) {
                                                          count++;
                                                          return '// EXCLUDED: ' + line;
                                          }
                    return line;
        });
        fs.writeFileSync(registryFile, patched.join('\n'));
        console.log('Patched ' + registryFile + ': commented out ' + count + ' lines');
} else {
        console.log('WARNING: ' + registryFile + ' not found');
}

// ---- Step 2: Gut excluded tool files ----
const toolsDir = 'src/tools';
if (fs.existsSync(toolsDir)) {
        fs.readdirSync(toolsDir).forEach(file => {
                    const base = file.replace(/\.ts$/, '');
                    if (excludeFiles.includes(base)) {
                                    const filePath = path.join(toolsDir, file);
                                    // Find the class name from our mapping
                        const idx = excludeFiles.indexOf(base);
                                    const className = excludeClasses[idx];
                                    // Replace with empty stub class
                        const stub = '// EXCLUDED\nexport class ' + className + ' {\n  constructor(_ghl: any) {}\n  getTools() { return []; }\n  getToolDefinitions() { return []; }\n  executeTool() { return Promise.resolve({}); }\n  handleToolCall() { return Promise.resolve({}); }\n}\nexport default {};\n';
                                    fs.writeFileSync(filePath, stub);
                                    console.log('Gutted ' + filePath);
                    }
        });
} else {
        console.log('WARNING: ' + toolsDir + ' not found');
}

console.log('Patch complete.');
