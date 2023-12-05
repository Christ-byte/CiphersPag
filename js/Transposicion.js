function doProcessOnKey(selectedKey) {
    let sortedKey = selectedKey.split('').sort().join('');
    let sortedKeyPos = selectedKey.split('').map((char) => sortedKey.indexOf(char));
    return sortedKeyPos;
}

function doEncryption(plainText, selectedKey) {
    let sortedKeyPos = doProcessOnKey(selectedKey);
    let row = Math.ceil(plainText.length / selectedKey.length);
    let pmat = new Array(row).fill(0).map(() => new Array(selectedKey.length).fill('-'));
    let encry = '';

    for (let i = 0; i < plainText.length; i++) {
        let col = i % selectedKey.length;
        let row = Math.floor(i / selectedKey.length);
        pmat[row][sortedKeyPos[col]] = plainText.charAt(i);
    }

    for (let j = 0; j < selectedKey.length; j++) {
        for (let i = 0; i < row; i++) {
            encry += pmat[i][j] !== '-' ? pmat[i][j] : '';
        }
    }

    return encry;
}

function doDecryption(cipherText, selectedKey) {
    let sortedKeyPos = doProcessOnKey(selectedKey);
    let row = Math.ceil(cipherText.length / selectedKey.length);
    let pmat = new Array(row).fill(0).map(() => new Array(selectedKey.length).fill('-'));
    let decry = '';

    for (let i = 0; i < cipherText.length; i++) {
        let col = i % selectedKey.length;
        let row = Math.floor(i / selectedKey.length);
        pmat[row][col] = cipherText.charAt(i);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < selectedKey.length; j++) {
            decry += pmat[i][sortedKeyPos[j]] !== '-' ? pmat[i][sortedKeyPos[j]] : '';
        }
    }

    return decry;
}

function encrypt() {
    let plainText = document.getElementById('plainText').value;
    let selectedKey = document.getElementById('key').value.toLowerCase();
    let cipherText = doEncryption(plainText, selectedKey);
    document.getElementById('cipherText').innerHTML =  cipherText;
}

function decrypt() {
    let cipherText = document.getElementById('cipherText').innerHTML;
    let selectedKey = document.getElementById('key').value.toLowerCase();
    let decryptedText = doDecryption(cipherText.substring(13), selectedKey);
    document.getElementById('decryptedText').innerHTML = decryptedText;
}