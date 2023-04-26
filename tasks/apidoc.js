module.exports = function (grunt) {
  // modules
  const apidoc = require('apidoc');

  // task
  grunt.registerMultiTask('apidoc', 'Create REST-API-Documentation with apidoc', function () {
    const config = this.data;
    const options = config.options || {};

    grunt.log.subhead('grunt-apidoc');

    // options
    options.src = config.src || config.i || options.i;
    options.dest = config.dest || config.o || options.o;
    options.template = config.template || config.t || options.t;

    // execute
    const result = apidoc.createDoc(options);

    if (result === false) {
      grunt.log.error('grunt-apidoc error: Execution terminated (set \'options: { debug: true }\' in Gruntfile.js for details.');
      return false;
    } else {
      grunt.log.ok('grunt-apidoc finished.');
      return true;
    }
  });
};
