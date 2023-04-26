'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // clear temporary dir
    clean: {
      test: ['tmp'],
    },

    // apidoc configuration
    apidoc: {
      test: {
        src: 'test/fixtures',
        dest: 'tmp/',
        options: {
          debug: true,
          includeFilters: ['.*\\.js$'],
        },
      },
    },

  });

  // load plugins tasks
  grunt.loadTasks('tasks');

  // Tasks
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tasks: Test
  grunt.registerTask('test', ['clean', 'apidoc']);
};
