/*
 * grunt-build-target
 * https://github.com/rottmann/grunt-build-target
 *
 * Copyright (c) 2013 Peter Rottmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    buildtarget: {
      dev: {
        options: {
          // customReplace: [], // custom functions
          type: 'auto' // Values: custom, html, js, auto (depend on file extions .html or .js)
        },
        files: [{
          expand: true,
          cwd: "test/fixtures/src/",
          src: ["**/*.*"],
          dest: "tmp/",
          rename: function(dest, matchedSrcPath) {
            return dest + 'dev_' + matchedSrcPath;
          }
        }]
      },
      dist: {
        options: {
          // customReplace: [], // custom functions
          type: 'auto' // Values: custom, html, js, auto (depend on file extions .html or .js)
        },
        files: [{
          expand: true,
          cwd: "test/fixtures/src/",
          src: ["**/*.*"],
          dest: "tmp/",
          rename: function(dest, matchedSrcPath) {
            return dest + 'dist_' + matchedSrcPath;
          }
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'buildtarget', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};