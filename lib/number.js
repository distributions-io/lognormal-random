'use strict';

// MODULES //

var randNorm = require( 'distributions-normal-random/lib/number.js' );


// FUNCTIONS //

var exp = Math.exp;


// GENERATE LOGNORMAL RANDOM NUMBERS //

/**
* FUNCTION random( mu, sigma[, rand] )
*	Generates a random draw from a Lognormal distribution
*	with parameters `mu` and `sigma`.
*
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( mu, sigma, rand ) {
	return exp( randNorm( mu, sigma, rand ) );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
