#!/usr/bin/env node

"use strict";

/*
 * grunt-apidoc
 * https://github.com/apidoc/grunt-apidoc
 * http://apidocjs.com
 *
 * Copyright (c) 2013 inveris OHG
 * Author Peter Rottmann <rottmann@inveris.de>
 * Licensed under the MIT license.
 */

// Modules.
var path = require("path");
var grunt = require("grunt");

var basePath = path.resolve.bind(null, __dirname, "..");

var pkg = require(basePath("package.json"));

grunt.task.loadTasks(basePath("tasks"));

// Help.
grunt.help.queue = [
	"content"
];

grunt.help.content = function() {
  grunt.log.writeln("grunt-init: Create RESTful API Documentation with apidoc. (v" + pkg.version + ")");
};

// Version.
if(grunt.cli.options.version)
  console.log("grunt-init v" + pkg.version);
}

// Execute.
grunt.cli();