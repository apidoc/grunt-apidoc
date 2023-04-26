'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // apidoc configuration
    apidoc: {
      build: {
        src: 'src',
        dest: 'tmp/',
        options: {
          debug: true,
          includeFilters: ['.*\\.js$'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-apidoc');
  // Task: build api documentation
  grunt.registerTask('default', 'apidoc');
};
