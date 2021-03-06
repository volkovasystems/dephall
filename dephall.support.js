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

//# sourceMappingURL=dephall.support.js.map