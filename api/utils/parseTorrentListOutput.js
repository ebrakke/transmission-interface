'use strict';
const test = `ID     Done       Have  ETA           Up    Down  Ratio  Status       Name
   1    58%   621.7 MB  Unknown      0.0     0.0    0.0  Stopped      ubuntu-14.04.4-desktop-amd64.iso
   2    10%   621.7 MB  Unknown      0.0     0.0    0.0  Stopped      ubuntu-14.04.4-desktop-amd64.iso
   3    23%   621.7 MB  Unknown      0.0     0.0    0.0  Stopped      ubuntu-14.04.4-desktop-amd64.iso
   4    100%  621.7 MB  Unknown      0.0     0.0    0.0  Stopped      ubuntu-14.04.4-desktop-amd64.iso
Sum:          621.7 MB               0.0     0.0`;

/**
 * Parse the output of the transmission torrent list command
 * @param {String} rawOutput -- The output from the list command
 * @return {List}            -- The objectified torrent list
 */
function parseTorrentList(rawOutput) {
  let rawTorrentList = rawOutput.split(/\n/);
  let objectTorrentList = [];
  for (let i = 1; i < rawTorrentList.length - 1; i++) {
    objectTorrentList.push(convertLineToObject(rawTorrentList[i]));
  }
  return objectTorrentList;
}

/**
 * Convert a transmission line item into an object
 * @param {String} line -- The raw string line
 * @return {Object}     -- The objectified line item
 */
function convertLineToObject(line) {
  let row = line.split(/\s\s+/).splice(1); // First entry is empty
  let columns = ['id', 'done', 'have', 'eta', 'up', 'down', 'ratio', 'status', 'name'];
  let rowObj = {};
  row.forEach((item, index) => {
    let parsedItem = parseFloat(item);
    if (parsedItem || parsedItem === 0) {
      rowObj[columns[index]] = parsedItem;
      return;
    }
    rowObj[columns[index]] = item;
  });

  return rowObj;
}

console.log(parseTorrentList(test));
