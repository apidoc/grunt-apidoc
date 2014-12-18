'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // clear temporary dir
    clean: {
      test: ['tmp']
    },

    // apidoc configuration
    apidoc: {
      test: {
        src: 'test/fixtures',
        dest: 'tmp/',
        options: {
          debug: true,
          includeFilters: [ '.*\\.js$' ]
        }
      }
    }

  });

  // load plugins tasks
  grunt.loadTasks('tasks');

  // Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tasks: Default
  grunt.registerTask('default', ['jshint']);

  // Tasks: Test
  grunt.registerTask('test', ['clean', 'apidoc']);

};
