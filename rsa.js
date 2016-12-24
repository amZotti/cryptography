const utils = require('./utils');
const randomPrime = utils.randomPrime;
const findE = utils.findE;
const findD = utils.findD;

let p = randomPrime();
let q = randomPrime();

//let p = 5;
//let q = 11;
let m = 20;

let n = p * q;


console.log('p: ', p);
console.log('q: ', q);
//totient === phi of n
let totient = (p-1) * (q-1);

let e = findE(totient, n);
let d = findD(totient, e);
const encrypt = (e, n, m) => {
  return Math.pow(m, e) % n;
};

const decrypt = (d, n, c) => {
  return Math.pow(c, d) % n;
};

console.log('totient: ', totient);
console.log('e: ', e);
console.log('d: ', d);

console.log('plaintext: ', m);

let encrypted = encrypt(e,n, m);

console.log('encrypted: ', encrypted);

let decrypted = decrypt(d,n,encrypted);

console.log('decrypted: ', decrypted);




