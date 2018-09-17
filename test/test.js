/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 15, 2018
*************************************************************************/

import * as assert from 'assert';
import { exchanger } from '../dist/index.js';

const setcase = [
  { cur:    0, coins: { } },
  { cur:    1, coins: { "P":   1 } },
  { cur:    9, coins: { "N":   1, "P": 4 } },
  { cur:   15, coins: { "D":   1, "N": 1 } },
  { cur:   18, coins: { "D":   1, "N": 1, "P": 3 } },
  { cur:   20, coins: { "D":   2 } },
  { cur:   49, coins: { "Q":   1, "D": 2, "P": 4 } },
  { cur:   50, coins: { "H":   1 } },
  { cur:   75, coins: { "H":   1, "Q": 1 } },
  { cur:  199, coins: { "H":   3, "Q": 1, "D": 2, "P": 4 } },
  { cur:  243, coins: { "H":   4, "Q": 1, "D": 1, "N": 1,"P": 3 } },
  { cur: 1001, coins: { "H":  20, "P": 1 } },
  { cur: 2004, coins: { "H":  40, "P": 4 } },
  { cur: 3005, coins: { "H":  60, "N": 1 } },
  { cur: 4020, coins: { "H":  80, "D": 2 } },
  { cur: 5025, coins: { "H": 100, "Q": 1 } },
  { cur: 6013, coins: { "H": 120, "D": 1, "P": 3 } },
  { cur: 7047, coins: { "H": 140, "Q": 1, "D": 2, "P": 2 } },
  { cur: 8586, coins: { "H": 171, "Q": 1, "D": 1, "P": 1 } },
  { cur: 9999, coins: { "H": 199, "Q": 1, "D": 2, "P": 4 } }
];

describe('Generic Test', () => {
  setcase.forEach((set, inx) => it(`${inx+1}`, () => assert.deepEqual(exchanger(set.cur), set.coins)));
});

const crashset = {
  error: /The exchange limit is exceeded/,
  cur: [ 10000, 10001, 50000, 99999, 100000 ]
};

describe('Crash Test', () => {
  crashset.cur.forEach((set, inx) => {
    it(`${inx+1}`, () => assert.throws(() => exchanger(set), crashset.error));
  });
});
