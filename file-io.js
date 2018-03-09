var fs = require('fs');
try {
let data = fs.readFileSync('file-io.json', 'utf8')
process.stdout.write(data);
} catch(e) {
    process.stdout.write('whoops', e);
}