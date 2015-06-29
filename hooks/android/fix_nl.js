#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

function fix_strings() {
    var stringsDirectory = path.join('.','platforms','android','res','values-nl');

    var writeFile = function() {
      var stringsFilename = path.join('.','platforms','android','res','values-nl','strings.xml');

      var content = [];
      content.push('<?xml version=\'1.0\' encoding=\'utf-8\'?>');
      content.push('<resources>');
      content.push('    <string name="app_name">RegenTijd</string>');
      content.push('    <string name="launcher_name">@string/app_name</string>');
      content.push('    <string name="activity_name">@string/launcher_name</string>');
      content.push('</resources>');

      fs.writeFileSync(stringsFilename, content.join('\n'));
    };

    try {
      if (!fs.existsSync(stringsDirectory)){
          fs.mkdir(stringsDirectory, writeFile);
          return;
      }

      writeFile();
    } catch (e) {
      throw e;
    }
}

fix_strings();