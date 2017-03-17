"use strict";

const dephall = require( "./dephall.js" );

console.log( dephall( [ 1, 2, true, "hello" ], STRING, "yeah" ) );
console.log( dephall( [ 1, 2, 3, true ], STRING, "", "yeah" ) );
console.log( dephall( [ 1, 2, 3, true, "yeah", "ugh" ], [ STRING, OBJECT ], "", "yeah" ) );
