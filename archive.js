const fs = require('fs');
const archiver = require('archiver');
const {TARGET, DIST} = require("./config");

const date = new Date();
const today = date
    .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    .split("/")
    .join("-");
const archiveName = `${today}_${TARGET}.zip`

console.log('begin building ' + archiveName + '...');

const output = fs.createWriteStream(__dirname + `/${archiveName}`);
const archive = archiver('zip', {
    zlib: { level: 0 }
});

output.on('close', function() {
    console.log(archiveName + ' successfully exported, which contains ' + archive.pointer() + ' bytes.');
});

output.on('end', function() {
    console.log('Data has been drained');
});

archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
        // log warning
    } else {
        // throw error
        throw err;
    }
});

archive.on('error', function(err) {
    throw err;
});

archive.pipe(output);
archive.directory(`${DIST}/`, false);
archive.finalize();
