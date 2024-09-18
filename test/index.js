import re from '../esm/index.js';
// to test the helper too use instead
// import re from '../index.js';

const assert = (current, expected, message = 'invalid result') => {
  console.assert(current === expected, message);
  if (current !== expected)
    throw new Error(`expected ${expected} but got ${current}`);
};

let { source, flags } = re`/a/`;
assert(source, 'a');
assert(flags, '');

({ source, flags } = re`/a/g`);
assert(source, 'a');
assert(flags, 'g');

({ source, flags } = re`/a${'?-'}c/gm`);
assert(source, 'a\\?\\x2dc');
assert(flags, 'gm');

try {
  ({ source, flags } = re`/a${null}c/gm`);
}
catch (all_good) {}
