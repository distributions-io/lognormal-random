'use strict';

// MODULES //

var randNorm = require( 'distributions-normal-random/lib/number.js' );


// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( mu, sigma[, rand] )
*	Partially applies `mu` and `sigma` and returns a function
*	to generate random variables from the Lognormal distribution.
*
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( mu, sigma, rand ) {
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a Lognormal distribution with parameters `mu` and `sigma`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		return exp( randNorm( mu, sigma, rand ) );
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
