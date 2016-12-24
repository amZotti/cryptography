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
};

const psuedoRandom = () => {
    let seed = Date.now() - Math.floor(Math.random() * 1000000000000);
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

const MAX = 100000;
const PRIMES = findPrimes(MAX);

const greatestCommonDivisor = (a, b) => {
  if (!b) {
      return a;
  }
  return greatestCommonDivisor(b, a % b);
};


//e must be odd
//e cannot share a factor with totient
const findE = (totient, n) => {
  let i = 1, prime;

  do {
    prime = PRIMES[ i ];
    i++;
  } while(greatestCommonDivisor(prime, totient) !== 1);

  if (prime >= n) {
    throw new Error('Prime too big');
  }

  return prime;
}

const findD = (totient, e) => {
  let result, d = 0;

  while (result !== 1) {
    d++;
    result = (d * e) % totient;
  }

  return d;

};

//const randomPrime = () => PRIMES[ Math.floor(psuedoRandom() * PRIMES.length) ];
const randomPrime = () => PRIMES[ ~~(Math.random() * 10) ];

module.exports = { randomPrime, findE, findD };
