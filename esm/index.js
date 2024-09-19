import escapeString from 'escape-string-regexp';

const $ = RegExp.escape || escapeString;
const escape = value => $(value);

/**
 * Sanitize interpolations for safer RegExp definition.
 * @param {TemplateStringsArray} template
 * @param {unknown[]} values
 * @returns {RegExp}
 */
export default ({ raw }, ...values) => {
  let [s] = raw, { length } = raw, i = 0;
  while (++i < length)
    s += [].concat(values[i - 1]).map(escape).join('|') + raw[i];
  i = s.lastIndexOf('/');
  return new RegExp(s.slice(1, i), s.slice(i + 1));
};
