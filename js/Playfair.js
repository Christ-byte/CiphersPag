
function toLowerCase(plain) {
    return plain.toLowerCase();
}


function removeSpaces(plain) {
    return plain.replace(/\s/g, '');
}


function generateKeyTable(key) {
    let keyT = [];
    let dicty = Array(26).fill(0);

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== 'j') {
            dicty[key.charCodeAt(i) - 97] = 2;
        }
    }

    dicty['j'.charCodeAt(0) - 97] = 1;

    let i = 0, j = 0;
    for (let k = 0; k < key.length; k++) {
        if (dicty[key.charCodeAt(k) - 97] === 2) {
            dicty[key.charCodeAt(k) - 97] -= 1;
            if (!keyT[i]) keyT[i] = [];
            keyT[i][j] = key[k];
            j++;
            if (j === 5) {
                i++;
                j = 0;
            }
        }
    }

    for (let k = 0; k < 26; k++) {
        if (dicty[k] === 0) {
            if (!keyT[i]) keyT[i] = [];
            keyT[i][j] = String.fromCharCode(k + 97);
            j++;
            if (j === 5) {
                i++;
                j = 0;
            }
        }
    }

    return keyT;
}


function search(keyT, a, b) {
    let arr = new Array(4).fill(0);

    if (a === 'j') a = 'i';
    else if (b === 'j') b = 'i';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (keyT[i][j] === a) {
                arr[0] = i;
                arr[1] = j;
            } else if (keyT[i][j] === b) {
                arr[2] = i;
                arr[3] = j;
            }
        }
    }

    return arr;
}


function mod5(a) {
    return (a % 5);
}


function prepare(str) {
    if (str.length % 2 !== 0) {
        str += 'z';
    }
    return str;
}


function encrypt(str, keyT) {
    let result = '';

    for (let i = 0; i < str.length; i += 2) {
        let a = search(keyT, str[i], str[i + 1]);

        if (a[0] === a[2]) {
            result += keyT[a[0]][mod5(a[1] + 1)] + keyT[a[0]][mod5(a[3] + 1)];
        } else if (a[1] === a[3]) {
            result += keyT[mod5(a[0] + 1)][a[1]] + keyT[mod5(a[2] + 1)][a[1]];
        } else {
            result += keyT[a[0]][a[3]] + keyT[a[2]][a[1]];
        }
    }

    return result;
}

function encryptByPlayfairCipher(str, key) {
  
    key = removeSpaces(key);
    key = toLowerCase(key);

 
    str = removeSpaces(str);
    str = toLowerCase(str);
    str = prepare(str);

    let keyT = generateKeyTable(key);

    return encrypt(str, keyT);
}
function Cifrado() {
    
    let inputText = document.getElementById("inputText").value;
    let key = document.getElementById("key").value;
    let result = document.getElementById("result");

    
    let mensajeCifrado = encryptByPlayfairCipher(inputText, key);

   
    result.value = mensajeCifrado.toUpperCase();
}