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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhhbGwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsInB5Y2siLCJzaGZ0IiwidHJ1bHkiLCJ6ZWxmIiwiZGVwaGFsbCIsImxpc3QiLCJjb25kaXRpb24iLCJkZWZlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwic2VsZiIsInJlc3VsdCIsImJpbmQiLCJmaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxTQUF4QixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsUUFBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLE9BQU9SLEtBQU0sSUFBTixDQUFYOztBQUVBLEtBQUlTLFNBQVNaLEtBQUthLElBQUwsQ0FBV0YsSUFBWCxFQUFtQk4sSUFBbkIsRUFBeUJDLFNBQXpCLEVBQW9DLElBQXBDLENBQWI7O0FBRUEsS0FBSVIsS0FBTWMsTUFBTixDQUFKLEVBQW9CO0FBQ25CTCxVQUFRTixLQUFNTyxTQUFOLEVBQWlCLENBQWpCLENBQVI7O0FBRUEsU0FBT1IsS0FBS2EsSUFBTCxDQUFXRixJQUFYLEVBQW1CSixNQUFNTyxNQUFOLENBQWNaLEtBQWQsQ0FBbkIsRUFBMENJLFNBQTFDLEVBQXFELElBQXJELENBQVA7O0FBRUEsRUFMRCxNQUtLO0FBQ0osU0FBT00sTUFBUDtBQUNBO0FBQ0QsQ0E5Q0Q7O0FBZ0RBRyxPQUFPQyxPQUFQLEdBQWlCWixPQUFqQiIsImZpbGUiOiJkZXBoYWxsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRlcGhhbGxcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZGVwaGFsbC9kZXBoYWxsLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImRlcGhhbGwuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZXBoYWxsXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RlcGhhbGwuZ2l0XCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXHJcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RXh0cmFjdCBhbGwgZGVzaWduYXRlZCBwYXJhbWV0ZXIgYW5kIGRlZmF1bHQgdG8gYSBnaXZlbiB2YWx1ZSBpZiB1bmRlZmluZWQuXHJcblxyXG5cdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGV4dHJhY3QgdHJ1dGh5IHZhbHVlcy5cclxuXHJcblx0XHRUaGlzIHdpbGwgYWx3YXlzIHJldHVybiBhbiBhcnJheS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcblxyXG4qL1xyXG5cclxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XHJcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xyXG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XHJcblxyXG5jb25zdCBkZXBoYWxsID0gZnVuY3Rpb24gZGVwaGFsbCggbGlzdCwgY29uZGl0aW9uLCBkZWZlciApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIkFyZ3VtZW50c1wiLFxyXG5cdFx0XHRcdFx0XCJbKl1cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJjb25kaXRpb246cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFJlZ0V4cCxcclxuXHRcdFx0XHRcdEJPT0xFQU4sXHJcblx0XHRcdFx0XHRGVU5DVElPTixcclxuXHRcdFx0XHRcdE5VTUJFUixcclxuXHRcdFx0XHRcdE9CSkVDVCxcclxuXHRcdFx0XHRcdFNUUklORyxcclxuXHRcdFx0XHRcdFVOREVGSU5FRCxcclxuXHRcdFx0XHRcdFNZTUJPTCxcclxuXHRcdFx0XHRcdFwiKlwiLFxyXG5cdFx0XHRcdFx0XCJbKl1cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJkZWZlcjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiLi4uXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPCAzICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXJhbWV0ZXJcIiApO1xyXG5cdH1cclxuXHJcblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XHJcblxyXG5cdGxldCByZXN1bHQgPSBweWNrLmJpbmQoIHNlbGYgKSggbGlzdCwgY29uZGl0aW9uLCB0cnVlICk7XHJcblxyXG5cdGlmKCBhcmlkKCByZXN1bHQgKSApe1xyXG5cdFx0ZGVmZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDIgKTtcclxuXHJcblx0XHRyZXR1cm4gcHljay5iaW5kKCBzZWxmICkoIGRlZmVyLmZpbHRlciggdHJ1bHkgKSwgY29uZGl0aW9uLCB0cnVlICk7XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGhhbGw7XHJcbiJdfQ==
//# sourceMappingURL=dephall.support.js.map
