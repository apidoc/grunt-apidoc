# grunt-apidoc

[![Build Status](https://travis-ci.org/apidoc/grunt-apidoc.svg?branch=master)](https://travis-ci.org/apidoc/grunt-apidoc)


## About
Generates a RESTful API Documentation with [apiDoc](http://apidocjs.com).

Generated example documentation at [http://apidocjs.com/example/](http://apidocjs.com/example/)


## Installation
1. `npm install grunt-apidoc --save-dev`
2. Add `grunt.loadNpmTasks('grunt-apidoc');` to `Gruntfile.js`


## Configuration

Add the task to your Gruntfile's **grunt.initConfig**:
```javascript
apidoc: {
  myapp: {
    src: "app/",
    dest: "apidoc/"
  }
}
```

Use only one src and one dest, apiDoc search in subdirs for files with apidoc-parameters.


### Additional options

All `apiDoc` options can be used within options-block, see [apiDoc configure](http://apidocjs.com/#configure) for details,
or look [directly at the code](https://github.com/apidoc/apidoc/blob/master/lib/index.js#L10-L22).

* <code>src:</code> Source files directory.
* <code>dest:</code> Destination directory, where the documentation will be created.
* <code>template:</code> Directory with the template files.
* <code>options</code>
  * <code>includeFilters: [ ".*\\.js$" ]</code> RegEx, which files to parse.
  * <code>debug: false</code> Show Debug Output.
  * <code>log: true</code> Show Log Output.
  * <code>simulate: false</code> Simulation, no files will be written.

**Example options:**

**includeFilters**
With `includeFilters` you can define which files apiDoc should include, default `*.js`.

**debug**
Show verbose information.

```javascript
apidoc: {
  mypp: {
    src: "app/",
    dest: "apidoc/",
    options: {
      debug: true,
      includeFilters: [ ".*\\.js$" ],
      excludeFilters: [ "node_modules/" ]
    }
  }
}
```


## Changelog

* `0.11.0` Update for Grunt 1.
* `0.10.2` Update dependencies.
* `0.10.1` Update dependencies.
* `0.10.0` Upgrade to use always the latest version of apiDoc.
* `0.9.0` Upgrade to apiDoc 0.9.x.
* `0.8.0` Upgrade to apiDoc 0.8.x.
* `0.7.0` Upgrade to apiDoc 0.7.x.
* `0.6.0` Upgrade to apiDoc 0.6.x.
* `0.5.0` Upgrade to apiDoc 0.5.x.
* `0.4.0` Upgrade to apiDoc 0.4.x.
* `0.3.0` Upgrade to apiDoc 0.3.x.
* `0.2.1` remove this.async() (Iolo https://github.com/apidoc/grunt-apidoc/pull/2)
* `0.2.0` Upgrade to apiDoc 0.2.x.
* `0.1.2` Grunt peer dependencies.
* `0.1.1` Change binary Name.
* `0.1.0` Initial release.


## Help

Please visit the main [apiDoc project page on github](https://github.com/apidoc/apidoc) for help and information.
