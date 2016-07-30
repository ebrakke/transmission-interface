'use strict';
/**
 * Parse the output of the transmission torrent list command
 * @param {String} rawOutput -- The output from the list command
 * @return {List}            -- The objectified torrent list
 */
export function parseTorrentList(rawOutput) {
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
