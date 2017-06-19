
const assert = require( "assert" );
const dephall = require( "./dephall.js" );

assert.deepEqual( dephall( [ 1, 2, true, "hello" ], STRING, "yeah" ), [ "hello" ], "should be deeply equal" );

assert.deepEqual( dephall( [ 1, 2, 3, true ], STRING, "", "yeah" ), [ "yeah" ], "should be deeply equal" );

assert.deepEqual( dephall( [ 1, 2, 3, true, "yeah", "ugh" ], [ STRING, OBJECT ], "", "yeah" ), [ "yeah", "ugh" ],
 								"should be deeply equal" );

assert.deepEqual( dephall( [ 1, 2, 3 ], STRING, "", 123, "yeah" ), [ "yeah" ], "should be deeply equal" );

assert.deepEqual( dephall( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ [ 1, 2, 3 ] ], "should be deeply equal" );

assert.deepEqual( dephall( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ [ 1, 2, 3 ] ], "should be deeply equal" );

( function test( ){
	assert.deepEqual( dephall( arguments, OBJECT, { } ), [ { } ], "should be deeply equal" );
} )( 1, 2, 3, 4 );

( function test( ){
	assert.deepEqual( dephall( arguments, OBJECT, { } ), [ { "hello": "world" } ], "should be deeply equal" );
} )( 1, 2, 3, 4, { "hello": "world" } );

console.log( "ok" );
