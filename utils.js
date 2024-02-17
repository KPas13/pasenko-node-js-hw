function generateHash(strLength) {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';

    for (let i = 0; i < strLength; i++) {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        str += symbols[randomIndex];
    }

    return str;
}

module.exports = {
    generateHash
}