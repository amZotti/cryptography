/*
  a - 30
  b - 65

  factors of a:
  - 2, 3, 5, 6, 10, 15

  factors of b:
  - 5,

  a and b are not coprimes because they have a common factor of 5

  47, 5 - coprime


  Rule: if one of the numbers is prime, then any other number that is less than it MUST be coprime

  47, 94 - not coprime

  12, 23

  factors of 12:
    - 1, 2, 3, 4, 6

  factors of 23:
    - 1

    12 and 23 are coprime because they share no common factors since 23 has no factors other than 1 because it is a prime number


  are 13 and 24 coprime?


  factors of 13:

    - 1

  Factors of 24:
    - 1, 2, 4, 6, 12, 24


    [1, 24]
    [1, 2, 12, 24]
    [1, 2, 4, 6, 12, 24]

  13 and 24 are coprime because they share no common factors


  ARe 14, and 25 coprime?

  factors of 14:

  - 1

  factors of 25:

  - 1, 5,

  14 and 25 are coprime because they share no common factors

  ARe 15 and 26 coprime?

  factors of 15:

    - 1, 3, 5,

  */

Array.prototype.insert = function(index, val) {
  this.splice(index, 0, val);
};

function findFactors(n) {
  var factors = [];
  var limit = n;

  var j = 0;

  for (var i = 1;i < limit;i++) {
    var factor = n/i;
    if (factor === (factor >>> 0)) {
      limit = factor;
      factors.insert(j, i);
      factors.insert(j + 1, factor);
      j++;
    }
  }
  return factors;
}

function recursiveEuclideanGCD(dividend,divisor) {

  if (divisor === 0) {
    return dividend;
  }

  return recursiveEuclideanGCD(divisor, dividend % divisor);
}

function euclideanGCD(dividend,divisor) {
  var remainder = Number.POSITIVE_INFINITY;

  while (remainder > 0) {
    remainder = dividend % divisor;
    quotient = (dividend / divisor) >>> 0;

    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
}

function commonFactors(a, b) {
  var aFactors = findFactors(a);
  var bFactors = findFactors(b);

  var set, iterators;

  if (a > b) {
    set = new Set(bFactors);
    iterators = aFactors;
  } else {
    set = new Set(aFactors);
    iterators = bFactors;
  }

  return iterators.filter(function(factor) {
    return factor !== 1 && set.has(factor);
  });
}

function isCoprime(a, b) {

  //Only -1 and 1 are coprime to 0
  if (a === 0 || b === 0) {
    if (a === 1 || b === 1 || a === -1 || b === -1) {
      return true;
    } else {
      return false;
    }
  }

  //Every number is coprime to 1
  if (a === 1 || b === 1) {
    return true;
  }

  return commonFactors(a,b).length === 0;
}

/*
 * areModularInverses() is an alias for isCoprime() since only the numbers coprime to C have modular inverses.
 *
 * Numbers that share no prime factors with C have a modular inverse (mod C)
 *
 * A modular inverse is, as the name implies, the inverse of the modulo operation.
 *
 */

function areModularInverses(a,b) {
  return isComprime(a,b);
}

/*
 * Returns array of all coprimes in range 0 to n
 */

function getCoprimes(n) {
  var results = [];
  for (var i = 0;i < n;i++) {
    if (isCoprime(i, n)) {
      results.push(i);
    }
  }
  return results;
}

function findModularInverse(a,c){
  for (var b = 0;b < c - 1;b++) {
    if((a * b) % c === 1) {
      return b;
    }
  }
  return null;
}

module.exports = { findModularInverse };
