function textToHex(text) {
    return Buffer.from(text, 'utf8').toString('hex');
}
module.exports = {
    textToHex,
    generateRandHexEncodedNamespaceID
}

// 1c415d6dab9d0f46
// a994bc4dde53e400
function generateRandHexEncodedNamespaceID() {
    const array = new Uint8Array(8);
    crypto.getRandomValues(array);
    return Array.from(array)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

console.log(generateRandHexEncodedNamespaceID());
