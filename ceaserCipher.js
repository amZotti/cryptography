
const bitwiseLeft = (a,b) => a << b

const bitwiseRight = (a,b) => a >> b

const ceaserFactory = (bitwiseOperation) =>
    (key, str) => str.split('').map((char) =>
        String.fromCharCode(bitwiseOperation(char.charCodeAt(), key))).join('');

const ceaserEncrypt = ceaserFactory(bitwiseLeft);
const ceaserDecrypt = ceaserFactory(bitwiseRight);

let key = 1;
let str = 'omg hey there';

let cipher = ceaserEncrypt(key, str);

console.log('cipher: ', cipher);

let plaintext = ceaserDecrypt(key, cipher);

console.log('plaintext: ', plaintext);
