'use strict';
var express = require('express');
var router = express.Router();

/**
 * Call the tranmission client to get the list of torrents
 * @param {String} filter      -- A filter for the list of torrents
 * @param {Object} credentials -- Credentials for the tranmission client
 * @return {Array}            -- A list of the torrents
 */
function getTorrents(filter, credentials) {
  return [
    {
      id: 4,
      done: 100,
      have: 621.7,
      eta: 'Unknown',
      up: 0,
      down: 0,
      ratio: 0,
      status: 'Stopped',
      name: 'ubuntu-14.04.4-desktop-amd64.iso'
    }
  ];
}

/* GET all torrents. */
router.get('/torrents/:filter', (req, res, next) => {
  // Mocking command to get all torrents
  let torrents = getTorrents(req.params.filter);
  res.json({torrents: torrents});
});

module.exports = router;
