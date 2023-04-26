# grunt-apidoc

## About

Use [Grunt](https://gruntjs.com/) to generate a RESTful API Documentation with [apiDoc](http://apidocjs.com).

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

All `apiDoc` options can be used within options-block, see `apidoc -h`.

* <code>src:</code> Source files directory.
* <code>dest:</code> Destination directory, where the documentation will be created.
* <code>template:</code> Directory with the template files.
* <code>options</code>
* <code>includeFilters: `[ ".*\\.js$" ]`</code> RegEx, which files to parse.
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
  myapp: {
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



## Help

Please visit the main [apiDoc project page on github](https://github.com/apidoc/apidoc) for help and information.
