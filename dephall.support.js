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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhhbGwuanMiXSwibmFtZXMiOlsiYXJpZCIsInJlcXVpcmUiLCJkb3VidCIsImZhbHplIiwiZmFsenkiLCJoYXJkZW4iLCJweWNrIiwiemVsZiIsImRlcGhhbGwiLCJsaXN0IiwiY29uZGl0aW9uIiwiZGVmZXIiLCJBU19BUlJBWSIsIkVycm9yIiwic2VsZiIsInJlc3VsdCIsImJpbmQiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7O0FBRUFJLE9BQVEsU0FBUixFQUFtQixTQUFuQjtBQUNBQSxPQUFRLFVBQVIsRUFBb0IsVUFBcEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjs7QUFFQSxJQUFNRyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxTQUF4QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxLQUFJLENBQUNULE1BQU9PLElBQVAsRUFBYUcsUUFBYixDQUFMLEVBQThCO0FBQzdCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlWLE1BQU9PLFNBQVAsQ0FBSixFQUF3QjtBQUN2QixRQUFNLElBQUlHLEtBQUosQ0FBVyxtQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVQsTUFBT08sS0FBUCxDQUFKLEVBQW9CO0FBQ25CLFFBQU0sSUFBSUUsS0FBSixDQUFXLHNCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPUCxLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJUSxTQUFTVCxLQUFLVSxJQUFMLENBQVdGLElBQVgsRUFBbUJMLElBQW5CLEVBQXlCQyxTQUF6QixFQUFvQyxJQUFwQyxDQUFiOztBQUVBLEtBQUlWLEtBQU1lLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPSixLQUFQO0FBRUEsRUFIRCxNQUdNLElBQUlJLE9BQU9FLE1BQVAsSUFBaUIsQ0FBckIsRUFBd0I7QUFDN0IsU0FBT0YsT0FBUSxDQUFSLENBQVA7QUFFQSxFQUhLLE1BR0Q7QUFDSixTQUFPQSxNQUFQO0FBQ0E7QUFDRCxDQWxERDs7QUFvREFHLE9BQU9DLE9BQVAsR0FBaUJYLE9BQWpCIiwiZmlsZSI6ImRlcGhhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlcGhhbGxcIixcblx0XHRcdFwicGF0aFwiOiBcImRlcGhhbGwvZGVwaGFsbC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGVwaGFsbC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZXBoYWxsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGVwaGFsbC5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXh0cmFjdCBhbGwgZGVzaWduYXRlZCBwYXJhbWV0ZXIgYW5kIGRlZmF1bHQgdG8gYSBnaXZlbiB2YWx1ZSBpZiB1bmRlZmluZWQuXG5cblx0XHROb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgZXh0cmFjdCB0cnV0aHkgdmFsdWVzLlxuXG5cdFx0SWYgdGhlIHJlc3VsdCBjb250YWlucyBzaW5nbGUgZWxlbWVudCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoYXQgZWxlbWVudC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuXG5cdEBnbG9iYWwtY29uc3RhbnQ6XG5cdFx0e1xuXHRcdFx0XCJCT09MRUFOXCI6IFwiYm9vbGVhblwiLFxuXHRcdFx0XCJGVU5DVElPTlwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcIk5VTUJFUlwiOiBcIm51bWJlclwiLFxuXHRcdFx0XCJPQkpFQ1RcIjogXCJvYmplY3RcIixcblx0XHRcdFwiU1RSSU5HXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcIlVOREVGSU5FRFwiOiBcInVuZGVmaW5lZFwiLFxuXHRcdFx0XCJTWU1CT0xcIjogXCJzeW1ib2xcIlxuXHRcdH1cblx0QGVuZC1nbG9iYWwtY29uc3RhbnRcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcbmhhcmRlbiggXCJGVU5DVElPTlwiLCBcImZ1bmN0aW9uXCIgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgXCJudW1iZXJcIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFwic3RyaW5nXCIgKTtcbmhhcmRlbiggXCJVTkRFRklORURcIiwgXCJ1bmRlZmluZWRcIiApO1xuaGFyZGVuKCBcIlNZTUJPTFwiLCBcInN5bWJvbFwiICk7XG5cbmNvbnN0IGRlcGhhbGwgPSBmdW5jdGlvbiBkZXBoYWxsKCBsaXN0LCBjb25kaXRpb24sIGRlZmVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRPQkpFQ1QsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImRlZmVyOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBsaXN0LCBBU19BUlJBWSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbGlzdFwiICk7XG5cdH1cblxuXHRpZiggZmFsemUoIGNvbmRpdGlvbiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY29uZGl0aW9uXCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggZGVmZXIgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJkZWZlciB2YWx1ZSBub3QgZ2l2ZVwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgcmVzdWx0ID0gcHljay5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiwgdHJ1ZSApO1xuXG5cdGlmKCBhcmlkKCByZXN1bHQgKSApe1xuXHRcdHJldHVybiBkZWZlcjtcblxuXHR9ZWxzZSBpZiggcmVzdWx0Lmxlbmd0aCA9PSAxICl7XG5cdFx0cmV0dXJuIHJlc3VsdFsgMCBdO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVwaGFsbDtcbiJdfQ==
