module.exports = function(grunt) {
  var cf = require('pkgcloud'),
    path = require('path'),
    util = require('util'),
    _ = grunt.util._;

  _.mixin(require('underscore.deferred'));

  var cfAuth = {},
    client, cf_container_name, config, cfConfig;

  function stripComponents(path, num, sep) {
    if(sep === undefined) sep = '/';
    var aString = path.split(sep)
    if(aString.length <= num) {
      return aString[aString.length - 1];
    } else {
      aString.splice(0, num);
      return aString.join(sep);
    }
  }

  grunt.registerMultiTask('cloudfiles', 'Move stuff to the cloud', function() {
    var done = this.async(),
      errors = 0;

    config = this.data;

    var clientConfig = {
      'provider': 'rackspace',
      'username': config.user,
      'apiKey': config.key
    };

    // Optional config parameter authUrl - Used to overwrite the authUrl as defined by pkgcloud
    if(config.hasOwnProperty("authUrl")){
      clientConfig.authUrl = config.authUrl;
    }

    client = cf.storage.createClient(clientConfig);

    var cfActivity = [];

   // _.when(cf_init()).done(function(init) {
      // grunt.log.debug(init + "\n  " + util.inspect(cfConfig));
      config.upload.forEach(function(upload) {
        grunt.log.subhead('Uploading into ' + upload.container);
        var files = grunt.file.expand(upload.src);

        if (upload.dest === undefined) { upload.dest = '' }

        files.forEach(function(file) {
          if (grunt.file.isFile(file)) {
            var ufile = file;
            if(upload.stripcomponents !== undefined) {
              ufile = stripComponents(ufile, upload.stripcomponents);
            }
            cfActivity.push(cf_addFile(upload.container, file, upload.dest + ufile));
          }
        })
      });

      var total = cfActivity.length;
      var errors = 0;

      cfActivity.forEach(function(activity) {
        activity.done(function(msg) {});
        activity.fail(function(msg) {
          grunt.log.error(msg);
          ++errors;
        });
        activity.always(function() {
          // If this was the last transfer to complete, we're all done.
          if(--total === 0) {
            grunt.log.write('Finished uploading ' + cfActivity.length + ' item(s)')
            done(!errors);
          }
        });
      });
    //}).fail(function(err) {
    //  grunt.log.error('Error with intiallization of Cloudfiles ::\n\t' + err);
    //});


  });

  function cf_init() {
    var dfd = _.Deferred();
    var async

    grunt.log.debug('Authenticating on Cloudfiles');
    client.setAuth(function(err, res, config) {
      if(err) {
        dfd.reject(err);
      } else {
        cfConfig = config;
        dfd.resolve('Authentication Complete');
      }
    });

    return dfd;
  }

  function cf_addFile(container, src, dest) {
    grunt.log.debug('Starting an upload');
    var dfd = _.Deferred();

    client.upload({
      'container': container,
      'remote': dest,
      'local': src
    }, function(err, uploaded, res) {
      if(err) {
        dfd.reject(err);
      } else {
        dfd.resolve(uploaded);
      }
    });

    return dfd;
  }
}