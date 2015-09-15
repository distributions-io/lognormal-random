'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, mu, sigma[, rand] )
*	Creates an array of Lognormal distributed random variates.
*
* @param {Number} len - array length
* @param {Number} mu - location parameter
* @param {Number} sigma - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with Lognormal random variates
*/
function random( len, mu, sigma, rand ) {
	var out,
		draw,
		i;

	draw = partial( mu, sigma, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
