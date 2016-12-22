/*
 *
 * d === private key
 *  -Used for decryption
 *
 * e === public key
 *  -Used for encryption
 *
 * p === plaintext
 *
 * c === ciphertext
 *
 *
 * Encryption algorithm
 *  C = P^e mod n
 *
 *
 * Decryption algorithm
 *  P = C^d mod n
 *
 * Encryption and decrytion are inverses of each other, where the plaintext and ciphertext swap places accordingly
 */


const findPrimes = (n) => {
  var primes = [];
  var composites = new Set();

  for (var i = 2;i < n;i++) {
    if (!composites.has(i)) {
      primes.push(i);

      for (var k = i + i;k < n;k += i) {
        composites.add(k);
      }
    }
  }
  return primes;
}

const psuedoRandom = () => {
    let seed = Date.now() - Math.floor(Math.random() * 1000000000000);
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

const MAX = 100000;
const PRIMES = findPrimes(MAX);

let randomPrime = () => PRIMES[ Math.floor(psuedoRandom() * PRIMES.length) ];

var p = randomPrime();
var q = randomPrime();

console.log(p);
console.log(q);



