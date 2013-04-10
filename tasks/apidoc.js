/*
 * grunt-apidoc
 * https://github.com/apidoc/grunt-apidoc
 * http://apidocjs.com
 *
 * Copyright (c) 2013 inveris OHG
 * Author Peter Rottmann <rottmann@inveris.de>
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

	// Modules.
	var apidoc = require("apidoc");

	// Task.
	grunt.registerMultiTask("apidoc", "Create REST-API-Documentation with apidoc", function() {
		var config = this.data;
		var options = config.options || {};

		grunt.log.subhead("grunt-apidoc");

		// Options.
		options.src = config.src || config.i || options.i;
		options.dest = config.dest || config.o || options.o;
		options.template = config.template || config.t || options.t;

		// Execute.
		var countFiles = apidoc(options);

		if(typeof countFiles === "number")
		{
			grunt.log.ok("grunt-apidoc finished. Files with apidoc: " + countFiles);
			this.async(true);
		}
		else
		{
			grunt.log.error("grunt-apidoc error: Execution terminated (set \"options { debug: true }\" in Gruntfile.js for details.");
			this.async(false);
		}
	}); // registerMultiTask

}; // module.exports