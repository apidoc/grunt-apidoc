# Grunt apidoc

## About
[Cloud Files](https://github.com/) is Rackspace's cloud object storage. It's simliar to Amazon S3.

This task is based on [grunt-s3](https://github.com/pifantastic/grunt-s3) by Aaron Forsander, 
and uses the [pkgcloud](https://github.com/nodejitsu/pkgcloud) client by Nodejitsu. 

This is all designed to work with Rackspace Cloud Files, and hasn't been tested on OpenStack Storage.

## Installation
1. `npm install grunt-cloudfiles --save-dev` (or manually add `grunt-cloudfiles` to your `package.json`).
1. Add `grunt.loadNpmTasks('grunt-cloudfiles');` to `Gruntfile.js`

## Configuration

Add the task to your Gruntfile's **grunt.initConfig**:
```javascript
cloudfiles: {
  prod: {
    'user': 'your Rackspace username',
    'key': 'your Rackspace API key',
    'upload': [{
      'container': 'name of your Cloud Files container',
      'src': 'source/static/**/*',
      'dest': 'some/folder/',
      'stripcomponents': 1
    }]
  }
}
```

**Stripcomponents** (as in tar) will strip _X_ leading path parts from the source dir.
In the example above, the file `source/static/js/app/main.js` 
will be uploaded to `some/folder/static/js/app/main.js`, with the `source/` part being removed.

Since this is a multi task, you can add **multiple targets** as needed. 
In this example we only have `prod`, but you could have `staging`, etc.

Remember that your Rackspace **API key** is private. If you are commiting your Gruntfile 
to a public repository, you probably want to store it in a separate local_config.json file.

For Rackspace UK users an additional configuration parameter `authUrl` is required to use the correct CDN url for UK accounts.

```javascript
cloudfiles: {
  prod: {
    ...
    'authUrl': 'lon.identity.api.rackspacecloud.com',
    ...
  }
}
```

## Changelog

### 0.0.1

* Initial release
