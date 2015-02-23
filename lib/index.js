/**
*
*	VALIDATE: nonpositive-integer
*
*
*	DESCRIPTION:
*		- Validates if a value is a nonpositive integer.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


// IS NONPOSITIVE INTEGER //

/**
* FUNCTION: isNonPositiveInteger( value )
*	Validates if a value is a nonpositive integer.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a nonpositive integer
*/
function isNonPositiveInteger( value ) {
	return isInteger( value ) && value <= 0;
} // end FUNCTION isNonPositiveInteger()


// EXPORTS //

module.exports = isNonPositiveInteger;
