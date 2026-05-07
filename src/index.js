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
function checkGroup2(arr) {
  const resultArr = [];
  const reg = /^(FD|fd|FM|fm|FE|fe)20\d{2}(-\d+)?$/;
  for (let i = 0; i < arr.length; i++) {
    const res = reg.test(arr[i]) ? 'Success' : 'Error';
    resultArr[i] = `${arr[i]}: ${res}`;
  }

  return resultArr;
}

console.log(checkGroup2(arrGroups));
