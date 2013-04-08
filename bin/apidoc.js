#!/usr/bin/env node

"use strict";

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
  grunt.log.writeln("grunt-init: Create REST-API-Documentation with apidoc. (v" + pkg.version + ")");
};

// Version.
if(grunt.cli.options.version)
  console.log("grunt-init v" + pkg.version);
}

// Execute.
grunt.cli();