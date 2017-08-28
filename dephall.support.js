"use strict"; /*;
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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/dephall.git",
              			"global": true,
              			"class": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract all designated parameter and default to a given value if undefined.
              
              		Note that this will only extract truthy values.
              
              		This will always return an array.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"pyck": "pyck",
              			"shft": "shft",
              			"truly": "truly",
              			"zelf": "zelf"
              		}
              	@end-include
              
              */

var arid = require("arid");
var pyck = require("pyck");
var shft = require("shft");
var truly = require("truly");
var zelf = require("zelf");

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
                                                        				RegExp,
                                                        				BOOLEAN,
                                                        				FUNCTION,
                                                        				NUMBER,
                                                        				OBJECT,
                                                        				STRING,
                                                        				UNDEFINED,
                                                        				SYMBOL,
                                                        				"*",
                                                        				"[*]"
                                                        			],
                                                        			"defer:required": [
                                                        				"*",
                                                        				"..."
                                                        			]
                                                        		}
                                                        	@end-meta-configuration
                                                        */

	if (arguments.length < 3) {
		throw new Error("invalid parameter");
	}

	var self = zelf(this);

	var result = pyck.bind(self)(list, condition, true);

	if (arid(result)) {
		defer = shft(arguments, 2);

		return pyck.bind(self)(defer.filter(truly), condition, true);

	} else {
		return result;
	}
};

module.exports = dephall;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhhbGwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsInB5Y2siLCJzaGZ0IiwidHJ1bHkiLCJ6ZWxmIiwiZGVwaGFsbCIsImxpc3QiLCJjb25kaXRpb24iLCJkZWZlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwic2VsZiIsInJlc3VsdCIsImJpbmQiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxTQUF4QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsUUFBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9SLEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlTLFNBQVNaLEtBQUthLElBQUwsQ0FBV0YsSUFBWCxFQUFtQk4sSUFBbkIsRUFBeUJDLFNBQXpCLEVBQW9DLElBQXBDLENBQWI7O0FBRUEsS0FBSVIsS0FBTWMsTUFBTixDQUFKLEVBQW9CO0FBQ25CTCxVQUFRTixLQUFNTyxTQUFOLEVBQWlCLENBQWpCLENBQVI7O0FBRUEsU0FBT1IsS0FBS2EsSUFBTCxDQUFXRixJQUFYLEVBQW1CSixNQUFNTyxNQUFOLENBQWNaLEtBQWQsQ0FBbkIsRUFBMENJLFNBQTFDLEVBQXFELElBQXJELENBQVA7O0FBRUEsRUFMRCxNQUtLO0FBQ0osU0FBT00sTUFBUDtBQUNBO0FBQ0QsQ0E5Q0Q7O0FBZ0RBRyxPQUFPQyxPQUFQLEdBQWlCWixPQUFqQiIsImZpbGUiOiJkZXBoYWxsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGVwaGFsbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGVwaGFsbC9kZXBoYWxsLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkZXBoYWxsLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRlcGhhbGxcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlcGhhbGwuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV4dHJhY3QgYWxsIGRlc2lnbmF0ZWQgcGFyYW1ldGVyIGFuZCBkZWZhdWx0IHRvIGEgZ2l2ZW4gdmFsdWUgaWYgdW5kZWZpbmVkLlxuXG5cdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGV4dHJhY3QgdHJ1dGh5IHZhbHVlcy5cblxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGFycmF5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IGRlcGhhbGwgPSBmdW5jdGlvbiBkZXBoYWxsKCBsaXN0LCBjb25kaXRpb24sIGRlZmVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRSZWdFeHAsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiKlwiLFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJkZWZlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCIqXCIsXG5cdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA8IDMgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXJhbWV0ZXJcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IHJlc3VsdCA9IHB5Y2suYmluZCggc2VsZiApKCBsaXN0LCBjb25kaXRpb24sIHRydWUgKTtcblxuXHRpZiggYXJpZCggcmVzdWx0ICkgKXtcblx0XHRkZWZlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0cmV0dXJuIHB5Y2suYmluZCggc2VsZiApKCBkZWZlci5maWx0ZXIoIHRydWx5ICksIGNvbmRpdGlvbiwgdHJ1ZSApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGVwaGFsbDtcbiJdfQ==
//# sourceMappingURL=dephall.support.js.map
