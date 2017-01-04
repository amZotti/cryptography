const bigInteger = require('big-integer');
const utils = require('./utils');
const findE = utils.findE;
const findD = utils.findD;

const encrypt = (e, n, m) => {
  return bigInteger(m).pow(e).mod(n).value;
};

const decrypt = (d, n, c) => {
  return bigInteger(c).pow(d).mod(n).value;
};

const encryptText = (e, n, str) => {
	return Array.prototype.map.call(str, (char) => encrypt(e, n, char.charCodeAt()));
};

const decryptText = (d, n, encryptedCharCodes) => {
	return encryptedCharCodes.reduce((accumulator, encryptedCharCode) => {
		return accumulator + String.fromCharCode(decrypt(d, n, encryptedCharCode));
	}, '');
};

[ p, q ] = utils.randomPrimes();

let n = p * q;
let totient = (p-1) * (q-1);

let e = findE(totient, n);
let d = bigInteger(e).modInv(totient).value;

//m = message that will be encrypted/decrypted
var m = 'works';

let encrypted = encryptText(e, n, m);

console.log('encrypted: ', encrypted);

let decrypted = decryptText(d, n, encrypted);

console.log('decrypted: ', decrypted);
