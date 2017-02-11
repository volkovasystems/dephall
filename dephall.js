"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "dephall",
			"path": "dephall/dephall.js",
			"file": "dephall.js",
			"module": "dephall",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/dephall.git",
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
		Extract all designated parameter and default to a given value if undefined.

		Note that this will only extract truthy values.

		If the result contains single element then it will return that element.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"doubt": "doubt",
			"falze": "falze",
			"falzy": "falzy",
			"harden": "harden",
			"pyck": "pyck",
			"zelf": "zelf"
		}
	@end-include

	@global-constant:
		{
			"BOOLEAN": "boolean",
			"FUNCTION": "function",
			"NUMBER": "number",
			"OBJECT": "object",
			"STRING": "string",
			"UNDEFINED": "undefined",
			"SYMBOL": "symbol"
		}
	@end-global-constant
*/

const arid = require( "arid" );
const doubt = require( "doubt" );
const falze = require( "falze" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const pyck = require( "pyck" );
const zelf = require( "zelf" );

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const dephall = function dephall( list, condition, defer ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function",
					BOOLEAN,
					FUNCTION,
					NUMBER,
					OBJECT,
					STRING,
					UNDEFINED,
					SYMBOL,
					"[string, function]"
				],
				"defer:required": "*"
			}
		@end-meta-configuration
	*/

	if( !doubt( list, AS_ARRAY ) ){
		throw new Error( "invalid list" );
	}

	if( falze( condition ) ){
		throw new Error( "invalid condition" );
	}

	if( falzy( defer ) ){
		throw new Error( "defer value not give" );
	}

	let self = zelf( this );

	let result = pyck.bind( self )( list, condition, true );

	if( arid( result ) ){
		return defer;

	}else if( result.length == 1 ){
		return result[ 0 ];

	}else{
		return result;
	}
};

module.exports = dephall;
