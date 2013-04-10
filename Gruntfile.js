/*
 * grunt-apidoc
 * https://github.com/apidoc/grunt-apidoc
 * http://apidocjs.com
 *
 * Copyright (c) 2013 inveris OHG
 * Author Peter Rottmann <rottmann@inveris.de>
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // clear temporary dir.
    clean: {
      test: ["tmp"]
    }, // clean

    // apidoc configuration.
    apidoc: {
      test: {
        src: "test/fixtures",
        dest: "tmp/",
        options: {
          debug: true,
          includeFilters: [ ".*\\.js$" ]
        }
      }
    } // apidoc

  }); // grunt.initConfig

  // Load plugins tasks.
  grunt.loadTasks("tasks");

  // Tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");

  // Tasks: Default
  grunt.registerTask('default', ["jshint"]);

  // Tasks: Test
  grunt.registerTask('test', ["clean", "apidoc"]);

}; // module.exports