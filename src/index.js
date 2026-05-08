'use strict';

const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'FU2008-3',
  'Fm2008-23',
  'FM2022-1',
];

/**
 * @param {string[]} arr 
 * @returns {string[]}
 * The function takes an array of group names, checks for pattern matching, and returns an array of strings with the results
 */
function checkGroup(arr) {
  const reg = /^(F[DME]|f[dme])20\d{2}(-\d+)?$/;
  return arr.map(group => `${group}: ${reg.test(group) ? 'Success' : 'Error'}`);
}

console.log(checkGroup(arrGroups)); 