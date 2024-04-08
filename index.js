const fs = require('fs');
const {IGNORE_FILES, CATEGORY, PATH, SRC, DIST} = require("./config");
const emojis = [];

/**
 * ファイル名のみを取得
 * @param file
 * @returns {*|string}
 */
function getFileName(file) {
    const regex = /(.*)\..*/;
    return file.match(regex)[1] || "";
}

const files = fs.readdirSync([SRC, PATH].join('/'));
files.forEach((file) => {
    if(IGNORE_FILES.includes(file)) {
        return;
    }
    // console.log(file);

    const filename = file.replaceAll('-', '_');

    const emoji = {
        "downloaded": true,
        "fileName": filename,
        "emoji": {
            "name": getFileName(filename),
            "category": CATEGORY,
            "aliases": []
        }
    }
    emojis.push(emoji);
    fs.copyFileSync([SRC, PATH, file].join('/'), [DIST, filename].join('/'));
});



const meta = { emojis }
console.log(JSON.stringify(meta));
