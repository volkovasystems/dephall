
const assert = require( "assert" );
const dephall = require( "./dephall.js" );

assert.deepEqual( dephall( [ 1, 2, true, "hello" ], STRING, "yeah" ), [ "hello" ], "should be equal to [ 'hello' ]" );

assert.deepEqual( dephall( [ 1, 2, 3, true ], STRING, "", "yeah" ), [ "yeah" ], "should be equal to [ 'yeah' ]" );

assert.deepEqual( dephall( [ 1, 2, 3, true, "yeah", "ugh" ], [ STRING, OBJECT ], "", "yeah" ), [ "yeah", "ugh" ],
 								"should be equal to [ 'yeah', 'ugh' ]" );

assert.deepEqual( dephall( [ 1, 2, 3 ], STRING, "", 123, "yeah" ), [ "yeah" ], "should be equal to [ 'yeah' ]" );

assert.deepEqual( dephall( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ),
	[ [ 1, 2, 3 ] ], "should be equal to [ [ 1, 2, 3 ] ]" );

assert.deepEqual( dephall( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ),
	[ [ 1, 2, 3 ] ], "should be equal to [ [ 1, 2, 3 ] ]" );

( function test( ){
	assert.deepEqual( dephall( arguments, OBJECT, { } ), [ { } ], "should be equal to [ { } ]" );
} )( 1, 2, 3, 4 );

( function test( ){
	assert.deepEqual( dephall( arguments, OBJECT, { } ), [ { "hello": "world" } ], "should be equal to [ { 'hello': 'world' } ]" );
} )( 1, 2, 3, 4, { "hello": "world" } );

console.log( "ok" );
