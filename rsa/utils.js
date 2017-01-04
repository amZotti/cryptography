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

const MAX = 100000;
const PRIMES = findPrimes(MAX);

const greatestCommonDivisor = (a, b) => {
  if (!b) {
      return a;
  }
  return greatestCommonDivisor(b, a % b);
};

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

const extendedEuclideanGCD = (dividend, divisor) => {
  if (divisor == 0) {
    return {
      x: 1,
      y: 0,
      d: dividend
    };
  }

  let result = extendedEuclideanGCD(divisor, dividend % divisor);
  let x = result.x;
  let y = result.y;
  let d = result.d;

  return {
    x: y,
    y: x-y*Math.floor(dividend/divisor),
    d: d
  };
};

const findD = (totient, e) => {
  let result = extendedEuclideanGCD(totient, e);
  return totient + result.y;
};

const randomPrimes = () => {
  let i = 30 + (Math.random() * 10) >>> 0;
  let p = PRIMES[ i ];
  let q = PRIMES[ i - 1 ];
  return [ p, q ];
};

module.exports = { randomPrimes, findE, findD };
