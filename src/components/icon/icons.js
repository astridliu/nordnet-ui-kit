import camelCase from 'lodash.camelcase';
const icons = require.context('../../icons/', false, /\.svg$/);

export default icons.keys().reduce((prev, curr) => {
  const icon = curr.replace(/\.\//, '');
  const iconName = camelCase(icon.replace(/\.svg$/, ''));
  prev[iconName] = require(`!!svg-icon-template-loader!../../icons/${icon}`); // eslint-disable-line
  return prev;
}, {});
