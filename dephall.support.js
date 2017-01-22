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

var arid = require("arid");
var doubt = require("doubt");
var falze = require("falze");
var falzy = require("falzy");
var harden = require("harden");
var pyck = require("pyck");
var zelf = require("zelf");

harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("NUMBER", "number");
harden("OBJECT", "object");
harden("STRING", "string");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var dephall = function dephall(list, condition, defer) {
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

	if (!doubt(list, AS_ARRAY)) {
		throw new Error("invalid list");
	}

	if (falze(condition)) {
		throw new Error("invalid condition");
	}

	if (falzy(defer)) {
		throw new Error("defer value not give");
	}

	var self = zelf(this);

	var result = pyck.bind(self)(list, condition, true);

	if (arid(result)) {
		return defer;
	} else if (result.length == 1) {
		return result[0];
	} else {
		return result;
	}
};

module.exports = dephall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhhbGwuanMiXSwibmFtZXMiOlsiYXJpZCIsInJlcXVpcmUiLCJkb3VidCIsImZhbHplIiwiZmFsenkiLCJoYXJkZW4iLCJweWNrIiwiemVsZiIsImRlcGhhbGwiLCJsaXN0IiwiY29uZGl0aW9uIiwiZGVmZXIiLCJBU19BUlJBWSIsIkVycm9yIiwic2VsZiIsInJlc3VsdCIsImJpbmQiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjs7QUFFQUksT0FBUSxTQUFSLEVBQW1CLFNBQW5CO0FBQ0FBLE9BQVEsVUFBUixFQUFvQixVQUFwQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFdBQVIsRUFBcUIsV0FBckI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCOztBQUVBLElBQU1HLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLEtBQUksQ0FBQ1QsTUFBT08sSUFBUCxFQUFhRyxRQUFiLENBQUwsRUFBOEI7QUFDN0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVYsTUFBT08sU0FBUCxDQUFKLEVBQXdCO0FBQ3ZCLFFBQU0sSUFBSUcsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVCxNQUFPTyxLQUFQLENBQUosRUFBb0I7QUFDbkIsUUFBTSxJQUFJRSxLQUFKLENBQVcsc0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9QLEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlRLFNBQVNULEtBQUtVLElBQUwsQ0FBV0YsSUFBWCxFQUFtQkwsSUFBbkIsRUFBeUJDLFNBQXpCLEVBQW9DLElBQXBDLENBQWI7O0FBRUEsS0FBSVYsS0FBTWUsTUFBTixDQUFKLEVBQW9CO0FBQ25CLFNBQU9KLEtBQVA7QUFFQSxFQUhELE1BR00sSUFBSUksT0FBT0UsTUFBUCxJQUFpQixDQUFyQixFQUF3QjtBQUM3QixTQUFPRixPQUFRLENBQVIsQ0FBUDtBQUVBLEVBSEssTUFHRDtBQUNKLFNBQU9BLE1BQVA7QUFDQTtBQUNELENBbEREOztBQW9EQUcsT0FBT0MsT0FBUCxHQUFpQlgsT0FBakIiLCJmaWxlIjoiZGVwaGFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZXBoYWxsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkZXBoYWxsL2RlcGhhbGwuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRlcGhhbGwuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGVwaGFsbFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlcGhhbGwuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV4dHJhY3QgYWxsIGRlc2lnbmF0ZWQgcGFyYW1ldGVyIGFuZCBkZWZhdWx0IHRvIGEgZ2l2ZW4gdmFsdWUgaWYgdW5kZWZpbmVkLlxuXG5cdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGV4dHJhY3QgdHJ1dGh5IHZhbHVlcy5cblxuXHRcdElmIHRoZSByZXN1bHQgY29udGFpbnMgc2luZ2xlIGVsZW1lbnQgdGhlbiBpdCB3aWxsIHJldHVybiB0aGF0IGVsZW1lbnQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcblxuXHRAZ2xvYmFsLWNvbnN0YW50OlxuXHRcdHtcblx0XHRcdFwiQk9PTEVBTlwiOiBcImJvb2xlYW5cIixcblx0XHRcdFwiRlVOQ1RJT05cIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XCJOVU1CRVJcIjogXCJudW1iZXJcIixcblx0XHRcdFwiT0JKRUNUXCI6IFwib2JqZWN0XCIsXG5cdFx0XHRcIlNUUklOR1wiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJVTkRFRklORURcIjogXCJ1bmRlZmluZWRcIixcblx0XHRcdFwiU1lNQk9MXCI6IFwic3ltYm9sXCJcblx0XHR9XG5cdEBlbmQtZ2xvYmFsLWNvbnN0YW50XG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmhhcmRlbiggXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiICk7XG5oYXJkZW4oIFwiRlVOQ1RJT05cIiwgXCJmdW5jdGlvblwiICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcbmhhcmRlbiggXCJPQkpFQ1RcIiwgXCJvYmplY3RcIiApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBcInN0cmluZ1wiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBkZXBoYWxsID0gZnVuY3Rpb24gZGVwaGFsbCggbGlzdCwgY29uZGl0aW9uLCBkZWZlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJkZWZlcjpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggbGlzdCwgQVNfQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpc3RcIiApO1xuXHR9XG5cblx0aWYoIGZhbHplKCBjb25kaXRpb24gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvblwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGRlZmVyICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZGVmZXIgdmFsdWUgbm90IGdpdmVcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IHJlc3VsdCA9IHB5Y2suYmluZCggc2VsZiApKCBsaXN0LCBjb25kaXRpb24sIHRydWUgKTtcblxuXHRpZiggYXJpZCggcmVzdWx0ICkgKXtcblx0XHRyZXR1cm4gZGVmZXI7XG5cblx0fWVsc2UgaWYoIHJlc3VsdC5sZW5ndGggPT0gMSApe1xuXHRcdHJldHVybiByZXN1bHRbIDAgXTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGhhbGw7XG4iXX0=
