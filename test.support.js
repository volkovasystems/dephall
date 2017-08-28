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



//: @client:
var dephall = require("./dephall.support.js");
//: @end-client







//: @client:

describe("dephall", function () {

	describe("`dephall( [ 1, 2, true, 'hello' ], STRING, 'yeah' )`", function () {
		it("should be equal to [ 'hello' ]", function () {

			assert.deepEqual(dephall([1, 2, true, "hello"], STRING, "yeah"), ["hello"]);

		});
	});

	describe("`dephall( [ 1, 2, 3, true ], STRING, '', 'yeah' )`", function () {
		it("should be equal to [ 'yeah' ]", function () {

			assert.deepEqual(dephall([1, 2, 3, true], STRING, "", "yeah"), ["yeah"]);

		});
	});

	describe("`dephall( [ 1, 2, 3, true, 'yeah', 'ugh' ], [ STRING, OBJECT ], '', 'yeah' )`", function () {
		it("should be equal to [ 'yeah', 'ugh' ]", function () {

			assert.deepEqual(dephall([1, 2, 3, true, "yeah", "ugh"], [STRING, OBJECT], "", "yeah"), ["yeah", "ugh"]);

		});
	});

	describe("`dephall( [ 1, 2, 3 ], STRING, '', 123, 'yeah' )`", function () {
		it("should be equal to [ 'yeah' ]", function () {

			assert.deepEqual(dephall([1, 2, 3], STRING, "", 123, "yeah"), ["yeah"]);

		});
	});

	describe("`dephall( [ [ 1, 2, 3 ] ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ [ 1, 2, 3 ] ]", function () {

			assert.deepEqual(dephall([[1, 2, 3]], Array, "", 123, "yeah", [1, 2, 3]), [[1, 2, 3]]);

		});
	});

	describe("`dephall( [ 'hello' ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ [ 1, 2, 3 ] ]", function () {

			assert.deepEqual(dephall(["hello"], Array, "", 123, "yeah", [1, 2, 3]), [[1, 2, 3]]);

		});
	});

	describe("`dephall( [ 1, 2, 3, 4, { 'hello': 'world' } ], OBJECT, { } )`", function () {
		it("should be equal to [ { 'hello': 'world' } ]", function () {

			assert.deepEqual(dephall([1, 2, 3, 4, { "hello": "world" }], OBJECT, {}), [{ "hello": "world" }]);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVwaGFsbCIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJTVFJJTkciLCJPQkpFQ1QiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsc0RBQVYsRUFBa0UsWUFBTztBQUN4RUMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssU0FBUCxDQUFrQkgsUUFBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsSUFBUixFQUFjLE9BQWQsQ0FBVCxFQUFrQ0ksTUFBbEMsRUFBMEMsTUFBMUMsQ0FBbEIsRUFBc0UsQ0FBRSxPQUFGLENBQXRFOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSCxVQUFVLG9EQUFWLEVBQWdFLFlBQU87QUFDdEVDLEtBQUksK0JBQUosRUFBcUMsWUFBTzs7QUFFM0NKLFVBQU9LLFNBQVAsQ0FBa0JILFFBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxJQUFYLENBQVQsRUFBNEJJLE1BQTVCLEVBQW9DLEVBQXBDLEVBQXdDLE1BQXhDLENBQWxCLEVBQW9FLENBQUUsTUFBRixDQUFwRTs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUgsVUFBVSwrRUFBVixFQUEyRixZQUFPO0FBQ2pHQyxLQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRWxESixVQUFPSyxTQUFQLENBQWtCSCxRQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsSUFBWCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixDQUFULEVBQTJDLENBQUVJLE1BQUYsRUFBVUMsTUFBVixDQUEzQyxFQUErRCxFQUEvRCxFQUFtRSxNQUFuRSxDQUFsQixFQUErRixDQUFFLE1BQUYsRUFBVSxLQUFWLENBQS9GOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSixVQUFVLG1EQUFWLEVBQStELFlBQU87QUFDckVDLEtBQUksK0JBQUosRUFBcUMsWUFBTzs7QUFFM0NKLFVBQU9LLFNBQVAsQ0FBa0JILFFBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVCxFQUFzQkksTUFBdEIsRUFBOEIsRUFBOUIsRUFBa0MsR0FBbEMsRUFBdUMsTUFBdkMsQ0FBbEIsRUFBbUUsQ0FBRSxNQUFGLENBQW5FOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSCxVQUFVLG1FQUFWLEVBQStFLFlBQU87QUFDckZDLEtBQUksb0NBQUosRUFBMEMsWUFBTzs7QUFFaERKLFVBQU9LLFNBQVAsQ0FBa0JILFFBQVMsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFGLENBQVQsRUFBMEJNLEtBQTFCLEVBQWlDLEVBQWpDLEVBQXFDLEdBQXJDLEVBQTBDLE1BQTFDLEVBQWtELENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWxELENBQWxCLEVBQW1GLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRixDQUFuRjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUwsVUFBVSwrREFBVixFQUEyRSxZQUFPO0FBQ2pGQyxLQUFJLG9DQUFKLEVBQTBDLFlBQU87O0FBRWhESixVQUFPSyxTQUFQLENBQWtCSCxRQUFTLENBQUUsT0FBRixDQUFULEVBQXNCTSxLQUF0QixFQUE2QixFQUE3QixFQUFpQyxHQUFqQyxFQUFzQyxNQUF0QyxFQUE4QyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUE5QyxDQUFsQixFQUErRSxDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUYsQ0FBL0U7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFMLFVBQVUsZ0VBQVYsRUFBNEUsWUFBTztBQUNsRkMsS0FBSSw2Q0FBSixFQUFtRCxZQUFPOztBQUV6REosVUFBT0ssU0FBUCxDQUFrQkgsUUFBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxFQUFFLFNBQVMsT0FBWCxFQUFkLENBQVQsRUFBK0NLLE1BQS9DLEVBQXVELEVBQXZELENBQWxCLEVBQWdGLENBQUUsRUFBRSxTQUFTLE9BQVgsRUFBRixDQUFoRjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQTFERDs7QUE0REEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZXBoYWxsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZXBoYWxsL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZXBoYWxsLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJkZXBoYWxsXCI6IFwiZGVwaGFsbFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZGVwaGFsbCA9IHJlcXVpcmUoIFwiLi9kZXBoYWxsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJkZXBoYWxsXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGRlcGhhbGwoIFsgMSwgMiwgdHJ1ZSwgJ2hlbGxvJyBdLCBTVFJJTkcsICd5ZWFoJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdoZWxsbycgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoYWxsKCBbIDEsIDIsIHRydWUsIFwiaGVsbG9cIiBdLCBTVFJJTkcsIFwieWVhaFwiICksIFsgXCJoZWxsb1wiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIDEsIDIsIDMsIHRydWUgXSwgU1RSSU5HLCAnJywgJ3llYWgnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ3llYWgnIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZGVwaGFsbCggWyAxLCAyLCAzLCB0cnVlIF0sIFNUUklORywgXCJcIiwgXCJ5ZWFoXCIgKSwgWyBcInllYWhcIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVwaGFsbCggWyAxLCAyLCAzLCB0cnVlLCAneWVhaCcsICd1Z2gnIF0sIFsgU1RSSU5HLCBPQkpFQ1QgXSwgJycsICd5ZWFoJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICd5ZWFoJywgJ3VnaCcgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoYWxsKCBbIDEsIDIsIDMsIHRydWUsIFwieWVhaFwiLCBcInVnaFwiIF0sIFsgU1RSSU5HLCBPQkpFQ1QgXSwgXCJcIiwgXCJ5ZWFoXCIgKSwgWyBcInllYWhcIiwgXCJ1Z2hcIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVwaGFsbCggWyAxLCAyLCAzIF0sIFNUUklORywgJycsIDEyMywgJ3llYWgnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ3llYWgnIF1cIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZGVwaGFsbCggWyAxLCAyLCAzIF0sIFNUUklORywgXCJcIiwgMTIzLCBcInllYWhcIiApLCBbIFwieWVhaFwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIFsgMSwgMiwgMyBdIF0sIEFycmF5LCAnJywgMTIzLCAneWVhaCcsIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyAxLCAyLCAzIF0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoYWxsKCBbIFsgMSwgMiwgMyBdIF0sIEFycmF5LCBcIlwiLCAxMjMsIFwieWVhaFwiLCBbIDEsIDIsIDMgXSApLCBbIFsgMSwgMiwgMyBdIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbICdoZWxsbycgXSwgQXJyYXksICcnLCAxMjMsICd5ZWFoJywgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBbIDEsIDIsIDMgXSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlcGhhbGwoIFsgXCJoZWxsb1wiIF0sIEFycmF5LCBcIlwiLCAxMjMsIFwieWVhaFwiLCBbIDEsIDIsIDMgXSApLCBbIFsgMSwgMiwgMyBdIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoYWxsKCBbIDEsIDIsIDMsIDQsIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IF0sIE9CSkVDVCwgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoYWxsKCBbIDEsIDIsIDMsIDQsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdLCBPQkpFQ1QsIHsgfSApLCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
