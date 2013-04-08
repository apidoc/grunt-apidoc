/*
 * grunt-build-target
 * https://github.com/rottmann/grunt-build-target
 *
 * Copyright (c) 2013 Peter Rottmann
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt');

var tmpPath = 'tmp/',
    fixturesPath = 'test/fixtures/expected/';

exports.build_target = {
  buildtarget_files: function(test)
  {

    var files = [
      'simple.html',
      'simple.js'
    ];

    // Every file with "dist_" and "dev_"
    test.expect(files.length * 2);

    files.forEach(function(file)
    {
      // File dev.
      var filename = 'dev' + '_' + file;
      var tmpFilename = tmpPath + filename;
      var expectedFilename = fixturesPath + filename;
      var tmpFile = grunt.file.read(tmpFilename);
      var expectedFile = grunt.file.read(expectedFilename);
      test.equal(tmpFile, expectedFile, 'task output of "' + tmpFilename + '" should equal "' + expectedFilename + '"');

      // File dist.
      filename = 'dist' + '_' + file;
      tmpFilename = tmpPath + filename;
      expectedFilename = fixturesPath + filename;
      tmpFile = grunt.file.read(tmpFilename);
      expectedFile = grunt.file.read(expectedFilename);
      test.equal(tmpFile, expectedFile, 'task output of "' + tmpFilename + '" should equal "' + expectedFilename + '"');
    });

    // Done
    test.done();
  }
};