var bigInteger = require('big-integer');

const utils = require('./utils');
const findE = utils.findE;
const findD = utils.findD;

//used for keygen
[ p, q ] = utils.randomPrimes();

let m = 1543432;

//one way variable
let n = p * q;

//phi of n
//Answers question: How many numbers between 1 and n share a factor with n
let totient = (p-1) * (q-1);

console.log('totient: ', totient);
console.log('n: ', n);

let e = findE(totient, n);
console.log('e: ', e);
//let d = findD(totient, e);
let d = bigInteger(e).modInv(totient).value;
console.log('d:', d);

const encrypt = (e, n, m) => {
  return bigInteger(m).pow(e).mod(n).value;
};

const decrypt = (d, n, c) => {
  return bigInteger(c).pow(d).mod(n).value;
};


let encrypted = encrypt(e,n, m);

console.log('encrypted: ', encrypted);

let decrypted = decrypt(d,n,encrypted);

console.log('decrypted: ', decrypted);




