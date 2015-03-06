#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

function fix_manifest() {
    var manifestFilename = path.join('.','platforms','firefoxos','www','manifest.webapp');

    try {
      var stat = fs.lstatSync(manifestFilename);
      if (stat.isFile()) {
        fs.readFile(manifestFilename, 'utf8', function (err, data) {
          if (err) { throw(err); return; }
          var manifest = JSON.parse(data);
          manifest = manifest || {};
          manifest.type = 'privileged';
          manifest.permissions = manifest.permissions || {};
          manifest.permissions.systemXHR = {
            description: "Fetching data from other domains"
          }
          fs.writeFileSync(manifestFilename, JSON.stringify(manifest, null, '\t'));
        });
      }
    } catch (e) {
      throw e;
    }
}

fix_manifest();