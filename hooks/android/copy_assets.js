#!/usr/bin/env node

// Files to be copied, with source and destination

var ncp = require('ncp').ncp,
    transfers = [
      {
        'source': './config/android/release-signing.properties',
        'destination': './platforms/android/release-signing.properties'
      }
    ];

ncp.limit = 16;

transfers.forEach(function(transfer) {
  ncp(transfer.source, transfer.destination, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('====== Assets moved from ' + transfer.source + ' to ' + transfer.destination + ' ======');
  });
});
