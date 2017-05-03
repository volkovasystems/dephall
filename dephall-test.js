"use strict";

const assert = require( "assert" );
const dephall = require( "./dephall.js" );

assert.deepEqual( dephall( [ 1, 2, true, "hello" ], STRING, "yeah" ), [ "hello" ] );
assert.deepEqual( dephall( [ 1, 2, 3, true ], STRING, "", "yeah" ), [ "yeah" ] );
assert.deepEqual( dephall( [ 1, 2, 3, true, "yeah", "ugh" ], [ STRING, OBJECT ], "", "yeah" ), [ "yeah", "ugh" ] );
assert.deepEqual( dephall( [ 1,2,3 ], STRING, "", 123, "yeah" ), [ "yeah" ] );
assert.deepEqual( dephall( [ 1,2,3 ], Array, "", 123, "yeah", [1,2,3] ), [ [ 1, 2, 3 ] ] );

console.log( "ok" );
