import escapeString from 'escape-string-regexp';

const escape = RegExp.escape || escapeString;
const scape = value => escape(value);

/**
 * Sanitize interpolations for safer RegExp definition.
 * @param {TemplateStringsArray} template
 * @param {unknown[]} values
 * @returns {RegExp}
 */
export default ({ raw }, ...values) => {
  let [e] = raw, { length } = raw, i = 0;
  while (++i < length)
    e += [].concat(values[i - 1]).map(scape).join('|') + raw[i];
  i = e.lastIndexOf('/');
  return new RegExp(e.slice(1, i), e.slice(i + 1));
};
