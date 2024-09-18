import escape from 'escape-string-regexp';

const scape = RegExp.escape || escape;

/**
 * Sanitize interpolations for safer RegExp definition.
 * @param {TemplateStringsArray} template
 * @param {unknown[]} values
 * @returns {RegExp}
 */
export default ({ raw }, ...values) => {
  let [e] = raw, { length } = raw, i = 0;
  while (++i < length)
    e += scape(values[i - 1]) + raw[i];
  i = e.lastIndexOf('/');
  return new RegExp(e.slice(1, i), e.slice(i + 1));
};
