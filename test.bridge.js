"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "dephall",
              			"path": "dephall/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/dephall.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"dephall": "dephall"
              		}
              	@end-include
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("dephall", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`dephall( [ 1, 2, true, 'hello' ], STRING, 'yeah' )`", function () {
		it("should be equal to [ 'hello' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ 1, 2, true, "hello" ], STRING, "yeah" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["hello"]);

		});
	});

	describe("`dephall( [ 1, 2, 3, true ], STRING, '', 'yeah' )`", function () {
		it("should be equal to [ 'yeah' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ 1, 2, 3, true ], STRING, "", "yeah" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["yeah"]);

		});
	});

	describe("`dephall( [ 1, 2, 3, true, 'yeah', 'ugh' ], [ STRING, OBJECT ], '', 'yeah' )`", function () {
		it("should be equal to [ 'yeah', 'ugh' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ 1, 2, 3, true, "yeah", "ugh" ], [ STRING, OBJECT ], "", "yeah" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["yeah", "ugh"]);

		});
	});

	describe("`dephall( [ 1, 2, 3 ], STRING, '', 123, 'yeah' )`", function () {
		it("should be equal to [ 'yeah' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ 1, 2, 3 ], STRING, "", 123, "yeah" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), ["yeah"]);

		});
	});

	describe("`dephall( [ [ 1, 2, 3 ] ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ [ 1, 2, 3 ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [[1, 2, 3]]);

		});
	});

	describe("`dephall( [ 'hello' ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ [ 1, 2, 3 ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [[1, 2, 3]]);

		});
	});

	describe("`dephall( [ 1, 2, 3, 4, { 'hello': 'world' } ], OBJECT, { } )`", function () {
		it("should be equal to [ { 'hello': 'world' } ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( dephall( [ 1, 2, 3, 4, { "hello": "world" } ], OBJECT, { } ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.deepEqual(JSON.parse(result), [{ "hello": "world" }]);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxzREFBVixFQUFrRSxZQUFPO0FBQ3hFSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsT0FBRixDQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBUixVQUFVLG9EQUFWLEVBQWdFLFlBQU87QUFDdEVJLEtBQUksK0JBQUosRUFBcUMsWUFBTztBQUMzQztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxNQUFGLENBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFSLFVBQVUsK0VBQVYsRUFBMkYsWUFBTztBQUNqR0ksS0FBSSxzQ0FBSixFQUE0QyxZQUFPO0FBQ2xEO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLE1BQUYsRUFBVSxLQUFWLENBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFSLFVBQVUsbURBQVYsRUFBK0QsWUFBTztBQUNyRUksS0FBSSwrQkFBSixFQUFxQyxZQUFPO0FBQzNDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLE1BQUYsQ0FBeEM7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQVIsVUFBVSxtRUFBVixFQUErRSxZQUFPO0FBQ3JGSSxLQUFJLG9DQUFKLEVBQTBDLFlBQU87QUFDaEQ7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZQyxNQUFaLENBQWxCLEVBQXdDLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRixDQUF4Qzs7QUFFQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBUixVQUFVLCtEQUFWLEVBQTJFLFlBQU87QUFDakZJLEtBQUksb0NBQUosRUFBMEMsWUFBTztBQUNoRDtBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxTQUFQLENBQWtCQyxLQUFLQyxLQUFMLENBQVlDLE1BQVosQ0FBbEIsRUFBd0MsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFGLENBQXhDOztBQUVBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFSLFVBQVUsZ0VBQVYsRUFBNEUsWUFBTztBQUNsRkksS0FBSSw2Q0FBSixFQUFtRCxZQUFPO0FBQ3pEO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLFNBQVAsQ0FBa0JDLEtBQUtDLEtBQUwsQ0FBWUMsTUFBWixDQUFsQixFQUF3QyxDQUFFLEVBQUUsU0FBUyxPQUFYLEVBQUYsQ0FBeEM7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQSxDQWxJRDs7QUFvSUEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlcGhhbGxcIixcblx0XHRcdFwicGF0aFwiOiBcImRlcGhhbGwvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlcGhhbGwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImRlcGhhbGxcIjogXCJkZXBoYWxsXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiZGVwaGFsbFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgZGVwaGFsbCggWyAxLCAyLCB0cnVlLCAnaGVsbG8nIF0sIFNUUklORywgJ3llYWgnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hlbGxvJyBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBkZXBoYWxsKCBbIDEsIDIsIHRydWUsIFwiaGVsbG9cIiBdLCBTVFJJTkcsIFwieWVhaFwiICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgXCJoZWxsb1wiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIDEsIDIsIDMsIHRydWUgXSwgU1RSSU5HLCAnJywgJ3llYWgnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ3llYWgnIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIGRlcGhhbGwoIFsgMSwgMiwgMywgdHJ1ZSBdLCBTVFJJTkcsIFwiXCIsIFwieWVhaFwiICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgXCJ5ZWFoXCIgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlcGhhbGwoIFsgMSwgMiwgMywgdHJ1ZSwgJ3llYWgnLCAndWdoJyBdLCBbIFNUUklORywgT0JKRUNUIF0sICcnLCAneWVhaCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAneWVhaCcsICd1Z2gnIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIGRlcGhhbGwoIFsgMSwgMiwgMywgdHJ1ZSwgXCJ5ZWFoXCIsIFwidWdoXCIgXSwgWyBTVFJJTkcsIE9CSkVDVCBdLCBcIlwiLCBcInllYWhcIiApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwieWVhaFwiLCBcInVnaFwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIDEsIDIsIDMgXSwgU1RSSU5HLCAnJywgMTIzLCAneWVhaCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAneWVhaCcgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggZGVwaGFsbCggWyAxLCAyLCAzIF0sIFNUUklORywgXCJcIiwgMTIzLCBcInllYWhcIiApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIFwieWVhaFwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIFsgMSwgMiwgMyBdIF0sIEFycmF5LCAnJywgMTIzLCAneWVhaCcsIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyAxLCAyLCAzIF0gXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggZGVwaGFsbCggWyBbIDEsIDIsIDMgXSBdLCBBcnJheSwgXCJcIiwgMTIzLCBcInllYWhcIiwgWyAxLCAyLCAzIF0gKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQgKSwgWyBbIDEsIDIsIDMgXSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVwaGFsbCggWyAnaGVsbG8nIF0sIEFycmF5LCAnJywgMTIzLCAneWVhaCcsIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyAxLCAyLCAzIF0gXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggZGVwaGFsbCggWyBcImhlbGxvXCIgXSwgQXJyYXksIFwiXCIsIDEyMywgXCJ5ZWFoXCIsIFsgMSwgMiwgMyBdICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIFsgWyAxLCAyLCAzIF0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlcGhhbGwoIFsgMSwgMiwgMywgNCwgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSwgT0JKRUNULCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyB7ICdoZWxsbyc6ICd3b3JsZCcgfSBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBkZXBoYWxsKCBbIDEsIDIsIDMsIDQsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdLCBPQkpFQ1QsIHsgfSApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdCApLCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
