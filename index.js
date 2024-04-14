const fs = require('fs');
const {IGNORE_FILES, CATEGORY, SRC, DIST, TARGET} = require("./config");
const emojis = [];

/**
 * ファイル名のみを取得
 * @param file
 * @returns {*|string}
 */
function getFileName(file) {
    const regex = /(.*)\..*/;
    const result = file.match(regex);
    if(result) {
        return file.match(regex)[1] || "";
    }
    return null;
}

const files = fs.readdirSync([SRC, TARGET].join('/'));
files.forEach((file) => {
    if(IGNORE_FILES.includes(file)) {
        return;
    }

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

    if(!emoji.emoji.name) {
        return;
    }

    emojis.push(emoji);
    fs.copyFileSync([SRC, TARGET, file].join('/'), [DIST, filename].join('/'));
});



const meta = {
    "metaVersion": 2,
    emojis
}
console.log(JSON.stringify(meta));
